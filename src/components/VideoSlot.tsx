import type { ReactNode } from "react";

type Props = {
  /** Drop your own file here, e.g. "/videos/hero-loop.mp4" */
  src?: string;
  poster?: string;
  label: string;
  hint?: string;
  className?: string;
  overlay?: ReactNode;
  /** background slots loop muted behind content */
  background?: boolean;
};

/**
 * VIDEO PLACEHOLDER
 * Leave `src` undefined to show the reserved empty slot.
 * Add your file to /public/videos and pass src="/videos/your-file.mp4".
 */
export function VideoSlot({
  src,
  poster,
  label,
  hint,
  className = "",
  overlay,
  background = false,
}: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <div
          className={`absolute inset-0 ${background ? "surface-navy" : "bg-mist"} hairline-grid`}
          aria-hidden="true"
        />
      )}

      {!src && (
        <div className="absolute inset-0 grid place-items-center p-8">
          <div
            className={`max-w-md text-center ${background ? "text-primary-foreground" : "text-navy"}`}
          >
            <div
              className={`mx-auto grid h-16 w-16 place-items-center rounded-full border ${
                background
                  ? "border-primary-foreground/30 bg-primary-foreground/10"
                  : "border-navy/15 bg-white"
              }`}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[1px]" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="mt-5 text-[0.7rem] font-bold tracking-[0.24em] uppercase opacity-70">
              Video placeholder
            </p>
            <p className="mt-2 font-display text-lg font-semibold">{label}</p>
            {hint && (
              <p className={`mt-2 text-sm ${background ? "opacity-70" : "text-muted-foreground"}`}>
                {hint}
              </p>
            )}
          </div>
        </div>
      )}

      {overlay}
    </div>
  );
}
