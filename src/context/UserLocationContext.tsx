import { createContext, useContext, useEffect, useState } from "react";
import { ContextProviderType } from "./AuthenticationContext";

type LocationType = {
  lat: number;
  lng: number;
};

type UserLocationContextType = {
  location: LocationType | null;
  loading: boolean;
  error: string | null;
  userCurrentCity: string | null;
};

export const userLocationContext = createContext<
  UserLocationContextType | undefined
>(undefined);

export function LocationProvider({ children }: ContextProviderType) {
  const [location, setLocation] = useState(
    {} as { lat: number; lng: number } | null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [userCurrentCity, setUserCurrentCity] = useState<string>("New York");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLoading(false);
      },
      () => {
        setError("Permission denied");
        setLoading(false);
      }
    );

    getUserCity();
  }, []);

  async function getUserCity() {
    if (!location) return;
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`
    );
    const cityData = await res.json();

    setUserCurrentCity(cityData.address.city || cityData.address.town);
  }

  return (
    <userLocationContext.Provider
      value={{ location, loading, error, userCurrentCity }}
    >
      {children}
    </userLocationContext.Provider>
  );
}

export function useUserLocation() {
  const context = useContext(userLocationContext);
  if (context === undefined) {
    throw new Error("useUserLocation must be used within a LocationProvider");
  }
  return context;
}
