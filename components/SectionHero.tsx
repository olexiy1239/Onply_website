import AnimatedPhone from "./AnimatedPhone";
import CTACluster from "./CTACluster";

export default function SectionHero() {
  return (
    <section className="container pt-8 md:pt-16 pb-12">
      <div className="flex items-center justify-between gap-6 md:gap-10">
        {/* Ліва частина — текст */}
        <div className="flex-1 min-w-0">
          <div className="badge mb-3 text-[10px] sm:text-xs px-3 py-1">
            AI seamless mixes • Swipe feed
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3">
            <span className="bg-[linear-gradient(90deg,#FF5CA8,#A066FF)] bg-clip-text text-transparent">
              ONPLY
            </span>{" "}
            — continuous, mixed music. No gaps.
            <span className="underline decoration-white/30"> Just Flow</span>
          </h1>

          <p className="text-[13px] sm:text-sm md:text-base text-textSecondary mb-5 max-w-md">
            Swipe through tracks while our algorithm blends BPM, keys and energy —
            like a live DJ set. No silence between songs, no vibe drops.
          </p>

          <div className="scale-[0.9] sm:scale-100 origin-left">
            <CTACluster />
          </div>

          <p className="text-[10px] sm:text-[11px] md:text-xs text-textSecondary mt-2">
            3,214 early supporters • MVP in progress
          </p>
        </div>

       {/* Права частина — телефон */}
<div className="flex-1 flex justify-end">
  <div
    className="
      w-full
      max-w-[200px]
      sm:max-w-[260px]
      md:max-w-[300px]
      lg:max-w-[340px]
      mt-0
      max-[430px]:-mt-6   /* ⬅️ тільки на екранах до 430px трохи піднімаємо */
    "
  >
    <AnimatedPhone />
  </div>
</div>

      </div>
    </section>
  );
}
