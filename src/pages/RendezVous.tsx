import { useEffect } from "react";

const RendezVous = () => {
  useEffect(() => {
    window.location.href = "https://taterapilaser.fr/rechercher-un-praticien/?ref=centre-tabac.fr";
  }, []);

  return null;
};

export default RendezVous;