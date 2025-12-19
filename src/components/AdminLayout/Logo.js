// HospitalAlarmIcon.jsx
import React from "react";

export default function Logo() {


  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="position-relative d-flex align-items-center justify-content-center">
            <i className="mdi mdi-hospital text-danger" style={{ fontSize: '50px' }}></i>
            <i
                className="mdi mdi-alarm-light text-white position-absolute"
                style={{
                fontSize: '8px',
                }}
            ></i>
        </div>
        <div className="fs-2 fw-bold ">Safe Alert</div>
        
      </div>
    </React.Fragment>
     
  );
}
