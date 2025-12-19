import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";

export default function InfoPerso ({setStep}){
    const [form,setForm] = useState({nom: "", numéro: ""});
    
    return(
        <React.Fragment>
            <div className="h-100 d-flex flex-column justify-content-center">
                <div className="w-100 fw-bold fs-3 text-center">Informations pour vous contacter</div>
                <div className="px-4 text-center mt-2 mb-5">Entrez vos informations pour que les secours puissent vous contacter rapidement</div>
                <Row className="gap-3">
                    <Col xs={12}>        
                        <label htmlFor="nom" className="ms-3">
                            Noms et prénoms
                        </label>
                        <input
                            className="form-control p-3 rounded-5"
                            id="nom"
                            type="text"
                            value={form.nom}
                            onChange={(e) =>
                                setForm({...form, nom: e.target.value })
                            }
                        />
                    </Col>
                    <Col xs={12}>
                        <label htmlFor="numéro" className="ms-3">
                            Numéro
                        </label>
                        <input
                            className="form-control p-3 rounded-5"
                            id="numéro"
                            type="text"
                            value={form.numéro}
                            onChange={(e) =>
                                setForm({...form, numéro: e.target.value })
                            }
                        />
                    </Col>
                </Row>
       
                <Button color="danger" className="w-100 rounded-5 p-3 mt-4"
                    onClick={() => {
                        setStep(0);
                    }}
                >
                    Terminer
                </Button>

            </div>
        </React.Fragment>
    )
}