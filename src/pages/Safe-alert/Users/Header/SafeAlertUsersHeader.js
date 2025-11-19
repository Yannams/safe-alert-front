import React from "react";

export default function SafeAlertUsersHeader() {
  return (
    <React.Fragment>
        <header  className="bg-white shadow-sm w-100">
        <div className="navbar-header">
            <div className="d-flex justify-content-end align-items-center w-100 px-auto">
                {/* LOGO */}
                {/* <div className="navbar-brand-box">
                    <a href="/" className="logo logo-dark">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <i className="mdi mdi-hospital text-danger" style={{ fontSize: '50px' }}></i>
                            <i
                                className="mdi mdi-alarm-light text-white position-absolute"
                                style={{
                                fontSize: '10px',
                                }}
                            ></i>
                        </div>
                    </a>
                </div> */}

                <div>
                    <i className="mdi mdi-account-circle-outline fs-1 "></i>
                </div>
            </div>
        </div>
        </header>
    </React.Fragment>
  );
}