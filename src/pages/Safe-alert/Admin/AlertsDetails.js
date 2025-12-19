import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker
} from "@react-google-maps/api";
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

export default function AlertsDetails({
  showModal,
  selectedAlerte,
  closeModal,
  statutColors,
  onAssign
}) {
  const containerStyle = {
    width: "100%",
    height: "300px"
  };

  const center = selectedAlerte?.localisation
    ? {
        lat: Number(selectedAlerte.localisation.lat),
        lng: Number(selectedAlerte.localisation.lng)
      }
    : { lat: 6.3703, lng: 2.3912 }; // Cotonou par défaut

  const [selected, setSelected] = useState(null);

  return (
    <Modal isOpen={showModal} toggle={closeModal} size="lg" centered>
      <ModalHeader toggle={closeModal}>
        Détails de l’alerte – {selectedAlerte?.type}
      </ModalHeader>

      <ModalBody>
        <p>
          <strong>Quartier :</strong>{" "}
          {selectedAlerte?.localisation?.quartier}
        </p>

        <p>
          <strong>Victimes :</strong>{" "}
          {selectedAlerte?.victimes}
        </p>

        <p>
          <strong>Statut :</strong>{" "}
          <Badge color={statutColors[selectedAlerte?.statut] || "secondary"}>
            {selectedAlerte?.statut}
          </Badge>
        </p>

        <p>
          <strong>Lancé par :</strong>{" "}
          {selectedAlerte?.lanceePar?.nom}
        </p>

        <p>
          <strong>Téléphone :</strong>{" "}
          {selectedAlerte?.lanceePar?.num}
        </p>

        <p>
          <strong>Date :</strong>{" "}
          {selectedAlerte?.date}
        </p>

        {/* ================= CARTE ================= */}
        <div className="my-3">
          <LoadScript googleMapsApiKey="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              <Marker position={center} onClick={() => setSelected(center)} />

              {selected && (
                <InfoWindow
                  position={selected}
                  onCloseClick={() => setSelected(null)}
                >
                  <div>
                    <strong>{selectedAlerte?.type}</strong>
                    <br />
                    Quartier : {selectedAlerte?.localisation?.quartier}
                    <br />
                    Victimes : {selectedAlerte?.victimes}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>

        {/* ================= RAPPORT ================= */}
        <hr />
        {selectedAlerte?.rapport && (
        <>
            <h6 className="mb-3">Rapport de mission</h6>
            <div className="border rounded p-3 bg-light">
                <p className="mb-1">
                <strong>Rédigé par :</strong>{" "}
                {selectedAlerte.rapport.redigePar}
                </p>

                <p className="mb-1">
                <strong>Fonction :</strong>{" "}
                {selectedAlerte.rapport.fonction}
                </p>

                <p className="mb-1">
                <strong>Date :</strong>{" "}
                {selectedAlerte.rapport.date}
                </p>

                <p className="mt-2">
                <strong>Compte rendu :</strong>
                <br />
                {selectedAlerte.rapport.contenu}
                </p>
            </div>
          </>
        )}
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={closeModal}>
          Fermer
        </Button>

        {(selectedAlerte?.statut === "en attente" || selectedAlerte?.statut === "approuvée") && (
          <Button color="danger"  onClick={onAssign}>
            Attribuer
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
}