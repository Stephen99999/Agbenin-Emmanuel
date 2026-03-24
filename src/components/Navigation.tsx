import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6">
      <span className="font-serif text-xl tracking-[-0.02em]">A.C.</span>

      <button
        onClick={() => setOpen(!open)}
        className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-foreground transition-colors duration-300"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div
          className="fixed inset-0 top-16 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 animate-[fadeIn_0.3s_ease-out]"
          style={{ zIndex: 40 }}
        >
          {["work", "case-study", "about", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="font-serif text-4xl md:text-5xl hover:text-accent transition-colors duration-300"
            >
              {id.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
