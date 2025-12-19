import React, { useState } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

export default function GettingInfo({ nextStep, lastStep }) {
  const [selected, setSelected] = useState(null);
  const [other,setOther] = useState(false);
  const cards = [
    { id: "incendie", icon: "mdi-fire", label: "Incendie", onClick: nextStep },
    { id: "inondation", icon: "mdi-water", label: "Inondation", onClick: nextStep },
    { id: "accident", icon: "mdi-car-traction-control", label: "Accident", onClick: nextStep },
    { id: "malaise", icon: "mdi-hospital", label: "Malaise", onClick: nextStep },
    { id: "autres", icon: "mdi-alert-decagram-outline", label: "Autres", setOther },
  ];
  const [form, setForm] = useState({
    incident: "",
  });

const handleSelect = (item) => {
  setSelected(item.id);

  // Appeler nextStep avec la bonne valeur
  if (item.onClick) {
    item.onClick({ incident: item.label }); 
    // ou item.label si tu veux le texte "Incendie"
  }

  if (item.setOther) {
    setOther(true);
  }
};


  return (
    <div className="w-full h-100 d-flex flex-column justify-content-between">
      <div className="d-flex justify-content-center w-100">
        <div className="fs-4 mt-4 text-center fw-bold" style={{width:"200px"}}>
          Sélectionner le type d'alerte !
        </div>
      </div>

      {!other ? 
      <Row className="gap-0 ">
        {cards.map((item) => (
          <Col xs={12} key={item.id}>
            <label htmlFor={item.id} style={{ width: "100%" }}>
              <Card
                className={`rounded-5 text-center mb-0 ${
                  selected === item.id ? "bg-danger text-white" : ""
                }`}
                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                onClick={() => handleSelect(item)}
              >
                <CardBody>
                  <div className="d-flex">
                    <div
                      className="bg-danger rounded-3 d-flex align-items-center justify-content-center p-3 me-5"
                      style={{ width: "30px", height: "30px" }}
                    >
                      <i
                        className={`mdi ${item.icon} fs-1 text-white`}
                      />
                    </div>

                    <span className="fw-semibold mt-2">{item.label}</span>
                  </div>
                </CardBody>
              </Card>

              <input
                type="checkbox"
                id={item.id}
                className="d-none"
                checked={selected === item.id}
                readOnly
              />
            </label>
          </Col>
        ))}
      </Row>
      :
      <div className="h-100 d-flex flex-column justify-content-center">
       <Row className="mt-4 gap-3">
          {/* NOMBRE DE VICTIMES */}
          <Col xs={12}>
            <label htmlFor="nbrVictimes" className="ms-3 text-start w-100">
             Décriver l'incident
            </label>
            <input
              className="form-control p-3 rounded-5"
              id="nbrVictimes"
              type="number"
              value={form.incident}
              onChange={(e) =>
                setForm({ ...form, incident: e.target.value })
              }
            />
          </Col>
        </Row>
        <Button color="danger" className="w-100 rounded-5 p-3 mt-4"
          onClick={() => {
            nextStep({'incident': form.incident});
          }}
        >
          Suivant
        </Button>
      </div>

}
      <Row className="gap-3">
        <Col xs={12}>
          <Button
            color="danger"
            outline
            className="w-100 rounded-pill p-3 border-0"
            onClick={() => lastStep()}
          >
            Annuler
          </Button>
        </Col>
      </Row>
    </div>
  );
}
