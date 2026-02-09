import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAppInsights } from "./appInsights";

export function useAppInsightsPageViews() {
  const location = useLocation();

  useEffect(() => {
    const ai = getAppInsights();
    if (!ai) return;

    const pagePath =
      location.pathname + location.search + (location.hash ?? "");
    const name = location.pathname + location.search;
    const uri = window.location.origin + pagePath;

    ai.trackPageView({
      name,
      uri,
    });
  }, [location]);
}
