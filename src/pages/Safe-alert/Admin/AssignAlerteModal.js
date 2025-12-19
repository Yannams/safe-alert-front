import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button
} from "reactstrap";

export default function AssignAlerteModal({
  showModal,
  closeModal,
  alerte,
  Casernes,
  onConfirm
}) {

  const getDistanceKm = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const getNearestCasernes = (alerte, casernes, limit = 3) => {
    if (!alerte?.localisation) return [];

    return casernes
      .map(caserne => ({
        ...caserne,
        distance: getDistanceKm(
          alerte.localisation.lat,
          alerte.localisation.lng,
          caserne.lat,
          caserne.lng
        )
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);
  };


  return (
    <React.Fragment>
        <Modal isOpen={showModal} toggle={closeModal} centered>
            <ModalHeader toggle={closeModal}>
                Attribution de l’alerte
            </ModalHeader>

            <ModalBody>
                <p><strong>Type :</strong> {alerte?.type}</p>
                <p><strong>Quartier :</strong> {alerte?.localisation?.quartier}</p>

                <div className="mb-3">
                <label className="form-label">Caserne les plus proches</label>
                <select className="form-select">
                    <option value="">-- Sélectionner --</option>
                    {getNearestCasernes(alerte, Casernes, 5).map((caserne) => (
                      <option key={caserne.id} value={caserne.id}>
                        {caserne.name} ({caserne.distance.toFixed(2)} km)
                      </option>
                    ))}
                </select>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="secondary" onClick={closeModal}>
                Annuler
                </Button>

                <Button color="danger" onClick={() => onConfirm(alerte)}>
                    Confirmer l’attribution
                </Button>
            </ModalFooter>
        </Modal>
    </React.Fragment>
  );
}
