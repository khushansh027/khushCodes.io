import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "An immersive 3D portfolio website built with React Three Fiber and modern web technologies",
    tags: ["React", "Three.js", "Tailwind"],
    image: "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?w=800&h=600&fit=crop",
  },
  {
    title: "E-Learning & LMS Platform",
    description: "Full-stack e-commerce solution with real-time inventory and payment processing",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
  {
    title: "Blogging Platform",
    description: "Interactive dashboard for AI model training and deployment with real-time analytics",
    tags: ["React", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "iPod Clone Web App",
    description: "Interactive dashboard for AI model training and deployment with real-time analytics",
    tags: ["React", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Task Management App",
    description: "Interactive dashboard for AI model training and deployment with real-time analytics",
    tags: ["React", "Python", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-glow font-space">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 font-space">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 font-space">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full font-space"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm font-space">Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm font-space">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
