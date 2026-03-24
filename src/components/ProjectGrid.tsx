import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Neural Style Transfer Engine",
    description: "Real-time style transfer pipeline processing 4K video at 30fps using custom ONNX models.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    tags: ["PyTorch", "ONNX", "WebGL"],
    year: "2025",
    tall: true,
  },
  {
    title: "Conversational RAG System",
    description: "Enterprise retrieval-augmented generation with multi-modal document understanding.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    tags: ["LangChain", "Pinecone", "GPT-4"],
    year: "2024",
  },
  {
    title: "Autonomous Drone Mapping",
    description: "Computer vision pipeline for real-time 3D terrain reconstruction from drone footage.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
    tags: ["OpenCV", "SLAM", "ROS"],
    year: "2024",
  },
  {
    title: "Voice-First Health Assistant",
    description: "HIPAA-compliant voice AI for patient intake and symptom triage in clinical settings.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    tags: ["Whisper", "FastAPI", "React"],
    year: "2023",
    tall: true,
  },
  {
    title: "Predictive Maintenance Platform",
    description: "Time-series anomaly detection for industrial IoT sensors with 99.2% accuracy.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    tags: ["TensorFlow", "Kafka", "Grafana"],
    year: "2023",
  },
  {
    title: "AI Code Review Bot",
    description: "GitHub-integrated tool that provides contextual code review using fine-tuned LLMs.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80",
    tags: ["TypeScript", "LLM", "GitHub API"],
    year: "2024",
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
