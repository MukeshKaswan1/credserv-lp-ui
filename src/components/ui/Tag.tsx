import { PropsWithChildren } from "react";

type TagProps = PropsWithChildren<{ className?: string; tone?: "default" | "success" | "warning" }>; 

export default function Tag({ children, className, tone = "default" }: TagProps) {
  const toneClass =
    tone === "success"
      ? "bg-green-50 text-green-700 border-green-200"
      : tone === "warning"
      ? "bg-amber-50 text-amber-800 border-amber-200"
      : "bg-[var(--brand-50)] text-[var(--brand-700)] border-[var(--brand-200)]";

  return (
    <span className={[
      "inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium",
      toneClass,
      className,
    ].filter(Boolean).join(" ")}>{children}</span>
  );
}


