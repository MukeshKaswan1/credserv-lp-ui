import Container from "@/components/ui/Container";
import Image from "next/image";

const logos = ["vercel", "next", "file", "globe", "window"]; // placeholders from public/

export default function LogoStrip() {
  return (
    <section className="py-8 border-y" style={{ borderColor: "var(--border)" }}>
      <Container className="flex flex-wrap items-center justify-center gap-8 opacity-70">
        {logos.map((l) => (
          <Image key={l} src={`/${l}.svg`} alt={`${l} logo`} width={80} height={24} className="h-6 w-auto" />
        ))}
      </Container>
    </section>
  );
}


