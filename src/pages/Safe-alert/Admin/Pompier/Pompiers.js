import React, { useEffect, useMemo } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Breadcrumbs from "components/Common/Breadcrumb";
import TableContainer from "components/Common/TableContainer";
import withRouter from "components/Common/withRouter";

import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

// action de chargement
import { getPompiers } from "store/safe-alert/pompiers/actions";

const Pompiers = () => {
  document.title = "Liste des Pompiers";

  const dispatch = useDispatch();

  // Selector Redux
  const pompiersSelector = createSelector(
    (state) => state.pompiers,
    (pompiersState) => ({
      pompiers: pompiersState.pompiers,
      loading: pompiersState.loading,
    })
  );

  const { pompiers, loading } = useSelector(pompiersSelector);

  useEffect(() => {
    if (!pompiers || pompiers.length === 0) {
      dispatch(getPompiers());
    }
  }, [dispatch, pompiers]);

  const columns = useMemo(
    () => [
      {
        header: "Nom",
        accessorKey: "nom",
        enableColumnFilter: false,
        cell: (cell) => <strong>{cell.getValue()}</strong>,
      },
      {
        header: "Grade",
        accessorKey: "grade",
        enableColumnFilter: false,
      },
      {
        header: "Téléphone",
        enableColumnFilter: false,
        accessorKey: "telephone",
      },
      {
        header: "Caserne",
        enableColumnFilter: false,
        accessorKey: "caserne.nom",
        cell: ({ row }) => row.original.caserne?.nom || "—",
      },
      {
        header: "Disponibilité",
        accessorKey: "disponible",
        enableColumnFilter: false,
        cell: (cell) =>
          cell.getValue() ? (
            <span className="badge bg-primary">Disponible</span>
          ) : (
            <span className="badge bg-danger">Indisponible</span>
          ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Admin" breadcrumbItem="Pompiers" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  {loading ? (
                    <p>Chargement...</p>
                  ) : (
                    <TableContainer
                      columns={columns}
                      data={pompiers || []}
                      isGlobalFilter={true}
                      isPagination={true}
                      SearchPlaceholder="Recherche..."
                      isAddButton={false}   // ❌ pas de bouton ajouter
                      isCustomPageSize={true}
                      tableClass="align-middle table-nowrap table-hover dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                      theadClass="table-light"
                      paginationWrapper="dataTables_paginate paging_simple_numbers pagination-rounded"
                      pagination="pagination"
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Pompiers);
