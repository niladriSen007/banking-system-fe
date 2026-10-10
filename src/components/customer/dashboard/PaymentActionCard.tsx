import en from "@/locales/en.json";
import { ArrowRight, LoaderCircle, Wallet } from "lucide-react";
import { useOpenPayAccount } from "@/features/pay/hooks/useOpenPayAccount";
import { motion } from "motion/react";

const { payCard } = en.banking.dashboard;

const cardClass =
  "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-dashboard-pay-from via-dashboard-pay-via to-dashboard-pay-to p-8 text-white shadow-sm transition-shadow dark:border dark:border-emerald-300/15 dark:from-emerald-900 dark:via-emerald-800 dark:to-teal-700 dark:shadow-xl dark:shadow-emerald-950/40";

const iconWrapClass =
  "flex h-12 w-12 items-center justify-center rounded-2xl bg-dashboard-pay-accent text-dashboard-pay-accent-foreground";

const eyebrowClass =
  "text-xs font-semibold tracking-wide text-dashboard-pay-accent uppercase";

const titleClass = "mt-2 text-2xl font-semibold tracking-tight";

const descriptionClass = "mt-3 max-w-sm text-sm text-dashboard-pay-foreground-muted/80";

const ctaClass =
  "mt-6 inline-flex w-fit items-center gap-2 rounded-full text-sm font-medium text-white transition hover:underline";

export function PaymentActionCard() {
  const { openPayAccount, isPending } = useOpenPayAccount();

  return (
    <motion.div
      className={cardClass}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -right-20 -top-24 size-64 rounded-full bg-lime-300/10 blur-3xl" />
      <div className="relative">
        <div className={iconWrapClass}>
          <Wallet className="h-6 w-6" />
        </div>
        <p className={eyebrowClass}>{payCard.eyebrow}</p>
        <h2 className={titleClass}>{payCard.title}</h2>
        <p className={descriptionClass}>{payCard.description}</p>
      </div>

      <button
        className={`${ctaClass} relative disabled:cursor-wait disabled:opacity-70`}
        type="button"
        disabled={isPending}
        aria-busy={isPending}
        onClick={() => void openPayAccount()}
      >
        {isPending ? payCard.loading : payCard.cta}
        {isPending ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        )}
      </button>
    </motion.div>
  );
}
