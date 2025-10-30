import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: "var(--border)" }}>
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-[var(--brand-500)]" />
          <span className="font-medium">CredServ</span>
        </div>
        <div className="opacity-75">© {new Date().getFullYear()} CredServ. All rights reserved.</div>
      </Container>
    </footer>
  );
}


