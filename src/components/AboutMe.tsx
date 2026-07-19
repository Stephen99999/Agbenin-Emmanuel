const AboutMe = () => {
  return (
    <section className="px-8 md:px-16 py-24 max-w-[1440px] mx-auto border-t border-border">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans font-medium text-2xl md:text-[2.5rem] leading-tight tracking-[-0.01em]">
          About
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-secondary max-w-[55ch]">
            I'm an AI engineer who believes the best technology feels invisible. Over the past three years,
            I've shipped systems used by millions from real-time from FX, inter-bank transfer and payment operations architectures to multiple Machine Learning Models that are employed in daily use by individuals.
          </p>
          <p className="text-lg leading-relaxed text-secondary max-w-[55ch]">
            Before AI, I studied cognitive science. That background shapes everything I build:
            systems should adapt to people, not the other way around. I care deeply about
            reliability, interpretability, and shipping things that work on Monday morning.
          </p>
          <p className="text-lg leading-relaxed text-secondary max-w-[55ch]">
            When I'm not training models, I'm probably reading about typography, brewing pour-over
            coffee, or running trails in the East Bay.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-4">Experience</p>
            <div className="space-y-4">
              {[
                ["AI Engineer / Data Annotator", "Remote AI Roles", "Jan. 2026–Present"],
                ["Backend Developer", "JBT Solutions|QR Ticketing Platform", "Jan. 2024 - Mar. 2024"],
                ["Backend Developer", "MindTech|Money Manager", "June 2023 - 2025"],
                ["Software Engineer", "Optimus Bank Nigeria", "June 2023 - 2025"],
              ].map(([role, company, period]) => (
                <div key={role} className="flex items-baseline justify-between border-b border-border pb-3">
                  <div>
                    <p className="text-sm font-medium">{role}</p>
                    <p className="text-sm text-secondary">{company}</p>
                  </div>
                  <p className="font-mono text-xs text-secondary">{period}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-4">Tools I Reach For</p>
            <div className="flex flex-wrap gap-2">
              {["C#", ".NET / ASP.NET Core", "REST APIs", "Python", "R", "SQL", "MySQL", "SQL Server"
                , "scikit-learn", "PyTorch", "HuggingFace",
                "OpenCV",
                "pandas", "tidyverse", "ggplot2",
                "Git", "Azure"].map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-xs border border-border px-3 py-1.5 text-secondary hover:text-foreground hover:border-foreground/20 transition-colors duration-300"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    {tool}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
