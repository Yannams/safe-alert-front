import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

export default function EnAttente({alerts, statutColors, openModal}){
    return(
        <React.Fragment>
            <Card>
                <CardBody>
                    <h4 className="card-title mb-4">En attente</h4>
                    <div className="table-responsive">
                    <table className="table table-nowrap align-middle mb-0">
                        <tbody>
                        {
                            (alerts .filter(alerte =>["en attente", "approuvée", "attribuee"].includes(alerte.statut))).map((alerte, index) => (
                                <tr 
                                    key={index}
                                    onClick={() => openModal(alerte)} 
                                    style={{cursor:"pointer"}}
                                >
                                    <td style={{ width: "40px" }}>
                                        <div className="form-check font-size-16">
                                        <input className="form-check-input" type="checkbox" id="upcomingtaskCheck01" />
                                        <label className="form-check-label" htmlFor="upcomingtaskCheck01"></label>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 className="text-truncate font-size-14 m-0"><Link to="#" className="text-dark">{alerte.type}</Link></h5>
                                    </td>
                                    <td>
                                        <div className="text-center">
                                        {alerte.localisation.quartier}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                        {alerte.victimes} victime{alerte.victimes >1 && "s"}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                        <span className={`badge bg-${statutColors[alerte.statut] || "dark"}`}>
                                            {alerte.statut}
                                        </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}