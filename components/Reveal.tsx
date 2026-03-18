"use client";
import { useEffect, useRef, ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "zoom" | "fade" | "spin" | "spin-r";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

const variants: Record<Exclude<Variant, "spin" | "spin-r">, { hidden: string; visible: string }> = {
  up:    { hidden: "opacity-0 translate-y-12",  visible: "opacity-100 translate-y-0" },
  down:  { hidden: "opacity-0 -translate-y-12", visible: "opacity-100 translate-y-0" },
  left:  { hidden: "opacity-0 translate-x-14",  visible: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 -translate-x-14", visible: "opacity-100 translate-x-0" },
  zoom:  { hidden: "opacity-0 scale-90",         visible: "opacity-100 scale-100" },
  fade:  { hidden: "opacity-0",                  visible: "opacity-100" },
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 700,
  className = "",
  style,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Spin variants: one-shot keyframe animation triggered on intersection
    if (variant === "spin" || variant === "spin-r") {
      el.style.opacity = "0";
      const animClass = variant === "spin" ? "animate-spin-reveal" : "animate-spin-reveal-right";
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = "";
            el.style.animationDelay = `${delay}ms`;
            el.style.animationDuration = `${duration}ms`;
            el.classList.add(animClass);
            if (once) observer.disconnect();
          } else if (!once) {
            el.classList.remove(animClass);
            el.style.opacity = "0";
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }

    // Standard transition-based variants
    const v = variants[variant as Exclude<Variant, "spin" | "spin-r">];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.style.transitionDuration = `${duration}ms`;
          el.classList.remove(...v.hidden.split(" "));
          el.classList.add(...v.visible.split(" "));
          if (once) observer.disconnect();
        } else if (!once) {
          el.classList.remove(...v.visible.split(" "));
          el.classList.add(...v.hidden.split(" "));
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, duration, once]);

  const isSpin = variant === "spin" || variant === "spin-r";

  return (
    <div
      ref={ref}
      style={style}
      className={`${isSpin ? "will-change-transform" : `transition-all ease-out will-change-transform ${variants[variant as Exclude<Variant, "spin" | "spin-r">]?.hidden ?? ""}`} ${className}`}
    >
      {children}
    </div>
  );
}
