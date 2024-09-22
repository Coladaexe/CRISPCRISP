"use client";
 
// chargement du SDK Crisp
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";


export default function Test() {
const userLogin = () => {
    // ... Ajouter votre propre logique ici (récupératio du token de l'utilisateur connecté par exemple)
 
    // Configuration de Crisp (obligatoire pour utiliser le bot sur votre site)
    Crisp.configure(process.env.NEXT_PUBLIC_WEBSITE_ID || "", {
      autoload: false, // Si vous voulez afficher le bot immédiatement, passez à 'true' ici
    });
    // Récupération de l'historique d'une conversation Crisp
    Crisp.setTokenId("token");
    // Affichage du bot (utile uniquement si 'autoload: false' dans la configuration)
    Crisp.load();
    // Ouverture du bot
    Crisp.chat.open();
  }

  useEffect(( ) => {
    userLogin()
  }, [])

  const showCarousel = () => {
                                  
    const list = [
      {
        title: "Le Comte de Monte-Cristo",
        description: "Une histoire d'aventure et de vengeance basée sur le parcours d'un homme injustement emprisonné",
        actions: [
          {
            label: "Afficher plus de details",
            url: "lecomtedemontecristo",
          },
        ],
      },
      {
        title: " La Nuit étoilée ",
        description: "Une œuvre emblématique représentant un ciel nocturne tourbillonnant.",
        actions: [
          {
            label: "Afficher plus de details",
            url: "lanuitetoile",
          },
        ],
      }
    ]
   
    // Affichage d'un carousel dans le bot

  }

    return (
        <>
        <h1>Page teste </h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit expedita iste veritatis temporibus fugiat quos, consequuntur at quaerat architecto explicabo? Aperiam voluptate quis at distinctio, quod eligendi soluta commodi corporis?
      
            </p>
        <button onClick={showCarousel}>Afficher un carrousel </button>
       
   </>    


);
}