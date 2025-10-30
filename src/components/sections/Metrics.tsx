import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const metrics = [
  { label: "Active Businesses", value: "3,200+" },
  { label: "Channel Partners Onboarded", value: "1,100+" },
  { label: "Invoices Processed", value: "2.5M+" },
  { label: "Reduction in DSO days", value: "24-48 hrs" },
];

export default function Metrics() {
  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <Card key={m.label} className="p-5">
              <div className="text-2xl font-semibold text-[var(--brand-700)]">{m.value}</div>
              <div className="text-sm text-neutral-600">{m.label}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}


