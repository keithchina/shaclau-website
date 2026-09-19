'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Ambwere Plaza, Kitale coordinates
const position: [number, number] = [1.0149396439395928, 35.00065476779693];

// Construct Google Maps Directions URL
const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

export default function LocationMap() {
  useEffect(() => {
    // Fix missing default Leaflet marker icons in Next.js
    // @ts-expect-error — _getIconUrl is a private Leaflet internal
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-96 w-full overflow-hidden rounded-sm border border-[#1B2A38]/15 shadow-sm">
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <div className="font-sans text-sm">
                <strong className="text-base font-semibold">Shaclau Enterprise Ltd</strong>
                <br />
                Ambwere Plaza, Kitale
                <br />
                Trans-Nzoia County, Kenya
                <br />
                <span className="italic">Land Surveying, GIS &amp; Structural Engineering</span>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-blue-700"
      >
        📍 Get Directions
      </a>
    </div>
  );
}