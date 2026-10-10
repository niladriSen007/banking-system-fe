import en from "@/locales/en.json";
import { ArrowRight, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const { networkCard } = en.banking.dashboard;

const cardClass =
  "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-colors dark:border-emerald-300/15 dark:bg-gradient-to-br dark:from-emerald-950/70 dark:via-card dark:to-card dark:shadow-lg dark:shadow-emerald-950/25";

const iconWrapClass =
  "flex h-12 w-12 items-center justify-center rounded-2xl bg-dashboard-network-accent text-dashboard-network-accent-foreground";

const eyebrowClass =
  "text-xs font-semibold tracking-wide text-dashboard-network-accent-foreground uppercase";

const titleClass = "mt-2 text-2xl font-semibold tracking-tight text-foreground";

const descriptionClass = "mt-3 max-w-sm text-sm text-muted-foreground";

const ctaClass =
  "mt-6 inline-flex w-fit items-center gap-2 rounded-full text-sm font-medium text-foreground transition hover:underline";

const avatarStackClass = "absolute top-6 right-6 flex -space-x-3";

const avatarClass =
  "flex h-10 w-10 items-center justify-center rounded-full border-2 border-card bg-gradient-to-br from-dashboard-network-avatar-from to-dashboard-network-avatar-to text-xs font-semibold text-white";

export function NetworkActionCard() {
  return (
    <motion.div
      className={cardClass}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -bottom-28 -right-20 size-64 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className={avatarStackClass}>
        <div className={avatarClass}>AJ</div>
        <div className={avatarClass}>MK</div>
        <div className={avatarClass}>SR</div>
      </div>

      <div className="relative">
        <div className={iconWrapClass}>
          <Share2 className="h-6 w-6" />
        </div>
        <p className={eyebrowClass}>{networkCard.eyebrow}</p>
        <h2 className={titleClass}>{networkCard.title}</h2>
        <p className={descriptionClass}>{networkCard.description}</p>
      </div>

      <Link to="/network" className={ctaClass}>
        {networkCard.cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
