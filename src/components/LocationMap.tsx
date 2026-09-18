'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Ambwere Plaza, Kitale — confirmed exact coordinates
const position: [number, number] = [1.0149396439395928, 35.00065476779693];

export default function LocationMap() {
  useEffect(() => {
    // @ts-expect-error — _getIconUrl is a private Leaflet internal
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
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
              <strong className="text-base font-semibold">Shaclau Limited Company</strong>
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
  );
}