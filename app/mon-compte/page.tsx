// Mark this file as a client component
"use client";

import { getSession } from "@/utils/sessions";
import { useEffect } from "react";

export default function Home() {
  const fetchAndLogSession = async () => {
    try {
      const session = await getSession();
      console.log(session);
    } catch (error) {
      console.error("Failed to fetch session:", error);
    }
  };

  useEffect(() => {
    fetchAndLogSession();
  }, []);

  return null; // Return null to indicate nothing is rendered
}
