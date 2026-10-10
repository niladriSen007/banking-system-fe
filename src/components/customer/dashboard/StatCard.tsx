import type { LucideIcon } from "lucide-react";

const cardClass = "rounded-2xl border border-border/60 bg-card p-5";

const valueClass = "text-2xl font-semibold tracking-tight text-foreground";

const labelClass = "mt-1 text-sm text-muted-foreground";

const iconWrapClass =
  "grid size-10 place-items-center rounded-xl bg-dashboard-send-accent text-dashboard-send-accent-foreground dark:bg-emerald-400/10 dark:text-emerald-300";

type StatFormat = "currency" | "count" | "rating";

type StatCardProps = {
  value: number;
  label: string;
  format: StatFormat;
  icon: LucideIcon;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const countFormatter = new Intl.NumberFormat("en-US");

function formatStatValue(value: number, format: StatFormat) {
  switch (format) {
    case "currency":
      return currencyFormatter.format(value);
    case "rating":
      return `${value.toFixed(1)}/5`;
    case "count":
    default:
      return countFormatter.format(value);
  }
}

export function StatCard({ value, label, format, icon: Icon }: StatCardProps) {
  return (
    <div className={`${cardClass} flex items-center justify-between gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-emerald-300/10 dark:bg-gradient-to-br dark:from-emerald-950/35 dark:to-card dark:hover:border-emerald-300/20 dark:hover:shadow-emerald-950/30`}>
      <div>
        <p className={valueClass}>{formatStatValue(value, format)}</p>
        <p className={labelClass}>{label}</p>
      </div>
      <span className={iconWrapClass}>
        <Icon className="size-5" aria-hidden="true" />
      </span>
    </div>
  );
}
