export function Map() {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const origin = "Gorriti 61, Bahia Blanca, Buenos Aires, Argentina";

  const mapSrc = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_API_KEY}&origin=${encodeURIComponent(
    origin
  )}&destination=${encodeURIComponent(origin)}&mode=driving&zoom=14`;

  return (
    <iframe
      title="Google Maps Directions"
      id="gmap_canvas"
      className="h-full w-full"
      src={mapSrc}
    ></iframe>
  );
}
