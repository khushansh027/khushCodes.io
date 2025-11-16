import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const majorProjects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce solution with robust product management, authentication, and a scalable architecture.",
        github: "https://github.com/khushansh027/buyBusy.io",
        liveLink: "https://buybusy-iov1.vercel.app/",
        tags: ["React", "Firebase", "Axios", "Reselect"],
        image:
            "https://plus.unsplash.com/premium_photo-1683887064255-1c428d0b3934?w=800&h=600&fit=crop",
    },
    {
        title: "E-Learning & LMS Platform",
        description:
            "A complete LMS with secure authentication, course creation tools, student dashboards, and cloud storage integration.",
        github: "https://github.com/khushansh027/srcOpenCodeLabs",
        liveLink: "https://src-opencodelabsv1.vercel.app/",
        tags: ["React", "Firebase", "Supabase", "Multer"],
        image:
            "https://i.pinimg.com/736x/41/54/c7/4154c780b69fafa3e01f738d635c258c.jpg",
    },
    {
        title: "Blogging Platform",
        description:
            "A dynamic blogging system with user authentication, role-based access, a rich text editor, and a scalable backend.",
        github: "https://github.com/khushansh027/blogLogs-v1",
        liveLink: "https://blog-logs-v1.vercel.app/",
        tags: ["React", "Firebase", "Lucide React"],
        image:
            "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=800&h=600&fit=crop",
    },
];

const minorProjects = [
    {
        title: "iPod Clone Web App",
        description:
            "A fun recreation of the classic iPod UI with music navigation and scroll-wheel interactions.",
        github: "https://github.com/khushansh027/iPod-2004",
        liveLink: "https://ipod-2004-v1.vercel.app/",
        tags: ["React", "Zingtouch"],
        image:
            "https://images.unsplash.com/photo-1641060265920-8e4f31d5828c?w=800&h=600&fit=crop",
    },
    {
        title: "Task Management App",
        description:
            "A simple task tracker featuring CRUD operations, filtering, and a minimal responsive UI.",
        github: "https://github.com/khushansh027/CN-Todo-JS-Skill_Test",
        liveLink: "https://todolist-khushansh.netlify.app/",
        tags: ["Javascript", "LocalStorage"],
        image:
            "https://plus.unsplash.com/premium_photo-1683309563255-fef9e541cdec?w=800&h=600&fit=crop",
    },
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
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
            <p className="text-muted-foreground mb-4 font-space">
                {project.description}
            </p>

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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                    <Github size={20} />
                    <span className="text-sm font-space">Code</span>
                </a>
                <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                    <ExternalLink size={20} />
                    <span className="text-sm font-space">Live Demo</span>
                </a>
            </div>
        </div>
    </motion.div>
);

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


                    {/* {projects.map((project, index) => (
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
            ))} */}
                    {/* MAJOR PROJECTS */}
                    <h3 className="text-3xl font-bold mb-10 font-space text-center">Major Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                        {majorProjects.map((project, index) => (
                            <ProjectCard project={project} index={index} key={project.title} />
                        ))}
                    </div>
                    {/* MINOR PROJECTS */}
                    <h3 className="text-3xl font-bold mb-10 font-space text-center">Minor Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {minorProjects.map((project, index) => (
                            <ProjectCard project={project} index={index} key={project.title} />
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
