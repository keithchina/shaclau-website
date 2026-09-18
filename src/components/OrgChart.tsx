'use client';

import { useState } from 'react';
import Link from 'next/link';

type Department = {
  id: string;
  head: string;
  title: string;
  team: string;
  responsibilities: string;
  outputs: string[];
};

const departments: Department[] = [
  {
    id: 'surveying',
    head: 'Head of Surveying & Cadastral Practice',
    title: 'Licensed Land Surveyor',
    team: 'Senior Surveyors, Field Crew Leads & GNSS Technicians',
    responsibilities:
      'Directs high-precision boundary mapping, RTK topographic surveys, and alignment profiles for infrastructure projects across Kenya.',
    outputs: ['Cadastral Maps', 'RTK Topo Data', 'Chainage Profiles', 'Cut-and-Fill Models'],
  },
  {
    id: 'gis',
    head: 'Head of GIS & Spatial Intelligence',
    title: 'Geospatial Data Specialist',
    team: 'GIS Analysts, Remote Sensing Experts & Web Developers',
    responsibilities:
      'Oversees spatial database architecture, network analysis, terrain modeling, and WebGIS decision-support mapping portals.',
    outputs: ['Spatial Databases', 'Elevation Models (DEM)', 'Network Models', 'WebGIS Dashboards'],
  },
  {
    id: 'structural',
    head: 'Head of Structural Engineering',
    title: 'Consulting Structural Engineer',
    team: 'Structural Design Engineers & Site Inspection Technicians',
    responsibilities:
      'Manages building structural audits, reinforced concrete/steel design, foundation stability analysis, and construction supervision.',
    outputs: ['Structural Audits', 'Reinforced Concrete Design', 'Site Inspection Reports', 'Foundation Specs'],
  },
  {
    id: 'town-planning',
    head: 'Head of Town Planning & Land Advisory',
    title: 'Physical & Regional Planner',
    team: 'Urban Planners, Land Officers & Zoning Compliance Specialists',
    responsibilities:
      'Guides landowners and developers through subdivision master plans, title processing workflows, and land-use approvals.',
    outputs: ['Subdivision Plans', 'Change of User', 'Zoning Reports', 'Title Processing'],
  },
];

export default function OrgChart() {
  const [activeDept, setActiveDept] = useState<string | null>(null);

  return (
    <section className="bg-[#F5F2EA] py-24 border-y border-[#1B2A38]/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-[#B08D57]">
            Corporate Governance & Operations
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-semibold text-[#1B2A38] sm:text-4xl">
            Leadership & Technical Hierarchy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#2B2B28]/80">
            Shaclau Limited operates through four specialized technical divisions under executive management oversight, ensuring every cadastral survey, structural design, and spatial dataset adheres to professional standards.
          </p>
        </div>

        {/* Hierarchy Tree */}
        <div className="mt-16 flex flex-col items-center">
          {/* Tier 1: Board of Directors */}
          <TierNode
            label="Board of Directors"
            subtext="Strategic Oversight & Corporate Governance"
            tone="ink"
          />
          <Connector />

          {/* Tier 2: Executive Management */}
          <TierNode
            label="Managing Director / CEO"
            subtext="Executive Management & Technical Direction"
            tone="brass"
          />
          <Connector />

          {/* Tier 3: Department Grid */}
          <div className="relative mt-2 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Desktop Horizontal Connecting Line */}
            <div
              className="pointer-events-none absolute -top-8 left-[12.5%] right-[12.5%] hidden h-px bg-[#1B2A38]/30 lg:block"
              aria-hidden="true"
            />

            {departments.map((dept) => {
              const isSelected = activeDept === dept.id;
              return (
                <div
                  key={dept.id}
                  onMouseEnter={() => setActiveDept(dept.id)}
                  onMouseLeave={() => setActiveDept(null)}
                  className={`flex flex-col text-left transition-all duration-300 ${
                    isSelected ? 'transform -translate-y-1' : ''
                  }`}
                >
                  {/* Vertical Connector Line */}
                  <div
                    className="pointer-events-none mx-auto hidden h-8 w-px bg-[#1B2A38]/30 lg:block"
                    aria-hidden="true"
                  />

                  {/* Department Card */}
                  <div className="flex flex-col justify-between h-full rounded-sm border-t-4 border-t-[#3D5C46] bg-[#FAFAF7] p-6 shadow-sm border-x border-b border-x-[#1B2A38]/10 border-b-[#1B2A38]/10 hover:shadow-md transition-shadow">
                    <div>
                      {/* Department Title */}
                      <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[#1B2A38] leading-tight">
                        {dept.head}
                      </p>
                      <p className="mt-1 font-mono text-xs text-[#B08D57] font-medium">
                        {dept.title}
                      </p>

                      <hr className="my-4 border-[#1B2A38]/10" />

                      {/* Responsibilities */}
                      <p className="text-xs text-[#2B2B28]/80 leading-relaxed">
                        {dept.responsibilities}
                      </p>

                      {/* Team Composition */}
                      <div className="mt-4 rounded-sm bg-[#F5F2EA] p-3 border border-[#1B2A38]/5">
                        <p className="font-mono text-[10px] uppercase text-[#1B2A38]/60 font-semibold tracking-wider">
                          Operational Team
                        </p>
                        <p className="mt-1 text-xs font-medium text-[#1B2A38]">
                          {dept.team}
                        </p>
                      </div>
                    </div>

                    {/* Key Deliverable Tags */}
                    <div className="mt-6">
                      <p className="font-mono text-[10px] uppercase text-[#1B2A38]/60 font-semibold tracking-wider mb-2">
                        Core Deliverables
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {dept.outputs.map((item) => (
                          <span
                            key={item}
                            className="inline-block rounded-xs bg-[#1B2A38]/5 px-2 py-0.5 font-mono text-[10px] text-[#1B2A38] border border-[#1B2A38]/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Assurance Note */}
        <div className="mt-16 rounded-sm border-l-4 border-l-[#B08D57] bg-[#FAFAF7] p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-[#1B2A38]">
              Cross-Disciplinary Quality Assurance
            </h4>
            <p className="mt-1 text-xs text-[#2B2B28]/80 max-w-2xl">
              All four departments operate off a unified coordinate database, ensuring structural engineering designs and town planning layouts seamlessly match field-verified cadastral boundaries.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-[#1B2A38] px-5 py-2.5 font-mono text-xs text-[#F5F2EA] transition-colors hover:bg-[#B08D57] hover:text-[#1B2A38] shrink-0"
          >
            Consult Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

function TierNode({
  label,
  subtext,
  tone,
}: {
  label: string;
  subtext: string;
  tone: 'ink' | 'brass';
}) {
  const isInk = tone === 'ink';
  return (
    <div
      className={`w-full max-w-md rounded-sm px-8 py-4 text-center border shadow-sm ${
        isInk
          ? 'bg-[#1B2A38] text-[#F5F2EA] border-[#1B2A38]'
          : 'bg-[#B08D57] text-[#1B2A38] border-[#B08D57]'
      }`}
    >
      <p className="font-[family-name:var(--font-space-grotesk)] font-semibold text-lg leading-none">
        {label}
      </p>
      <p
        className={`mt-1 font-mono text-xs ${
          isInk ? 'text-[#F5F2EA]/70' : 'text-[#1B2A38]/80'
        }`}
      >
        {subtext}
      </p>
    </div>
  );
}

function Connector() {
  return <div className="h-8 w-px bg-[#1B2A38]/30" aria-hidden="true" />;
}