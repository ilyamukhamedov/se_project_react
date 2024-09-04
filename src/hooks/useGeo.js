import { useState, useEffect } from "react";
import { request } from "../utils/api";

const useGeo = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          fetchCityFromCoords(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          setError("impossible to get location");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  const fetchCityFromCoords = (latitude, longitude) => {
    const apiKey = "AIzaSyDH_ojcRPUuoDkAOsXGXOrdHt9rz5d2yMs";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}&language=en`;

    return request(url)
      .then((data) => {
        if (data.results.length > 0) {
          const cityResult = data.results.find((result) =>
            result.types.includes("locality")
          );

          if (cityResult) {
            setCity(cityResult.address_components[0].long_name);
          } else {
            setCity("City not found");
          }
        }
      })
      .catch((error) => {
        console.error("Error when requesting geocoding:", error);
        setCity("Error fetching city");
      });
  };
  return { location, city, error };
};

export default useGeo;
