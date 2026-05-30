"use client";

import { useVisitorCountMutation } from "@/redux/api/queryApi/settingsApi";
import { useEffect } from "react";
export default function VisitorTracker() {
  const [visitorCount] = useVisitorCountMutation();

  useEffect(() => {
    visitorCount("portfolioVisit");
  }, [visitorCount]);

  return null;
}