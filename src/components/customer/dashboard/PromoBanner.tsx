import en from "@/locales/en.json";

const { promoBanner } = en.banking.dashboard;

const wrapClass =
  "my-12 overflow-hidden rounded-3xl transition-shadow dark:shadow-xl dark:shadow-emerald-950/30";

export function PromoBanner() {
  return (
    <div className={wrapClass}>
      <img
        src="/banner_1.png"
        alt={promoBanner.imageAlt}
        className="w-full dark:brightness-[0.88] dark:saturate-[0.9]"
      />
    </div>
  );
}
