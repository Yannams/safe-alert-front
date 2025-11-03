import React from "react"
import { Button } from "reactstrap"

export default function Signal({nextStep}) {

   
    return (
        <React.Fragment>
            <div className="row h-100">
                <div className="text-center d-flex flex-column justify-content-end"> 
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-hospital text-danger" style={{ fontSize: '100px' }}></i>
                        <i
                            className="mdi mdi-alarm-light text-white position-absolute"
                            style={{
                            fontSize: '15px',
                            }}
                        ></i>
                        </div>

                  
                    <span className="text-danger fs-3 fw-bold">Safe alert</span>
                </div>
                <div className="d-flex flex-column justify-content-end align-items-center">
                    <div>Vous avez besoin d'aide ?</div>
                    <Button color="danger" className="btn-rounded my-3 py-3 w-75" onClick={nextStep}>
                        Signaler une urgence
                    </Button>
                </div> 
            </div>
        
        </React.Fragment>
    )
}