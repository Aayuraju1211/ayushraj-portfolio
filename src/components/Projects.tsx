import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

import ugFullLogo from "@/assets/ug-full-logo.png";
import quarkLogo from "@/assets/quark-2025-logo.png";
import prismLogo from "@/assets/prism-brain-logo.png";
import spotifyLogo from "@/assets/spotify-full-logo.png";
import yatraLogo from "@/assets/yatra-wordmark.png";
import yourdostLogo from "@/assets/yourdost-icon.png";

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  coverBg: string;
  coverImage?: string;
  logoMaxWidth: string;
  label?: string;
  typographic?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ugf-website",
    title: "UGF Website",
    tags: ["Figma Prototype", "Work Experience"],
    coverBg: "#F0EDE6",
    coverImage: ugFullLogo,
    logoMaxWidth: "50%",
    lightCard: true,
  },
  {
    slug: "multi-asset-fund",
    title: "Multi-Asset Fund",
    tags: ["Figma Prototype", "Work Experience"],
    coverBg: "#F0EDE6",
    coverImage: ugFullLogo,
    logoMaxWidth: "50%",
    label: "MULTI-ASSET FUND",
    lightCard: true,
  },
  {
    slug: "campus-ambassador",
    title: "Campus Ambassador Website",
    tags: ["Figma Prototype"],
    coverBg: "#0C0C1A",
    coverImage: quarkLogo,
    logoMaxWidth: "60%",
  },
  {
    slug: "prism-mental-health",
    title: "Prism Mental Health Wellness MVP",
    tags: ["MVP", "Case Study"],
    coverBg: "#0A1520",
    coverImage: prismLogo,
    logoMaxWidth: "40%",
  },
  {
    slug: "spotify-prd",
    title: "Spotify PRD",
    tags: ["PRD", "Case Study"],
    coverBg: "#0A1A0A",
    coverImage: spotifyLogo,
    logoMaxWidth: "55%",
  },
  {
    slug: "ecommerce-analysis",
    title: "E-Commerce Sales Analysis",
    tags: ["Data Analysis", "Python", "Power BI"],
    coverBg: "#0D0D1A",
    typographic: true,
    logoMaxWidth: "0%",
  },
  {
    slug: "yatra-dashboard",
    title: "Tracking Dashboard for Yatra Freight",
    tags: ["Case Study"],
    coverBg: "#1A0505",
    coverImage: yatraLogo,
    logoMaxWidth: "50%",
  },
  {
    slug: "yourdost-churn",
    title: "Reducing Churn & Measuring ROI for yourDOST",
    tags: ["Case Study"],
    coverBg: "#1A1505",
    coverImage: yourdostLogo,
    logoMaxWidth: "55%",
  },
];

const allFilters = ["All", "Case Study", "Figma Prototype", "Data Analysis", "Automation"];

const ProjectCover = ({ project }: { project: Project }) => {
  // Parse bg hex to get a lighter version for radial gradient
  const hex = project.coverBg;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lighterCenter = `rgba(${Math.min(255, r + 38)}, ${Math.min(255, g + 38)}, ${Math.min(255, b + 38)}, 0.6)`;
  const lighterCenterHover = `rgba(${Math.min(255, r + 64)}, ${Math.min(255, g + 64)}, ${Math.min(255, b + 64)}, 0.6)`;

  return (
    <div
      className="aspect-[3/2] relative overflow-hidden flex items-center justify-center group/cover"
      style={{ backgroundColor: hex }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Radial gradient behind logo */}
      <div
        className="absolute inset-0 transition-opacity duration-200 opacity-100 group-hover/cover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${lighterCenter} 0%, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover/cover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${lighterCenterHover} 0%, transparent 60%)`,
        }}
      />

      {/* Logo / Content */}
      {project.typographic ? (
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-200 ease-out group-hover/cover:scale-[1.03]">
          <span className="font-heading text-[48px] leading-[1.1] text-[#E8E4DC] text-center">
            E-COM
          </span>
          <span className="font-heading text-[48px] leading-[1.1] text-[#E8E4DC] text-center">
            SALES
          </span>
          <span className="font-sub text-[11px] tracking-[0.15em] text-primary mt-3">
            Power BI · Python
          </span>
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-200 ease-out group-hover/cover:scale-[1.03]">
          {project.label && (
            <span className="font-sub text-[10px] uppercase tracking-[0.25em] mb-3" style={{ color: "#2A7A6F" }}>
              {project.label}
            </span>
          )}
          {project.coverImage && (
            <img
              src={project.coverImage}
              alt={project.title}
              className="object-contain"
              style={{ maxWidth: project.logoMaxWidth }}
            />
          )}
        </div>
      )}
    </div>
  );
};

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
                  <ProjectCover project={project} />
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
