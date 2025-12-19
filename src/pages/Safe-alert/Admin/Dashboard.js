import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import withRouter from "components/Common/withRouter";
import { Card, CardBody, Col, Container, Row, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, Modal, ModalHeader, ModalBody, ModalFooter, Button, Badge } from "reactstrap";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import ReactApexChart from "react-apexcharts";


import { getAlerts } from "../../../store/safe-alert/alertes/actions";
import { options, recentAlertsData, series, Casernes} from "common/data/alertes";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import EnAttente from "./EnAttente";
import EnCours from "./EnCours";
import Terminee from "./Terminee";
import AlertsDetails from "./AlertsDetails";
import Charts from "./Charts";
import RecentAlerts from "./RecentAlerts";
import AssignAlerteModal from "./AssignAlerteModal";


const DashbordAdmin = () => {
  //meta title
  document.title = "Listes des alertes";

  const dispatch = useDispatch();

 const AlertesProperties = createSelector(
    (state) => state.alerts, // <-- le nom exact dans combineReducers
    (alertsState) => ({
      alerts: alertsState.alerts, // <-- propriété "alerts"
    })
  );

  const {
    alerts
  } = useSelector(AlertesProperties);

  useEffect(() => {
    dispatch(getAlerts()); 
  }, [dispatch]);

  const statutColors = {
    "en attente": "secondary",
    "attribuee": "info",
    "en cours": "warning text-dark",
    "approuvée": "primary",
    "terminee": "danger",
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedAlerte, setSelectedAlerte] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);


  const openModal = (alerte) => {
    setSelectedAlerte(alerte);
    setShowModal(true) ;
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedAlerte(null);
  };

  const openAssignModal = () => {
    setShowModal(false);      // ferme détails
    setShowAssignModal(true); // ouvre attribution
  };

  const closeAssignModal = () => {
    setShowAssignModal(false);
  };



  return (
    <React.Fragment>
      <div className="page-content">
        <AlertsDetails showModal={showModal} selectedAlerte={selectedAlerte} closeModal={closeModal} statutColors={statutColors} onAssign={openAssignModal}/>
        <Container fluid>
          <Breadcrumbs title="Tableau de bord" breadcrumbItem="Liste des alertes" />
          {/* Render Breadcrumbs */}
          <Row>
            <Col lg={8}>
                <EnAttente alerts={alerts} statutColors={statutColors} openModal={openModal}/>
                <EnCours alerts={alerts} statutColors={statutColors} openModal={openModal}/>
                <Terminee alerts={alerts} statutColors={statutColors} openModal={openModal}/>
            </Col>

            <Col lg={4}>
              <Charts options={options} series={series}/>
              <RecentAlerts recentAlertsData={recentAlertsData}/>
              <AssignAlerteModal 
                showModal={showAssignModal} 
                closeModal={closeAssignModal} 
                alerte={selectedAlerte} 
                Casernes={Casernes}
                onConfirm={
                  (alerte) => {
                    console.log("Alerte attribuée :", alerte);
                    // ici plus tard :
                    // dispatch(assignAlert(alerte.id, caserneId))
                    setShowAssignModal(false);
                  }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(DashbordAdmin);
