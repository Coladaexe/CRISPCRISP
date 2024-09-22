"use client"

import { getSession } from "@/utils/sessions";

    
import { useEffect } from "react";
import Oeuvre1 from "./page";





export default function LecomtedemontecristoPage(){
    const fetchAndLogSession = async () => {
        try {
          const session = await getSession();
          console.log(session);
          fetch("/api/visite", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oeuvre: Oeuvre1,
              user: session.rowid,
            }),
          }); 
        } catch (error) {
          console.error("Failed to fetch session:", error);
        }
      };

      
    

    useEffect(() => {
    // Détecter l'utilisateur connecté (getSession) const session = await getSession();
    // fetch à l'API pour sauvegarder en base la visite
    // coté API : créer une nouvelle route en POST
        // Récupérer l'utilisateur et l'oeuvre vue
        // Date en Javascript : const now = new Date()
    // Il faut appeler le fetch dans un useEffect
    }, [])

    return (
        <>
            <h1>Oeuvre Le compte de monte cristo </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae ratione quia harum, tempore facere provident optio neque atque, aliquid soluta. Nobis vel corporis odit molestiae voluptatem facere ipsum ad?
            </p>
            <button>Voter</button>
        </>
    );
}


