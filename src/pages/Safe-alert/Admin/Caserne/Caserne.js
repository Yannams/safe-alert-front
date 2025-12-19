import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import TableContainer from "../../../../components/Common/TableContainer";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  Input,
  Form,
} from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { isEmpty } from "lodash";

// Import actions
import { getCasernes, addCaserne, updateCaserne, deleteCaserne } from "store/safe-alert/casernes/actions";

const Caserne = () => {
  document.title = "Liste des Casernes";

  const dispatch = useDispatch();

  const [selectedCaserne, setSelectedCaserne] = useState(null);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  // Selector Redux
  const casernesSelector = createSelector(
    (state) => state.casernes,
    (casernesState) => ({
      casernes: casernesState.casernes,
      loading: casernesState.loading,
    })
  );

  const { casernes, loading } = useSelector(casernesSelector);

  useEffect(() => {
    if (!casernes || casernes.length === 0) {
      dispatch(getCasernes());
    }
  }, [dispatch, casernes]);

  const toggle = () => setModal(!modal);

  const handleCaserneClick = (caserne) => {
    setSelectedCaserne(caserne);
    setIsEdit(true);
    toggle();
  };

  const onClickDelete = (caserne) => {
    setSelectedCaserne(caserne);
    setDeleteModal(true);
  };

  const handleDeleteCaserne = () => {
    if (selectedCaserne && selectedCaserne.id) {
      dispatch(deleteCaserne(selectedCaserne.id));
    }
    setDeleteModal(false);
  };

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      nom: selectedCaserne?.nom || "",
      code: selectedCaserne?.code || "",
      quartier: selectedCaserne?.localisation?.quartier || "",
      ville: selectedCaserne?.localisation?.ville || "",
      lat: selectedCaserne?.localisation?.lat || "",
      lng: selectedCaserne?.localisation?.lng || "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Veuillez saisir le nom"),
      code: Yup.string().required("Veuillez saisir le code"),
      quartier: Yup.string().required("Veuillez saisir le quartier"),
      ville: Yup.string().required("Veuillez saisir la ville"),
      lat: Yup.number().required("Veuillez saisir la latitude"),
      lng: Yup.number().required("Veuillez saisir la longitude"),
    }),
    onSubmit: (values) => {
      const caserneData = {
        nom: values.nom,
        code: values.code,
        localisation: {
          quartier: values.quartier,
          ville: values.ville,
          lat: values.lat,
          lng: values.lng,
        },
      };

      if (isEdit) {
        dispatch(updateCaserne(selectedCaserne.id, caserneData));
      } else {
        dispatch(addCaserne(caserneData));
      }

      toggle();
      setIsEdit(false);
      validation.resetForm();
    },
  });

  const columns = useMemo(
    () => [
      { header: "#", accessorKey: "nom", enableColumnFilter: false, cell: (cell) => <strong>{cell.getValue()}</strong> },
      { header: "Code", accessorKey: "code", enableColumnFilter: false },
      { header: "Quartier", accessorKey: "localisation.quartier", enableColumnFilter: false },
      { header: "Ville", accessorKey: "localisation.ville", enableColumnFilter: false },
      { header: "Latitude", accessorKey: "localisation.lat", enableColumnFilter: false },
      { header: "Longitude", accessorKey: "localisation.lng", enableColumnFilter: false },
      {
        header: "Actions",
        cell: (cellProps) => (
          <div className="d-flex gap-3">
            <Link to="#" className="text-success" onClick={() => handleCaserneClick(cellProps.row.original)}>
              <i className="mdi mdi-pencil font-size-18" />
            </Link>
            <Link to="#" className="text-danger" onClick={() => onClickDelete(cellProps.row.original)}>
              <i className="mdi mdi-delete font-size-18" />
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteCaserne}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Admin" breadcrumbItem="Casernes" />
          <Row>
            {loading ? (
              <p>Chargement...</p>
            ) : (
              <Col lg="12">
                <Card>
                  <CardBody>
                    <TableContainer
                        columns={columns}
                        data={casernes || []}
                        isGlobalFilter={true}
                        isPagination={true}
                        SearchPlaceholder="Recherche..."
                        isAddButton={true}
                        handleUserClick={() => {
                            setSelectedCaserne(null);
                            setIsEdit(false);
                            toggle();
                        }}
                        isCustomPageSize={true}
                        buttonClass="btn btn-danger btn-rounded waves-effect waves-light mb-2"
                        buttonName="Nouvelle Caserne"
                        tableClass="align-middle table-nowrap table-hover dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                        theadClass="table-light"
                        paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded "
                        pagination="pagination"
                    />
                  </CardBody>
                </Card>
              </Col>
            )}

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>{isEdit ? "Modifier Caserne" : "Ajouter Caserne"}</ModalHeader>
              <ModalBody>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                  }}
                >
                  <Row>
                    <Col xs={12}>
                      {["nom", "code", "quartier", "ville", "lat", "lng"].map((field, idx) => (
                        <div className="mb-3" key={idx}>
                          <Label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                          <Input
                            type={field === "lat" || field === "lng" ? "number" : "text"}
                            name={field}
                            placeholder={`Saisir ${field}`}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values[field] || ""}
                            invalid={validation.touched[field] && validation.errors[field] ? true : false}
                          />
                          {validation.touched[field] && validation.errors[field] && (
                            <FormFeedback type="invalid">{validation.errors[field]}</FormFeedback>
                          )}
                        </div>
                      ))}
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="text-end">
                        <button type="submit" className="btn btn-success">
                          Enregistrer
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </ModalBody>
            </Modal>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Caserne);
