type Metric = {
  value: string;
  label: string;
};

// TODO: replace with real figures once available — these are placeholders.
const metrics: Metric[] = [
  { value: '1,200+', label: 'Hectares Surveyed' },
  { value: '85+', label: 'Structural Audits Completed' },
  { value: '340 km', label: 'Pipeline Route Alignments' },
  { value: '6', label: 'Counties Served' },
];

export default function MetricsBar() {
  return (
    <section className="bg-[#1B2A38] py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="font-mono text-3xl font-semibold text-[#B08D57] sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-wide text-[#F5F2EA]/70">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}