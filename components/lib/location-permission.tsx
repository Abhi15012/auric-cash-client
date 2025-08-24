// location-permission.ts
interface LocationResult {
  latitude: number;
  longitude: number;
}

interface LocationError {
  code: number;
  message: string;
}

type LocationCallback = (result: LocationResult) => void;
type LocationErrorCallback = (error: LocationError) => void;

class LocationPermissionManager {
  private static instance: LocationPermissionManager;
  private hasRequested = false;

  private constructor() {}

  static getInstance(): LocationPermissionManager {
    if (!LocationPermissionManager.instance) {
      LocationPermissionManager.instance = new LocationPermissionManager();
    }
    return LocationPermissionManager.instance;
  }

  requestUserLocation(
    onSuccess?: LocationCallback,
    onError?: LocationErrorCallback,
    options?: PositionOptions
  ): void {
    // Prevent multiple simultaneous requests
    if (this.hasRequested) {
      console.warn("Location request already in progress");
      return;
    }

    if (!("geolocation" in navigator)) {
      const error: LocationError = {
        code: -1,
        message: "Geolocation is not supported by this browser.",
      };
      console.error(error.message);
      onError?.(error);
      return;
    }

    this.hasRequested = true;

    const defaultOptions: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 300000, // 5 minutes
      ...options,
    };

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        this.hasRequested = false;
        const { latitude, longitude } = position.coords;

        console.log("User location obtained:", { latitude, longitude });

        const result: LocationResult = { latitude, longitude };
        onSuccess?.(result);
      },
      (error: GeolocationPositionError) => {
        this.hasRequested = false;

        let errorMessage: string;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "The request to get user location timed out.";
            break;
          default:
            errorMessage =
              "An unknown error occurred while requesting location.";
            break;
        }

        console.error(errorMessage);

        const locationError: LocationError = {
          code: error.code,
          message: errorMessage,
        };

        onError?.(locationError);
      },
      defaultOptions
    );
  }

  async checkLocationPermission(): Promise<PermissionState> {
    if ("permissions" in navigator) {
      try {
        const permission = await navigator.permissions.query({
          name: "geolocation",
        });
        return permission.state;
      } catch (error) {
        console.warn("Could not check location permission:", error);
        return "prompt";
      }
    }
    return "prompt";
  }
}

function initializeLocationRequest(): void {
  const locationManager = LocationPermissionManager.getInstance();

  const requestLocation = () => {
    locationManager.requestUserLocation(
      (result: LocationResult) => {
        // Handle successful location retrieval
        console.log("Location granted:", result);

        // You can dispatch a custom event or call your app's location handler
        window.dispatchEvent(
          new CustomEvent("locationGranted", {
            detail: result,
          })
        );
      },
      (error: LocationError) => {
        // Handle location error
        console.error("Location request failed:", error);

        // You can dispatch a custom event for error handling
        window.dispatchEvent(
          new CustomEvent("locationDenied", {
            detail: error,
          })
        );
      }
    );
  };git 

  // Request location immediately when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", requestLocation);
  } else {
    // DOM is already ready, request immediately
    requestLocation();
  }
}

initializeLocationRequest();

// Export for use in other parts of your application
export { LocationPermissionManager, type LocationResult, type LocationError };
