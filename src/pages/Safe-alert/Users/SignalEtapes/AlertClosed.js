import React from "react";
import { Button } from "reactstrap";

export default function AlertClosed({nextStep}) {
    return (
        <React.Fragment>
             <div className="row h-100">
                            <div className="text-center d-flex flex-column justify-content-end"> 
                               <i className="mdi mdi-check-circle text-danger" style={{ fontSize: '100px' }}></i>
            
                              
                                <span className="text-danger fs-3 fw-bold"> alerte traitée avec succès</span>
                            </div>
                            <div className="d-flex flex-column justify-content-end align-items-center">
                                <div className="text-center">Veuillez enregistrer vos informations pour ne plus avoir à les renseigner !</div>
                                <Button color="danger" className="btn-rounded my-3 py-3 w-75" onClick={nextStep} >
                                    Enregistrer vos informations
                                </Button>
                            </div> 
                        </div>
            
        </React.Fragment>
    )
}