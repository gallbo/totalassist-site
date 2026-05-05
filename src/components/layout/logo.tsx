import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "compact" | "shield";
  tone?: "default" | "inverted";
  className?: string;
  priority?: boolean;
};

export function Logo({
  variant = "full",
  tone = "default",
  className,
  priority,
}: LogoProps) {
  if (variant === "shield") {
    return (
      <Image
        src="/brand/totalassist-shield.png"
        alt="Total Assist"
        width={128}
        height={144}
        priority={priority}
        className={cn("h-10 w-auto", className)}
      />
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <Image
          src="/brand/totalassist-shield.png"
          alt="Total Assist"
          width={64}
          height={72}
          priority={priority}
          className={cn(
            "h-8 w-auto",
            tone === "inverted" && "brightness-0 invert",
          )}
        />
        <span
          className={cn(
            "text-sm font-bold tracking-tight",
            tone === "inverted" ? "text-white" : "text-brand-navy",
          )}
        >
          TOTAL ASSIST
        </span>
      </div>
    );
  }

  const fullSrc =
    tone === "inverted"
      ? "/brand/totalassist-full-white-v3.png"
      : "/brand/totalassist-full-v3.png";

  return (
    <Image
      src={fullSrc}
      alt="Total Assist — Insurance Claim by Skipper"
      width={914}
      height={219}
      priority={priority}
      className={cn("h-14 w-auto", className)}
    />
  );
}
