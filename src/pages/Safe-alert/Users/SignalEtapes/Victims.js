import React, { useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";

export default function Victims({nextStep}) {
    const [form,setForm] = useState({nombreVictimes: 0});

     
    return (
        <React.Fragment>
        <div className="h-100 d-flex flex-column justify-content-center">
            <div className="w-100 fw-bold fs-3 text-center mb-5">Nombre de victimes</div>
           <Row>
                <Col xs={12}>
                   <Row className="mb-3">
                        <label
                            htmlFor="nbrVictimes"
                            className="col-md-2 col-form-label"
                        >
                            
                        </label>
                        <div className="col-12">
                            <input
                                className="form-control p-3 rounded-5"
                                id="nbrVictimes"
                                type="number"
                                value={form.nombreVictimes}
                                onChange={(e) =>
                                    setForm({ nombreVictimes: e.target.value })
                                }
                            />
                        </div>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Button color="danger" className="w-100 rounded-5 p-3"
                        onClick={() => {
                            nextStep({'victime': form.nombreVictimes});
                        }}
                    >
                        Suivant
                    </Button>
                </Col>
           </Row>
        </div>
        </React.Fragment>    
    );
}
