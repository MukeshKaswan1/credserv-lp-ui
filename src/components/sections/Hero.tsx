import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="pt-12 md:pt-20 pb-10 bg-[radial-gradient(1000px_500px_at_80%_-50%,_rgba(46,171,115,0.15),_transparent)]">
      <Container className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-sm text-[var(--brand-700)]">Specially for India’s Businesses</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Unlock the Revenue Trapped in your AR</h1>
          <p className="text-neutral-600 text-lg">Digitize AR, onboard channel partners, assess risk and finance early invoices to save capital and time.</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="contained" size="large">Get Started</Button>
            <Button variant="outlined" size="large">Schedule a Demo</Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-xl ring-1 ring-[var(--border)] bg-white shadow-[var(--shadow-md)] overflow-hidden">
            <Image src="/next.svg" alt="Dashboard placeholder" width={800} height={520} className="w-full h-auto object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}


