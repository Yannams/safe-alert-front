import React, { useState } from "react"
import { Button, Card, CardBody, Col, Input, Label, Row } from "reactstrap"

export default function Risks({nextStep}){
    const [selected, setSelected] = useState({});
    const risks = [
        { id: "fuite", icon: "mdi-gas-cylinder", label: "Fuite de gaz" },
        { id: "chimique", icon: "mdi-bottle-tonic-skull", label: "Produits chimiques" },
        { id: "électricité", icon: "mdi-flash", label: "Electricité" },
        { id: "malaise", icon: "mdi-hospital", label: "Malaise" },
    ]
    return(
        <div>
            <div className="fs-3 fw-bold w-100 text-center mb-4">Risques</div>
            <Row className="g-4 mb-4">
                {risks.map((item) => (
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
                    <Button color="danger"  className="w-100 rounded-pill p-3" onClick={()=>{nextStep({'Risque':selected.id})}}>Suivant</Button>
                </Col>
            </Row> 
           
        </div>
      
    )
}