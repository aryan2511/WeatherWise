import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker-icon-2x.png",
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
});

const LocationMap = ({ locationCoordinates, locationName }) => {
  console.log("Location Coordinates in Map:", locationCoordinates); // Debugging

  if (!locationCoordinates) {
    return <p>Search for a location to see it on the map.</p>;
  }

  const mapCenter = locationCoordinates; // Use the same coordinates for map center

  return (
    <MapContainer
      center={mapCenter}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={locationCoordinates}>
        <Popup>{locationName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationMap;
