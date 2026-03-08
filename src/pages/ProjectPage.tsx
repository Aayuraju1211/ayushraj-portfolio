import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../components/Projects";

import ugfScreen1 from "@/assets/ugf-screen-1.png";
import ugfScreen2 from "@/assets/ugf-screen-2.png";
import ugfScreen3 from "@/assets/ugf-screen-3.png";
import ugfScreen4 from "@/assets/ugf-screen-4.png";
import ugfScreen5 from "@/assets/ugf-screen-5.png";
import caScreen1 from "@/assets/ca-screen-1.png";
import caScreen2 from "@/assets/ca-screen-2.png";
import caScreen3 from "@/assets/ca-screen-3.png";
import caScreen4 from "@/assets/ca-screen-4.png";
import caScreen5 from "@/assets/ca-screen-5.png";
import caScreen6 from "@/assets/ca-screen-6.png";
import caScreen7 from "@/assets/ca-screen-7.png";
import caScreen8 from "@/assets/ca-screen-8.png";
import mafScreen1 from "@/assets/maf-screen-1.png";
import mafScreen2 from "@/assets/maf-screen-2.png";
import mafScreen3 from "@/assets/maf-screen-3.png";
import mafScreen4 from "@/assets/maf-screen-4.png";
import mafScreen5 from "@/assets/maf-screen-5.png";
import mafScreen6 from "@/assets/maf-screen-6.png";
import mafScreen7 from "@/assets/maf-screen-7.png";
import mafScreen8 from "@/assets/maf-screen-8.png";
import mafScreen9 from "@/assets/maf-screen-9.png";
import yatraCover from "@/assets/yatra-cover.jpg";
import spotifyCover from "@/assets/spotify-cover.jpg";
import prismCover from "@/assets/prism-cover.jpg";
import yourdostCover from "@/assets/yourdost-cover.jpg";

const projectScreens: Record<string, string[]> = {
  "ugf-website": [ugfScreen1, ugfScreen2, ugfScreen3, ugfScreen4, ugfScreen5],
  "campus-ambassador": [caScreen1, caScreen2, caScreen3, caScreen4, caScreen5, caScreen6, caScreen7, caScreen8],
  "multi-asset-fund": [mafScreen1, mafScreen2, mafScreen3, mafScreen4, mafScreen5, mafScreen6, mafScreen7, mafScreen8, mafScreen9],
};

interface CTA {
  label: string;
  url: string;
}

interface ProjectDetail {
  slug: string;
  title: string;
  tags: string[];
  problem: string;
  contribution: string;
  ctaLabel?: string;
  ctaUrl?: string;
  ctas?: CTA[];
  // PDF-based project fields
  pdfUrl?: string;
  coverImage?: string;
  secondaryCta?: CTA;
}

const projectDetails: ProjectDetail[] = [
  {
    slug: "prism-mental-health",
    title: "Prism: Mental Health Wellness MVP",
    tags: ["MVP", "Case Study"],
    problem: "Young professionals in India can't tell if their anxiety or burnout needs professional help. Existing solutions are either generic self-help or full therapy — nothing in between. 70–92% of affected individuals receive no care.",
    contribution: "Validated 3 core hypotheses via a 38-user survey and 1:1 interviews. Prioritized features using RICE (Mood Tracker: 115.71, Peer Support: 88.2, Sleep Tracking: 72). Designed system architecture, user journey, and north star metric. Built a functional MVP with onboarding, mood logging, and curiosity-gated insights screen.",
    pdfUrl: "/pdfs/prism-mvp.pdf",
    coverImage: prismCover,
    secondaryCta: { label: "View MVP Prototype", url: "#" },
  },
  {
    slug: "spotify-prd",
    title: "Increasing Time Spent Listening on Spotify",
    tags: ["PRD", "Case Study"],
    problem: "The challenge was identifying new, engaging ways to deepen user interaction and increase the average session length on the platform.",
    contribution: "Authored a PRD proposing specific feature enhancements, user loops, and success metrics to keep listeners engaged longer. Surveyed 36 users (83% frustrated by ads). Proposed a \"Spotify Mobile\" plan at ₹29/month — validated by 83.3% preference over current free tier.",
    pdfUrl: "/pdfs/spotify-prd.pdf",
    coverImage: spotifyCover,
  },
  {
    slug: "yatra-dashboard",
    title: "Tracking Dashboard for Yatra Freight",
    tags: ["Case Study"],
    problem: "Lack of clear, real-time visibility into freight movements was causing operational delays and poor customer communication.",
    contribution: "Designed a comprehensive tracking dashboard to monitor freight status, consolidate shipment data, and streamline logistics tracking. Wrote BRD and full PRD covering shipment display, exception management, RBAC, and automated milestone notifications.",
    pdfUrl: "/pdfs/yatra-freight.pdf",
    coverImage: yatraCover,
  },
  {
    slug: "yourdost-churn",
    title: "Reducing Churn & Measuring ROI for yourDOST",
    tags: ["Case Study"],
    problem: "The business needed a structured approach to retain users on the platform while accurately proving the return on investment (ROI).",
    contribution: "Developed a strategic framework that identified churn triggers and proposed targeted feature interventions to improve user loyalty. Built an ROI Quantification Model using the WHO-5 framework to produce a board-ready B2B wellness impact dashboard.",
    pdfUrl: "/pdfs/yourdost-churn.pdf",
    coverImage: yourdostCover,
  },
  {
    slug: "ecommerce-analysis",
    title: "E-Commerce Sales Analysis",
    tags: ["Data Analysis", "Python", "Power BI"],
    problem: "Retail businesses struggle to identify which customer segments drive revenue and whether discounts actually improve margins or just erode them.",
    contribution: "Cleaned raw e-commerce data in Python. Analyzed purchasing behavior across age, gender, and city. Evaluated discount effectiveness and membership tier impact (Bronze, Silver, Gold). Delivered a Power BI dashboard surfacing $295K in tracked revenue with actionable retention and targeting insights.",
    ctaLabel: "View on GitHub",
    ctaUrl: "#",
  },
  {
    slug: "ugf-website",
    title: "UGF Website",
    tags: ["Figma Prototype", "Work Experience"],
    problem: "Unity Growth Fund's digital presence needed an overhaul into a credibility-building platform for LP investors and prospective founders.",
    contribution: "Led stakeholder requirement sessions and managed iterative feedback loops. Owned end-to-end product lifecycle from brief to high-fidelity Figma prototype. Coordinated design-to-development handoff with QA and implemented technical SEO from Day 1.",
    ctas: [
      { label: "Open Prototype in Figma", url: "https://www.figma.com/proto/F7u34sWAgL1wjdNsUJTMxy/UGF-Website?page-id=0%3A1&node-id=1-412&p=f&viewport=-2003%2C-529%2C0.34&t=0dsVWolqH3FJjTiF-1&scaling=scale-down&content-scaling=fixed" },
      { label: "Open Website", url: "https://www.unitygrowthfund.com/" },
    ],
  },
  {
    slug: "multi-asset-fund",
    title: "Multi-Asset Fund",
    tags: ["Figma Prototype", "Work Experience"],
    problem: "Design the UI for UGF's \"Multi-Asset\" investment vertical dashboard for LP-facing fund metrics visualization.",
    contribution: "Designed the full Figma prototype for the Multi-Asset and VC Fund verticals. Incorporated industry-standard fund metrics displays. Enabled SAM expansion and unlocked new revenue streams for the firm.",
    ctaLabel: "Open Prototype in Figma",
    ctaUrl: "https://www.figma.com/proto/ypPInfhpBML0NqTwd8We8a/UGF?page-id=88%3A293&node-id=600-1421&viewport=302%2C-4760%2C0.4&t=zjV2A0rly3iB8I1I-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=600%3A1421",
  },
  {
    slug: "campus-ambassador",
    title: "Campus Ambassador Website",
    tags: ["Figma Prototype"],
    problem: "Design and launch the official Quark Campus Ambassador program website to drive nationwide outreach across 500+ colleges.",
    contribution: "Led end-to-end design from wireframe to prototype. Built sections for program overview, benefits, responsibilities, testimonials, FAQs, and a gamified ambassador leaderboard. Coordinated with the dev team for live deployment. Achieved 100% of registration targets.",
    ctaLabel: "Open Prototype in Figma",
    ctaUrl: "https://www.figma.com/proto/u4xa7vxd0wCoWmTBwGGKaK/CA_DevSoc?page-id=&node-id=1-2&p=f&viewport=541%2C176%2C0.14&t=Eyr0d4Y4FEifz2Vr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
];

const placeholderScreens = [1, 2, 3];

/* ─── PDF Thumbnail Component ─── */
const PdfThumbnail = ({
  coverImage,
  pdfUrl,
  title,
}: {
  coverImage: string;
  pdfUrl: string;
  title: string;
}) => (
  <a
    href={pdfUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block overflow-hidden border border-border"
    style={{ borderColor: "#2A3545" }}
  >
    <img
      src={coverImage}
      alt={`${title} — cover slide`}
      className="w-full block transition-all duration-300 ease-out group-hover:scale-[1.015] group-hover:brightness-[1.06]"
    />
    {/* Hover overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
      <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-primary text-primary-foreground font-sub text-[13px] uppercase tracking-[0.12em] rounded-sm shadow-lg">
        <FileText size={16} />
        View Full Deck
      </span>
    </div>
  </a>
);

/* ─── Screen Gallery Component ─── */
const ScreenGallery = ({
  slug,
  screens,
  title,
  coverBg,
}: {
  slug: string;
  screens?: string[];
  title: string;
  coverBg?: string;
}) => {
  if (screens) {
    const continuityPairs: Record<string, number[][]> = {
      "multi-asset-fund": [[1, 2], [3, 4]],
    };
    const pairs = continuityPairs[slug] || [];

    return (
      <div className="flex flex-col gap-[20px]">
        {screens.map((src, i) => {
          const isBottomOfPair = pairs.some(([a]) => a === i);
          const isTopOfPair = pairs.some(([, b]) => b === i);

          const borderStyle: React.CSSProperties = {
            borderLeft: "1px solid #2A3545",
            borderRight: "1px solid #2A3545",
            borderTop: isTopOfPair ? "none" : "1px solid #2A3545",
            borderBottom: isBottomOfPair ? "none" : "1px solid #2A3545",
          };

          return (
            <ScrollReveal key={i} delay={i * 0.06}>
              {i > 0 && !isTopOfPair && (
                <div className="mb-[20px] border-t" style={{ borderColor: "rgba(30, 42, 30, 0.2)" }} />
              )}
              <div style={isTopOfPair ? { marginTop: "-20px" } : undefined}>
                <img
                  src={src}
                  alt={`${title} screen ${i + 1}`}
                  className="w-full block transition-[filter] duration-[250ms] ease-in-out hover:brightness-[1.04]"
                  style={borderStyle}
                />
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px]">
      {placeholderScreens.map((i) => (
        <ScrollReveal key={i} delay={i * 0.08}>
          <div
            className="aspect-[16/10] border border-border flex items-center justify-center"
            style={{ backgroundColor: coverBg || "hsl(var(--muted))" }}
          >
            <span className="font-sub text-[12px] uppercase tracking-[0.15em] text-foreground/20">
              Screen {i} — Coming Soon
            </span>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

/* ─── Main Page ─── */
const ProjectPage = () => {
  const { slug } = useParams();
  const detail = projectDetails.find((p) => p.slug === slug);
  const projectMeta = projects.find((p) => p.slug === slug);
  const screens = slug ? projectScreens[slug] : undefined;
  const isPdfProject = !!detail?.pdfUrl;

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-[120px]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-sub text-[12px] uppercase tracking-[0.1em] mb-10 transition-colors"
            >
              <ArrowLeft size={14} /> Back to projects
            </Link>

            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {detail.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-12">
              {detail.tags.map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Problem / Contribution columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <h3 className="font-sub text-[12px] uppercase tracking-[0.12em] text-primary mb-3">
                {isPdfProject ? "The Situation" : "Problem Statement"}
              </h3>
              <p className="text-foreground/80 text-[15px] leading-relaxed">
                {detail.problem}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="font-sub text-[12px] uppercase tracking-[0.12em] text-primary mb-3">
                {isPdfProject ? "My Contribution" : "Contribution"}
              </h3>
              <p className="text-foreground/80 text-[15px] leading-relaxed">
                {detail.contribution}
              </p>
            </ScrollReveal>
          </div>

          {/* ── PDF Project: Thumbnail + CTAs ── */}
          {isPdfProject && detail.coverImage && (
            <>
              <ScrollReveal>
                <PdfThumbnail
                  coverImage={detail.coverImage}
                  pdfUrl={detail.pdfUrl!}
                  title={detail.title}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex flex-wrap gap-4 mt-8 mb-16">
                  <a
                    href={detail.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button inline-flex items-center gap-2"
                  >
                    <FileText size={14} />
                    Open Full PDF
                  </a>
                  {detail.secondaryCta && (
                    <a
                      href={detail.secondaryCta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button inline-flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      {detail.secondaryCta.label}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            </>
          )}

          {/* ── Screen-based projects: CTAs + gallery ── */}
          {!isPdfProject && (
            <>
              {detail.ctaUrl && !detail.ctas && (
                <ScrollReveal>
                  <a
                    href={detail.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button inline-flex items-center gap-2 mb-16"
                  >
                    <ExternalLink size={14} />
                    {detail.ctaLabel}
                  </a>
                </ScrollReveal>
              )}

              {detail.ctas && detail.ctas.length > 0 && (
                <ScrollReveal>
                  <div className="flex flex-wrap gap-4 mb-16">
                    {detail.ctas.map((cta) => (
                      <a
                        key={cta.label}
                        href={cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button inline-flex items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        {cta.label}
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              <ScreenGallery
                slug={slug!}
                screens={screens}
                title={detail.title}
                coverBg={projectMeta?.coverBg}
              />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
