import Image from "next/image";
import { profile } from "@/lib/data";

export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-2xl" />

      <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-line-strong bg-bg-elevated shadow-2xl shadow-black/40">
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          priority
          className="object-cover object-top grayscale-[35%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
        <div className="bg-noise absolute inset-0 opacity-30" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full border border-line-strong bg-bg/70 px-4 py-2 backdrop-blur-sm">
          <span className="font-mono text-[11px] uppercase tracking-wider text-fg">
            {profile.name}
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            AWS Certified
          </span>
        </div>
      </div>
    </div>
  );
}
