import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";

export default function InfoPerso ({nextStep}){
    const [form,setForm] = useState({nom: "", numéro: ""});
    
    return(
        <React.Fragment>
               <div className="h-100 d-flex flex-column justify-content-center">
                <div className="w-100 fw-bold fs-3 text-center">Informations pour vous contacter</div>
                <div className="px-4 text-center mt-2 mb-5">Entrer vos informations pour que les secours puisse vous contacter rapidement</div>
                <Row className="gap-3">
                    <Col xs={12}>
                        <Row className="gap-1">
                            <Col xs={12}>
                                <label
                                    htmlFor="nom"
                                >
                                    Noms et prénoms
                                </label>
                            </Col>
                            <Col xs={12}>
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
                            
                        </Row>
                    </Col>
                     <Col xs={12}>
                        <Row className="gap-1">
                            <Col xs={12}>
                                <label htmlFor="numéro">
                                  Numéro
                                </label>
                            </Col>
                            <Col xs={12}>

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
                    </Col>
                </Row>
                <Button color="danger" className="w-100 rounded-5 p-3 mt-4"
                    onClick={() => {
                        nextStep({'nom': form.nom, 'numero': form.numéro});
                    }}
                >
                    Suivant
                </Button>

            </div>
        </React.Fragment>
    )
}