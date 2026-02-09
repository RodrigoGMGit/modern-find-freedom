import {
  ApplicationInsights,
  type ITelemetryItem,
} from "@microsoft/applicationinsights-web";

let appInsights: ApplicationInsights | null = null;

export function initAppInsights(): ApplicationInsights | null {
  if (appInsights) return appInsights;

  const connectionString = import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING as
    | string
    | undefined;

  if (!connectionString) return null;

  appInsights = new ApplicationInsights({
    config: {
      connectionString,
      enableAutoRouteTracking: false,
    },
  });

  appInsights.loadAppInsights();

  appInsights.addTelemetryInitializer((envelope: ITelemetryItem) => {
    const baseData = envelope.baseData;
    if (baseData) {
      baseData.properties = baseData.properties ?? {};
      baseData.properties.env = import.meta.env.MODE;
      baseData.properties.origin =
        window.location.hostname === "localhost" ? "localhost" : "hosted";
    }
  });

  return appInsights;
}

export function getAppInsights(): ApplicationInsights | null {
  return appInsights;
}
