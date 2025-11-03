// src/components/Maps.jsx
import React, { useEffect, useState, useMemo } from "react";
import {
  LoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Button, Modal } from "reactstrap";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = { lat: 37.778519, lng: -122.40564 };

export default function Maps() {
  const [selected, setSelected] = useState(null);
  const [modal_center, setmodal_center] = useState(false);

  const tog_center = () => {
    setmodal_center(!modal_center);
    document.body.classList.add("no_padding");
  };

  useEffect(() => {
    tog_center();
  }, []);

  // SVG camion de pompier rouge
  const fireTruckSVG = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f46a6a">
      <title>fire-truck</title>
      <path d="M17.04,2C16.85,2 16.66,2.04 16.5,2.14L5.59,8.5H9.55L17.5,3.86C18,3.58 18.13,2.97 17.85,2.5C17.68,2.2 17.38,2 17.04,2M16,8V10H3A2,2 0 0,0 1,12H2V15H1V19H3A3,3 0 0,0 6,22A3,3 0 0,0 9,19H15A3,3 0 0,0 18,22A3,3 0 0,0 21,19H23V12.5L19.5,8H16M18,9.5H19L21.5,12.5V13.5H18V9.5M4,12H7V15H4V12M9,12H12V15H9V12M14,12H16V15H14V12M6,17.5A1.5,1.5 0 0,1 7.5,19A1.5,1.5 0 0,1 6,20.5A1.5,1.5 0 0,1 4.5,19A1.5,1.5 0 0,1 6,17.5M18,17.5A1.5,1.5 0 0,1 19.5,19A1.5,1.5 0 0,1 18,20.5A1.5,1.5 0 0,1 16.5,19A1.5,1.5 0 0,1 18,17.5Z"/>
    </svg>
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

  return (
    <React.Fragment>
      <Modal isOpen={modal_center} toggle={tog_center} centered>
        <div className="modal-body d-flex flex-column gap-4">
          <span className="fs-5">
            Vous pouvez suivre l'arrivée des secours sur la carte
          </span>
          <div className="d-flex justify-content-end">
            <Button color="danger" className="px-3" onClick={tog_center}>
              Ok
            </Button>
          </div>
        </div>
      </Modal>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
        >
          {icon && (
            <Marker
              position={center}
              icon={icon}
              onClick={() => setSelected(center)}
            />
          )}

          {selected && (
            <InfoWindow
              position={selected}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h5>Position sélectionnée</h5>
                <p>Lat: {selected.lat}</p>
                <p>Lng: {selected.lng}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </React.Fragment>
  );
}
