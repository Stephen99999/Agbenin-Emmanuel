import { useEffect, useRef } from "react";

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLSpanElement>(".char");
    chars.forEach((char, i) => {
      char.style.animationDelay = `${i * 0.02}s`;
    });
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block animate-[charReveal_0.8s_var(--ease-out-quint)_both]"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="min-h-[80vh] flex flex-col justify-end px-8 md:px-16 pb-16 max-w-[1440px] mx-auto">
      <h1
        ref={headlineRef}
        className="font-serif text-foreground text-5xl md:text-7xl lg:text-[5rem] leading-[1] tracking-[-0.02em] mb-12"
      >
        {splitText("Building intelligent")}
        <br />
        {splitText("systems with care.")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
        <p className="text-lg leading-relaxed text-secondary">
          AI engineer & developer crafting products at the intersection of
          machine learning and human-centered design. I believe the best
          technology disappears into the experience.
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Status</span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-sm">Available for work</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Focus</span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-sm">LLMs · Computer Vision</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">Based</span>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-sm">San Francisco, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
