import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  light?: boolean;
}

export function StatCard({ value, label, description, className, light }: StatCardProps) {
  return (
    <div
      className={cn(
        "text-center p-6",
        light ? "text-white" : "text-brand-blue",
        className
      )}
    >
      <p
        className={cn(
          "text-4xl font-bold mb-1",
          light ? "text-white" : "text-brand-blue"
        )}
        aria-label={`${value} ${label}`}
      >
        {value}
      </p>
      <p
        className={cn(
          "text-sm font-semibold uppercase tracking-wide mb-1",
          light ? "text-blue-100" : "text-gray-700"
        )}
      >
        {label}
      </p>
      {description && (
        <p
          className={cn(
            "text-xs",
            light ? "text-blue-200" : "text-gray-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
