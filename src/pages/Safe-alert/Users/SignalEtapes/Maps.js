// src/components/Maps.jsx
import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react"
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
  OverlayView 
} from "@react-google-maps/api";
import { Button, Card, CardBody, Col, Modal, Row } from "reactstrap";
import { set } from "lodash";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
const arrivalTime = "5 min";

const center = { lat: 37.778519, lng: -122.40564 };


export default function Maps({nextStep, setStep}) {
  const [selected, setSelected] = useState(null);
  const [modal_center, setmodal_center] = useState(false);

  const tog_center = () => {
    setmodal_center(!modal_center);
    document.body.classList.add("no_padding");
  };

  useEffect(() => {
    tog_center();

    const timeout= setTimeout(() => {
      nextStep();
    }, 20000)
  }, []);

  // SVG camion de pompier rouge
 const fireTruckSVG = encodeURIComponent(`
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
     <path style="fill:#FF8189;" d="M441.423,142.23c-0.808-2.923-3.951-5.314-6.983-5.314h-32.527c-3.032,0-6.175,2.39-6.982,5.314 l-7.286,26.35c-0.807,2.923,1.012,5.314,4.044,5.314h52.977c3.032,0,4.852-2.392,4.043-5.314L441.423,142.23z"></path> 
     <rect x="73.236" y="130.889" style="fill:#A4A9AD;" width="27.841" height="27.797"></rect> 
     <rect x="73.236" y="130.889" style="opacity:0.1;enable-background:new ;" width="27.841" height="12.129"></rect>
    <rect x="140.496" y="130.889" style="fill:#A4A9AD;" width="27.841" height="27.797"></rect>
     <rect x="140.496" y="130.889" style="opacity:0.1;enable-background:new ;" width="27.841" height="12.129"></rect> 
     <rect x="207.756" y="130.889" style="fill:#A4A9AD;" width="27.841" height="27.797"></rect> 
    <rect x="207.756" y="130.889" style="opacity:0.1;enable-background:new ;" width="27.841" height="12.129"></rect> 
    <path style="fill:#FF5959;" d="M17.386,360.827V186.259c0-15.161,12.404-27.566,27.566-27.566h422.097 c15.161,0,27.566,12.404,27.566,27.566v174.568H17.386z"></path> 
    <rect x="17.386" y="266.512" style="fill:#D1D3D3;" width="477.226" height="21.662"></rect> <g>
    <path style="fill:#A4A9AD;" d="M512,369.16c0,5.641-4.616,10.258-10.257,10.258h-23.079c-5.641,0-10.258-4.617-10.258-10.258 v-16.667c0-5.641,4.616-10.258,10.258-10.258h23.079c5.641,0,10.257,4.616,10.257,10.258V369.16z"></path>
       <path style="fill:#A4A9AD;" d="M39.182,369.16c0,5.641-4.617,10.258-10.258,10.258H10.257C4.616,379.418,0,374.801,0,369.16 v-16.667c0-5.641,4.614-10.258,10.257-10.258h18.668c5.641,0,10.258,4.616,10.258,10.258v16.667H39.182z"></path> 
       </g> 
       <path style="opacity:0.2;enable-background:new ;" d="M198.051,360.827c0-37.078-30.059-67.136-67.136-67.136 s-67.136,30.059-67.136,67.136H198.051z"></path>
        <circle style="fill:#333E48;" cx="130.914" cy="360.83" r="55.561"></circle> <circle style="fill:#A4A9AD;" cx="130.914" cy="360.83" r="28.161"></circle>
         <path style="opacity:0.2;enable-background:new ;" d="M448.221,360.827c0-37.078-30.059-67.136-67.136-67.136 s-67.136,30.059-67.136,67.136H448.221z"></path> 
         <circle style="fill:#333E48;" cx="381.088" cy="360.83" r="55.561"></circle> <circle style="fill:#A4A9AD;" cx="381.088" cy="360.83" r="28.161"></circle> 
         <path style="fill:#D1D3D3;" d="M381.085,106.635c0-6.064-4.962-11.026-11.026-11.026H54.196c-6.064,0-11.026,4.962-11.026,11.026 v13.231c0,6.064,4.962,11.026,11.026,11.026h315.862c6.064,0,11.026-4.962,11.026-11.026V106.635z"></path> <path style="fill:#333E48;" d="M386.598,228.484c0,4.852,3.969,8.821,8.821,8.821h64.198c4.852,0,8.821-3.969,8.821-8.821v-38.225 c0-4.852-3.969-8.821-8.821-8.821h-64.198c-4.852,0-8.821,3.969-8.821,8.821V228.484z"></path>
          <path style="opacity:0.1;enable-background:new ;" d="M459.617,181.438h-64.198c-4.852,0-8.821,3.969-8.821,8.821v11.391 c0-4.852,3.969-8.821,8.821-8.821h64.198c4.852,0,8.821,3.969,8.821,8.821v-11.391C468.438,185.407,464.468,181.438,459.617,181.438 z"></path> <path style="fill:#333E48;" d="M306.218,228.484c0,4.852,3.969,8.821,8.821,8.821h37.747c4.852,0,8.821-3.969,8.821-8.821v-38.225 c0-4.852-3.969-8.821-8.821-8.821h-37.747c-4.852,0-8.821,3.969-8.821,8.821V228.484z"></path> <path style="opacity:0.1;enable-background:new ;" d="M352.786,181.438h-37.747c-4.852,0-8.821,3.969-8.821,8.821v11.391 c0-4.852,3.969-8.821,8.821-8.821h37.747c4.852,0,8.821,3.969,8.821,8.821v-11.391C361.607,185.407,357.639,181.438,352.786,181.438 z"></path> <rect x="214.592" y="253.28" style="fill:#A4A9AD;" width="82.807" height="107.55"></rect> <g> <circle style="fill:#D1D3D3;" cx="239.589" cy="281.585" r="7.714"></circle> <circle style="fill:#D1D3D3;" cx="272.414" cy="281.585" r="7.714"></circle> <path style="fill:#D1D3D3;" d="M272.413,316.977H239.58c-4.567,0-8.27-3.703-8.27-8.27s3.703-8.27,8.27-8.27h32.833 c4.568,0,8.27,3.703,8.27,8.27S276.98,316.977,272.413,316.977z"></path> <path style="fill:#D1D3D3;" d="M272.413,342.228H239.58c-4.567,0-8.27-3.703-8.27-8.27s3.703-8.27,8.27-8.27h32.833 c4.568,0,8.27,3.703,8.27,8.27S276.98,342.228,272.413,342.228z"></path> </g> <g> <path style="fill:#FFB819;" d="M494.614,342.235h-23.603c-3.032,0-5.513-2.481-5.513-5.513v-13.974 c0-3.032,2.481-5.513,5.513-5.513h23.603V342.235z"></path> <path style="fill:#FFB819;" d="M17.386,342.235h23.603c3.032,0,5.513-2.481,5.513-5.513v-13.974c0-3.032-2.481-5.513-5.513-5.513 H17.386V342.235z"></path> <rect x="69.046" y="201.104" style="fill:#FFB819;" width="181.558" height="16.539"></rect> </g> <g> <path style="fill:#D1D3D3;" d="M265.503,195.034c0-3.032-2.481-5.513-5.513-5.513h-18.763c-3.032,0-5.513,2.481-5.513,5.513v28.676 c0,3.032,2.481,5.513,5.513,5.513h18.763c3.032,0,5.513-2.481,5.513-5.513V195.034z"></path> <path style="fill:#D1D3D3;" d="M83.943,195.034c0-3.032-2.481-5.513-5.513-5.513H59.667c-3.032,0-5.513,2.481-5.513,5.513v28.676 c0,3.032,2.481,5.513,5.513,5.513h18.762c3.032,0,5.513-2.481,5.513-5.513V195.034z"></path> </g> </g></svg>
`);

  const onLoad = (map) => {
    // Une fois que la map est chargée, on crée l'icône ici
    setIcon({
      url: `data:image/svg+xml;charset=UTF-8,${fireTruckSVG}`,
      scaledSize: new window.google.maps.Size(48, 48),
      anchor: new window.google.maps.Point(24, 24),
    });
  };

  const [icon, setIcon] = useState(null);
  const [what, setWhat] = useState(false)
  const WhatToDo=[
    {
      id: "1",
      action: "Ne prenez pas l’ascenseur ; utilisez les escaliers."
    },
    {
      id: "2",
      action: "Si la fumée est dense, restez près du sol pour respirer de l'air plus pur."
    },
    {
      id: "3",
      action: "Fermez les portes derrière vous pour ralentir la propagation du feu."
    },
    {
      id: "4",
      action: "Ne retournez jamais chercher vos affaires."
    },
    {
      id: "5",
      action: "Si vous êtes coincé, signalez votre position aux secours depuis une fenêtre ou un balcon."
    },
    {
      id: "6",
      action: "Couvrez votre bouche et votre nez avec un tissu humide si possible."
    },
    {
      id: "7",
      action: "Suivez les instructions des pompiers une fois sur place."
    }
  ]
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const width = useTransform(x, [0, 250], [70, 180]);
  const [cancelled,setCancelled] = useState(false);
  return (
    <React.Fragment>

    <div className="position-relative">
       <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap  
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
          >
            {icon && (
              <>
                <Marker position={center} icon={icon} />
                <OverlayView
                  position={center}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  className=""
                >
                  <div
                    className="bg-danger text-white text-center fw-bold rounded shadow-sm px-2 mt-4 py-1 translate-middle"
                    style={{ transform: "translate(-50%, 15px)", width: "50px" }}
                  >
                    {arrivalTime}
                  </div>
                </OverlayView>
              </>
            )}
          </GoogleMap>
        </LoadScript>
        <div className="position-absolute w-100 bottom-0">
          
            <Card className="rounded-top-5 rounded-bottom-0" style={{marginBottom:"0px"}} >
              <CardBody>
                <div className="d-flex flex-column">
                    <div className="bg-light rounded-4 align-self-center mb-4" style={{width:'100px',height:'10px'}}></div>

                   <Row>
                    <Col xs={6}>
                      <Button outline color="danger" className="w-100 p-3 rounded-5" onClick={()=>{setWhat(!what)}}> <i className="mdi mdi-alert-circle-outline me-2"></i>Guide</Button>
                    </Col>
                    <Col xs={6}>
                      <Button  color="danger" className="w-100 p-3 rounded-5" disabled> <i className="mdi mdi-alarm-light me-2"></i>Alerte en cours...</Button>
                    </Col>
                  </Row>

                  {what && 
                     <div className="mt-5 d-flex flex-column">
                        <div className=" d-flex text-danger gap-2 fs-2">
                          Que faire en attendant les secours ?   
                        </div>
                      <ul className="list-unstyled mt-2">
                        {WhatToDo.map((toDo) => {
                          return (
                            <li key={toDo.id} className="d-flex align-items-start gap-3 mb-2">
                              <div
                                className="bg-danger text-white d-flex align-items-center justify-content-center rounded-circle fw-bold flex-shrink-0"
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  fontSize: "16px",
                                  lineHeight: "1",
                                }}
                              >
                                {toDo.id}
                              </div>
                              <div className="flex-grow-1">{toDo.action}</div>
                            </li>
                          );
                        })}
                      </ul>

                    </div> 
                  
                  }
                  
                </div>
               
               <hr/>
             <div
                  ref={constraintsRef}
                  className="rounded-pill bg-light p-2 mx-2"
                  style={{
                    height: "70px",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* CERCLE QUI GRANDIT */}
                  <motion.div
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    style={{
                      x,
                      width,          // 🔥 largeur animée
                      height: "70px",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: "20px",
                    }}
                    onDragEnd={(e, info) => {
                      if (info.point.x > 230) {
                        setCancelled(true);
                        setStep(0);
                      }
                    }}
                    className="bg-danger"
                  >
                    <i className="mdi mdi-arrow-right text-white fs-2"></i>
                  </motion.div>

                  {/* ICÔNES QUI RESTENT EN PLACE */}
                  <div
                    className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center gap-4"
                    style={{ pointerEvents: "none" }}
                  >{cancelled ? 
                    <div>Alerte annulée</div>
                    :
                    <>
                      <i className="mdi mdi-chevron-triple-right fs-1 text-muted"></i>
                      <span className="text-muted fw-bold">Glissez pour annuler l'alerte</span>
                    </>

                  }
                  </div>
                </div>
               
              </CardBody>
            </Card>
        </div>
    </div>
    </React.Fragment>

  );
}
