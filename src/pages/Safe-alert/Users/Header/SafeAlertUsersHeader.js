import React from "react";

export default function SafeAlertUsersHeader() {
  return (
    <React.Fragment>
        <header  className="bg-white shadow-sm w-100 fixed-top">
        <div className="navbar-header">
            <div className="d-flex justify-content-end align-items-center w-100 px-auto">
                <a href="/login" >
                    <i className="mdi mdi-account-circle-outline fs-1 "></i>
                </a>
            </div>
        </div>
        </header>
    </React.Fragment>
  );
}