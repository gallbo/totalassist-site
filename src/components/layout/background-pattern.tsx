import { cn } from "@/lib/utils";

type Variant = "auth" | "subtle" | "corner" | "full" | "hero";

const MASKS: Record<Variant, string | null> = {
  auth: [
    "radial-gradient(ellipse 60% 55% at 100% 0%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
    "radial-gradient(ellipse 110% 45% at 55% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 65%, transparent 100%)",
    "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
  ].join(", "),
  subtle: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15))",
  corner:
    "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
  hero: [
    "radial-gradient(ellipse 80% 70% at 90% 10%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
    "linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.12))",
  ].join(", "),
  full: null,
};

type Props = {
  variant?: Variant;
  className?: string;
  invert?: boolean;
};

export function BackgroundPattern({
  variant = "subtle",
  className,
  invert = false,
}: Props) {
  const mask = MASKS[variant];

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: "url('/brand/stars-tile.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "190px 190px",
        filter: invert ? "invert(1) brightness(2)" : undefined,
        ...(mask
          ? {
              maskImage: mask,
              WebkitMaskImage: mask,
              maskComposite: "add",
              WebkitMaskComposite: "source-over",
            }
          : {}),
      }}
    />
  );
}
