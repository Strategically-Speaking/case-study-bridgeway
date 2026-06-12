import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-widest mb-3",
        light ? "text-brand-teal-light" : "text-brand-teal",
        className
      )}
    >
      {children}
    </p>
  );
}
