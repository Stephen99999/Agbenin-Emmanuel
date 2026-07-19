import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Machine Learning Classification - CTG Dataset",
    description: "Built a leakage-aware fetal-state classification workflow using stratified splitting, SMOTE, cross-validation and class-sensitive metrics, improving minority-class recall to approximately 0.83.",
    image: "https://images.unsplash.com/photo-1758691462668-046fd85ceac9?w=600&q=80",
    tags: ["Python", "Scikit-learn", "SMOTE"],
    year: "2025",
    tall: true,
  },
  {
    title: "Computer Vision Project - Facial Recognition System",
    description: "Built an OpenCV facial recognition workflow for image capture, preprocessing, face detection and identity verification, achieving approximately 80% accuracy under controlled conditions.",
    image: "https://images.unsplash.com/photo-1622399591207-269e63936861?w=600&q=80",
    tags: ["Python", "OpenCV", "NumPy"],
    year: "2024",
  },
  {
    title: "Computer Vision - Droplet Detection System",
    description: "Developed an OpenCV-based pipeline to detect inner droplets, outer droplets and droplet totals across unstable frames using thresholding, contour detection, circularity filtering and tracking logic.",
    image: "https://images.unsplash.com/photo-1492962827063-e5ea0d8c01f5?w=600&q=80",
    tags: ["Python", "OpenCV", "Image Processing"],
    year: "2024",
  },
  {
    title: "Data Analysis & Statistical Modelling - BBC News / Air Quality Datasets",
    description: "Analysed 35,000+ BBC news records and multi-year DEFRA air-quality data using cleaning, deduplication, time-series analysis, text mining and visualisation workflows in R.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["R", "Statistical Modelling", "Data Visualization"],
    year: "2023",
    tall: true,
  },

];

const ProjectGrid = () => {
  return (
    <section className="px-8 md:px-16 py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-sans font-medium text-2xl md:text-[2.5rem] leading-tight tracking-[-0.01em]">
          Selected Work
        </h2>
        <span className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs text-secondary uppercase tracking-widest">
          {projects.length} Projects
        </span>
      </div>

      <div className="masonry-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
