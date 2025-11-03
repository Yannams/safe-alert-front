import React, { useState } from "react"
import { Button, Card, CardBody, Col, Row } from "reactstrap"


     

export default function GettingInfo({nextStep }) {
   
  const [selected, setSelected] = useState({});

  const cards = [
    { id: "incendie", icon: "mdi-fire", label: "Incendie" },
    { id: "inondation", icon: "mdi-water", label: "Inondation" },
    { id: "accident", icon: "mdi-car-traction-control", label: "Accident" },
    { id: "malaise", icon: "mdi-hospital", label: "Malaise" },
  ];

  
    
    return (
  
          
        <React.Fragment>
           <div className="text-center w-full h-100 d-flex flex-column">
                <div className="mb-4 ">Vous signalez ? </div>
                  <Row className="g-4 mb-4">
                    {cards.map((item) => (
                        <Col xs={6} key={item.id}>
                        <label htmlFor={item.id} style={{ width: "100%" }}>
                            <Card
                            className={`rounded-5 text-center h-100 ${
                                selected.id === item.id ? "bg-danger text-white" : ""
                            }`}
                            style={{
                                cursor: "pointer",
                                height: "180px", // ✅ toutes les cartes même hauteur
                                transition: "all 0.3s ease",
                            }}
                            onClick={() => setSelected(item)}
                            >
                            <CardBody className="d-flex flex-column justify-content-center align-items-center h-100">
                                <i
                                className={`mdi ${item.icon} fs-1 ${
                                    selected.id === item.id ? "text-white" : "text-danger"
                                }`}
                                />
                                <span className="fw-semibold mt-2">{item.label}</span>
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
                <Row className="gap-3 mt-5">
                    <Col xs={12}>
                        <Button color="danger" outline className="w-100 rounded-pill p-3">Annuler</Button>
                    </Col>
                     <Col xs={12}>
                        <Button color="danger"  className="w-100 rounded-pill p-3" onClick={()=>{nextStep({'incident':selected.id})}}>Suivant</Button>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}