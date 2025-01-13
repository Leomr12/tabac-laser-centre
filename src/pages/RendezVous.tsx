import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const RendezVous = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 2 seconds instead of 3

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        window.location.href = "https://taterapilaser.fr/rechercher-un-praticien/?ref=centre-tabac.fr";
      }
    };

    requestAnimationFrame(updateProgress);

    // Fallback redirect after 2 seconds
    const timeout = setTimeout(() => {
      window.location.href = "https://taterapilaser.fr/rechercher-un-praticien/?ref=centre-tabac.fr";
    }, duration);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <img 
        src="/centre-tabac-logo.png" 
        alt="Centre Tabac Logo" 
        className="w-48 mb-8"
      />
      <div className="w-full max-w-md">
        <Progress value={progress} className="h-2" />
        <p className="text-gray-600 mt-4 text-center">
          Recherche d'un Centre à proximité de chez-vous..
        </p>
      </div>
    </div>
  );
};

export default RendezVous;