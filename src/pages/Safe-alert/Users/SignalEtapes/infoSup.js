import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";

export default function InfoSup({ nextStep, lastStep }) {
  const [form, setForm] = useState({
    nombreVictimes: "",
    Risque: "",
    nom: "",
    numero: "",
  });

  const risks = [
    { id: "fuite", icon: "mdi-gas-cylinder", label: "Fuite de gaz" },
    { id: "chimique", icon: "mdi-bottle-tonic-skull", label: "Produits chimiques" },
    { id: "électricité", icon: "mdi-flash", label: "Electricité" },
    { id: "malaise", icon: "mdi-hospital", label: "Malaise" },
  ];

  const handleNext = () => {
    nextStep(form); // On envoie toutes les données
  };

  return (
    <div className="h-100 d-flex flex-column ">
      <div className="w-100 fw-bold fs-3 text-center mt-5 mb-4">
        Informations supplémentaires
      </div>

      <Row className="mt-4 gap-3">

        {/* NOMBRE DE VICTIMES */}
        <Col xs={12}>
          <label htmlFor="nbrVictimes" className="ms-3">
            Nombre de victimes
          </label>
          <input
            className="form-control p-3 rounded-5"
            placeholder="ex:0"
            id="nbrVictimes"
            type="number"
            value={form.nombreVictimes}
            onChange={(e) =>
              setForm({ ...form, nombreVictimes: e.target.value })
            }
          />
        </Col>

        {/* RISQUES */}
        <Col xs={12}>
          <label htmlFor="risks" className="ms-3">Risques</label>
          <select
            className="form-select rounded-5 p-3"
            value={form.risks}
            onChange={(e) => setForm({ ...form, Risque: e.target.value })}
          >
            <option value="">Sélectionner le risque</option>
            {risks.map((item) => (
              <option key={item.id} value={item.label}>
                {item.label}
              </option>
            ))}
          </select>
        </Col>

        {/* NOM */}
        <Col xs={12}>
          <label htmlFor="nom" className="ms-3">
            Noms et prénoms
          </label>
          <input
            className="form-control p-3 rounded-5"
            id="nom"
            type="text"
            value={form.nom}
            placeholder="John DOE"
            onChange={(e) =>
              setForm({ ...form, nom: e.target.value })
            }
          />
        </Col>

        {/* NUMÉRO */}
        <Col xs={12}>
          <label htmlFor="numero" className="ms-3">Numéro</label>
          <input
            className="form-control p-3 rounded-5"
            id="numero"
            type="text"
            placeholder="019999999"
            value={form.numéro}
            onChange={(e) =>
              setForm({ ...form, numero: e.target.value })
            }
          />
        </Col>
      </Row>

      <Button color="danger" className="rounded-5 p-3 mt-4" onClick={handleNext}>
        Suivant
      </Button>
       <Button
            color="danger"
            outline
            className="w-100 rounded-pill p-3 border-0"
            onClick={() => lastStep()}
        >
            Précédent
        </Button>
    </div>
  );
}
