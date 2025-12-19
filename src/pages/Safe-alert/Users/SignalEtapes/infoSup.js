import React from "react";
import { Button, Col, InputGroup, Row } from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";
// import { addAlert } from "store/safe-alert/alertes/actions";

export default function InfoSup({ nextStep, lastStep,infos   }) {
  const dispatch = useDispatch();

  const risks = [
    { id: "fuite", label: "Fuite de gaz" },
    { id: "chimique", label: "Produits chimiques" },
    { id: "electricite", label: "Electricité" },
    { id: "malaise", label: "Malaise" },
  ];

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      type: infos.incident,
      nombreVictimes: 0,
      risque: "",
      nom: "",
      numero: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Type d'incident requis"),
      nombreVictimes: Yup.number()
        .min(0, "Le nombre ne peut pas être négatif")
        .required("Champ obligatoire"),
      risque: Yup.string().required("Veuillez sélectionner un risque"),
      nom: Yup.string().required("Veuillez saisir le nom"),
      numero: Yup.string()
        .matches(/^[0-9]{8,15}$/, "Numéro invalide")
        .required("Veuillez saisir le numéro"),
    }),
    onSubmit: (values) => {
      console.log(values);
      
      // dispatch(addAlert(values)); // Redux + Saga
      // nextStep(values); // passage à l’étape suivante
    },
  });

  return (
    <form
      onSubmit={validation.handleSubmit}
      className="h-100 d-flex flex-column"
    >
      <div className="w-100 fw-bold fs-3 text-center mt-5 mb-4">
        Informations supplémentaires
      </div>

      <Row className="mt-4 gap-3">

        {/* NOMBRE DE VICTIMES */}
        <Col xs={12}>
          <label className="ms-3">Nombre de victimes</label>
          <InputGroup>
            <Button
              type="button"
              className="p-3 rounded-start-5"
              onClick={() =>
                validation.setFieldValue(
                  "nombreVictimes",
                  Math.max(0, validation.values.nombreVictimes - 1)
                )
              }
            >
              <i className="mdi mdi-minus" />
            </Button>

            <input
              type="number"
              className="form-control p-3"
              value={validation.values.nombreVictimes}
              readOnly
            />

            <Button
              type="button"
              className="p-3 rounded-end-5"
              onClick={() =>
                validation.setFieldValue(
                  "nombreVictimes",
                  validation.values.nombreVictimes + 1
                )
              }
            >
              <i className="mdi mdi-plus" />
            </Button>
          </InputGroup>
        </Col>

        {/* RISQUES */}
        <Col xs={12}>
          <label className="ms-3">Risques</label>
          <select
            name="risque"
            className={`form-select rounded-5 p-3 ${
              validation.touched.risque && validation.errors.risque
                ? "is-invalid"
                : ""
            }`}
            value={validation.values.risque}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
          >
            <option value="">Sélectionner le risque</option>
            {risks.map((item) => (
              <option key={item.id} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">
            {validation.errors.risque}
          </div>
        </Col>

        {/* NOM */}
        <Col xs={12}>
          <label className="ms-3">Noms et prénoms</label>
          <input
            name="nom"
            type="text"
            className={`form-control p-3 rounded-5 ${
              validation.touched.nom && validation.errors.nom
                ? "is-invalid"
                : ""
            }`}
            placeholder="John DOE"
            value={validation.values.nom}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
          />
          <div className="invalid-feedback">
            {validation.errors.nom}
          </div>
        </Col>

        {/* NUMÉRO */}
        <Col xs={12}>
          <label className="ms-3">Numéro</label>
          <input
            name="numero"
            type="text"
            className={`form-control p-3 rounded-5 ${
              validation.touched.numero && validation.errors.numero
                ? "is-invalid"
                : ""
            }`}
            placeholder="019999999"
            value={validation.values.numero}
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
          />
          <div className="invalid-feedback">
            {validation.errors.numero}
          </div>
        </Col>
      </Row>

      <Button
        color="danger"
        className="rounded-5 p-3 mt-4"
        type="submit"
      >
        Suivant
      </Button>

      <Button
        color="danger"
        outline
        className="w-100 rounded-pill p-3 border-0 mt-2"
        type="button"
        onClick={lastStep}
      >
        Précédent
      </Button>
    </form>
  );
}
