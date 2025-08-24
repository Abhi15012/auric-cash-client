"use client";

import { useEffect, useState } from "react";

interface LocationData {
  latitude: number;
  longitude: number;
}

export default function LocationPopup() {
  const [locationStatus, setLocationStatus] = useState<
    "pending" | "granted" | "denied"
  >("pending");
  const [userLocation, setUserLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationStatus("granted");
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setLocationStatus("denied");
          setError(error.message);
          setUserLocation(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setLocationStatus("denied");
      setError("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <>
      {locationStatus === "pending" && <p>Requesting location...</p>}
      {locationStatus === "granted" && userLocation && (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      {locationStatus === "denied" && (
        <div>
          <p>Location access denied.</p>
          {error && <p>Error: {error}</p>}
        </div>
      )}
    </>
  );
}
