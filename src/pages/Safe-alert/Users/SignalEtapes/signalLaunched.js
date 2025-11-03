import React, { useEffect, useState } from "react";

export default function SignalLaunched({nextStep}){
    const messages = [
        "Le signalement a été lancé...",
        "Veuillez rester calme, les secours arrivent...",
    ];

  const [index, setIndex] = useState(0);

     useEffect(() => {
        // ⏱ change le message toutes les 3 secondes
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);

        // ⏳ exécute nextStep après 15 secondes
        const timeout = setTimeout(() => {
            nextStep();
        }, 15000);

        // 🧹 nettoyage
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [nextStep]);
  return (
    <div className="justify-content-center text-lg text-danger font-bold h-100 d-flex align-items-center">
      <span>{messages[index]}</span>
    </div>
  );
}