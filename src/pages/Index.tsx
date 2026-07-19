import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import CaseStudy from "@/components/CaseStudy";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

const socials =
  [
    {
      name: "GitHub",
      link: "https://github.com/Emmynex"
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/emmanuel-agbenin-185754220/",
    },
    
  ]

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="work">
        <ProjectGrid />
      </div>
      <div id="case-study">
        <CaseStudy />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="px-8 md:px-16 py-12 border-t border-border max-w-[1440px] mx-auto flex items-center justify-between">
        <span className="font-mono text-xs text-secondary">© 2026 Agbenin Emmanuel</span>
        <div className="flex gap-6">
          {socials.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="font-mono text-xs text-secondary hover:text-foreground transition-colors duration-300 underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;
