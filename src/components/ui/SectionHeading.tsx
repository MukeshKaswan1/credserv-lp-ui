import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}>;

export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className }: Props) {
  return (
    <div className={["flex flex-col gap-2", align === "center" ? "items-center text-center" : "items-start", className].filter(Boolean).join(" ")}> 
      {eyebrow ? <div className="text-sm font-medium text-[var(--brand-700)] bg-[var(--brand-50)] px-2 py-1 rounded-full border border-[var(--brand-200)]">{eyebrow}</div> : null}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-base text-neutral-600 max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}


