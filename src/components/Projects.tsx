import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

import ugfLogo from "@/assets/ugf-logo.png";
import quarkLogo from "@/assets/quark-logo.jpg";
import prismLogo from "@/assets/prism-logo.png";
import spotifyLogo from "@/assets/spotify-logo.png";
import dataAnalysisLogo from "@/assets/data-analysis-logo.png";
import yatraLogo from "@/assets/yatra-logo.png";
import yourdostLogo from "@/assets/yourdost-logo.png";

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  coverColor: string;
  coverImage?: string;
}

export const projects: Project[] = [
  { slug: "ugf-website", title: "UGF Website", tags: ["Figma Prototype", "Work Experience"], coverColor: "from-primary/10 to-primary/5", coverImage: ugfLogo },
  { slug: "multi-asset-fund", title: "Multi-Asset Fund", tags: ["Figma Prototype", "Work Experience"], coverColor: "from-muted to-secondary", coverImage: ugfLogo },
  { slug: "campus-ambassador", title: "Campus Ambassador Website", tags: ["Figma Prototype"], coverColor: "from-secondary to-muted", coverImage: quarkLogo },
  { slug: "prism-mental-health", title: "Prism Mental Health Wellness MVP", tags: ["MVP", "Case Study"], coverColor: "from-primary/5 to-muted", coverImage: prismLogo },
  { slug: "spotify-prd", title: "Spotify PRD", tags: ["PRD", "Case Study"], coverColor: "from-muted to-primary/10", coverImage: spotifyLogo },
  { slug: "ecommerce-analysis", title: "E-Commerce Sales Analysis", tags: ["Data Analysis", "Python", "Power BI"], coverColor: "from-secondary to-primary/5", coverImage: dataAnalysisLogo },
  { slug: "yatra-dashboard", title: "Tracking Dashboard for Yatra Freight", tags: ["Case Study"], coverColor: "from-primary/10 to-secondary", coverImage: yatraLogo },
  { slug: "yourdost-churn", title: "Reducing Churn & Measuring ROI for yourDOST", tags: ["Case Study"], coverColor: "from-muted to-primary/5", coverImage: yourdostLogo },
];

const allFilters = ["All", "Case Study", "Figma Prototype", "Data Analysis", "Automation"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === activeFilter));

  return (
    <section id="projects" className="py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="section-label">02 Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-10">
            Selected work
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12">
            {allFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-sub text-[12px] uppercase tracking-[0.1em] px-4 py-2 border transition-all duration-200 ${
                  activeFilter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <Link to={`/project/${project.slug}`} className="block project-card group">
                  <div className="aspect-[16/7] overflow-hidden rounded-t-[24px]">
                    <div className={`w-full h-full bg-gradient-to-br ${project.coverColor} flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110`}>
                      {project.coverImage ? (
                        <img src={project.coverImage} alt={project.title} className="max-h-[70%] max-w-[60%] object-contain" />
                      ) : (
                        <span className="font-heading text-lg text-foreground/30 group-hover:text-foreground/50 transition-colors">
                          {project.title}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-medium text-foreground mb-3">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
