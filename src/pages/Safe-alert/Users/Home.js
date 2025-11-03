import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import Signal from "./SignalEtapes/Signal";
import GettingInfo from "./SignalEtapes/GettingInfo";
import Victims from "./SignalEtapes/Victims";
import Risks from "./SignalEtapes/Risks";
import SignalLaunched from "./SignalEtapes/signalLaunched";
import InfoPerso from "./SignalEtapes/infoPerso";
import Maps from "./SignalEtapes/Maps";

const containerStyle = {
  width: "100%",
  height: "100%",
  // position: "absolute",
  // top: 0, left: 0,
};

const center = {
  lat: 37.778519,
  lng: -122.40564,
};


const Home = () => {
  document.title = "Google Maps | Fullscreen Map";

  const [selected, setSelected] = useState(null);

  const onSelect = (marker) => {
    setSelected(marker);
  };

  const [step, setStep] = useState(0);
  const totalSteps = 3;
  const [infos, setInfos] = React.useState({
        incident: "",
        victime: 0,
        Risque: "",
        nom:"",
        numero:""
    });
  
    const nextStep = (newParams = {}) => {
        console.log(step);

        const updatedInfo = { ...infos, ...newParams };
        setInfos(updatedInfo);
        console.log(updatedInfo);

        setStep(step + 1);
    };

  return (
    <div className="page-content vh-100">
        {step > 0 && step <4   && <Row className="mb-5">
          {[...Array(totalSteps)].map((_, index) => {
              const isActive = index + 1 <= step; // rend rouge jusqu’à l’étape actuelle
              return (
                <Col key={index}>
                  <div
                    className={`${isActive ? "bg-danger" : "bg-secondary-subtle"} rounded-pill`}
                    style={{
                      width: "100%",
                      height: "10px",
                      transition: "background-color 0.3s ease",
                    }}
                  ></div>
                </Col>
              );
            })}
          </Row>
        }
        {step === 0 &&
            <Signal nextStep={nextStep}/>
        }
          {step === 1 &&
            <GettingInfo nextStep={nextStep}/>
        }

          {step === 2 &&
            <Victims nextStep={nextStep}/>
        }

        {step === 3 &&
            <Risks nextStep={nextStep}/>
        }
         {step === 4 &&
            <SignalLaunched nextStep={nextStep}/>
        }

        {step === 5 &&
            <InfoPerso nextStep={nextStep}/>
        }
        {step === 6 && 
          <Maps/>
        }
     
    </div>
  );
};

export default Home;
