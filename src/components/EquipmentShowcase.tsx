type EquipmentItem = {
  name: string;
  category: string;
};

const hardware: EquipmentItem[] = [
  { name: 'RTK GNSS Receivers', category: 'Hi-Target, Foif, Stonex GPS/GNSS Positioning' },
  { name: 'Total Stations', category: 'Precision Angle & Distance Measurement' },
  { name: 'UAV Survey Drones', category: 'Aerial Mapping & Photogrammetry' },
];

const software: EquipmentItem[] = [
  { name: 'ArcGIS Pro', category: 'Spatial Analysis & Cartography' },
  { name: 'QGIS', category: 'Open-Source GIS Processing' },
  { name: 'Autodesk Civil 3D', category: 'Terrain & Infrastructure Modeling' },
  { name: 'AutoCAD', category: 'Structural & Site Drafting' },
];

export default function EquipmentShowcase() {
  return (
    <section className="bg-[#1B2A38] py-20 text-[#F5F2EA]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
          Technology &amp; Equipment
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold sm:text-4xl">
          Field hardware &amp; software stack
        </h2>
        <p className="mt-3 max-w-xl text-[#F5F2EA]/75">
          Every deliverable is backed by survey-grade instruments and
          industry-standard software — the same tools used on large-scale
          national infrastructure projects.
        </p>

        {/* Hardware */}
        <div className="mt-12">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#F5F2EA]/50">
            Field Hardware
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {hardware.map((item) => (
              <div
                key={item.name}
                className="rounded-sm border border-[#F5F2EA]/10 bg-[#F5F2EA]/5 p-5"
              >
                <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F5F2EA]">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-[#F5F2EA]/60">{item.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software */}
        <div className="mt-8">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[#F5F2EA]/50">
            Software Stack
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {software.map((item) => (
              <div
                key={item.name}
                className="rounded-sm border border-[#F5F2EA]/10 bg-[#F5F2EA]/5 p-5"
              >
                <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#F5F2EA]">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-[#F5F2EA]/60">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}