import React, { useState } from "react";
import Signal from "./SignalEtapes/Signal";
import GettingInfo from "./SignalEtapes/GettingInfo";
import SignalLaunched from "./SignalEtapes/signalLaunched";
import InfoPerso from "./SignalEtapes/infoPerso";
import Maps from "./SignalEtapes/Maps";
import InfoSup from "./SignalEtapes/infoSup";
import AlertClosed from "./SignalEtapes/AlertClosed";
import SafeAlertUsersHeader from "./Header/SafeAlertUsersHeader";



const Home = () => {
  document.title = "Google Maps | Fullscreen Map";

  const [selected, setSelected] = useState(null);

  const onSelect = (marker) => {
    setSelected(marker);
  };

  const [step, setStep] = useState(0);
  const [infos, setInfos] = React.useState({
        incident: "",
        victime: 0,
        Risque: "",
        nom:"",
        numero:""
    });
  
    const nextStep = (newParams = {}) => {
        const updatedInfo = { ...infos, ...newParams };
        setInfos(updatedInfo);
        console.log(updatedInfo);

        setStep(step+1);
    };

    const lastStep = (newParams = {}) => {
      setStep(step - 1);
    };
  return (
    <>
    <SafeAlertUsersHeader/>
    <div className={`${step !==4 ?'page-content vh-100':''}`}>
      {step === 0 &&
          <Signal nextStep={nextStep}/>
      }
      {step === 1 &&
        <GettingInfo nextStep={nextStep} lastStep={lastStep}/>
      }

      {step === 2 &&
        <InfoSup nextStep={nextStep} lastStep={lastStep} infos={infos}/>
      }

      {step === 3 &&
        <SignalLaunched nextStep={nextStep} lastStep={lastStep}/>
      }
      
      {step === 4 && 
        <Maps nextStep={nextStep} setStep={setStep} step={step}/>
      }
    
      {step === 5 && 
        <AlertClosed nextStep={nextStep} />
      }
      {step === 6 && 
        <InfoPerso setStep={setStep} />
      }
    </div>
  </>
  );
};

export default Home;
