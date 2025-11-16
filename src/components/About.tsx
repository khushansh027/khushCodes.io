import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, modular code across both frontend and backend-focusing on clarity, scalability, and best-practice architecture.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Combining intuitive UI/UX with practical engineering to create visually polished and user-friendly experiences.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimising frontend speed and backend efficiency for fast load times, smooth interactions, and reliable system performance.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center text-glow font-space">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto font-space">
            I'm a full-stack developer who builds end-to-end web applications with <br/>clean architecture, strong performance, and real-world reliability.<br/>I work across the entire stack using modern technologies, delivering <br/>scalable, production-ready solutions that make a meaningful impact.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-space">{feature.title}</h3>
                <p className="text-muted-foreground font-space">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
