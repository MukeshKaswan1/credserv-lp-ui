"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Header() {
  return (
    <AppBar position="sticky" elevation={0} color="transparent" sx={{ backdropFilter: "saturate(180%) blur(8px)", borderBottom: "1px solid var(--border)" }}>
      <Toolbar disableGutters>
        <Container className="w-full flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[var(--brand-500)]" />
            <span className="font-semibold">CredServ</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="text" href="#">Docs</Button>
            <Button variant="outlined" href="#">Learn more</Button>
            <Button variant="contained" href="#">Talk to Sales</Button>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
}


