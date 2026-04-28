import Image from "next/image";
import { BackgroundPattern } from "@/components/layout/background-pattern";

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-white">
      <BackgroundPattern variant="subtle" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Image
          src="/brand/totalassist-shield.png"
          alt="Total Assist"
          width={128}
          height={144}
          priority
          className="h-20 w-auto sm:h-24"
        />
        <p className="text-brand-navy text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          TOTAL <span className="text-brand-yellow">ASSIST</span>
        </p>
        <span className="bg-brand-yellow mt-1 h-px w-32 sm:w-40" />
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-500 sm:text-xs">
          Insurance Claim by Skipper
        </p>
      </div>
    </section>
  );
}
