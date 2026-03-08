import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
}

const projectDetails: ProjectDetail[] = [
  {
    slug: "prism-mental-health",
    title: "Prism: Mental Health Wellness MVP",
    tags: ["MVP", "Case Study"],
    problem: "Young professionals in India can't tell if their anxiety or burnout needs professional help. Existing solutions are either generic self-help or full therapy — nothing in between. 70–92% of affected individuals receive no care.",
    contribution: "Validated 3 core hypotheses via a 38-user survey and 1:1 interviews. Prioritized features using RICE (Mood Tracker: 115.71, Peer Support: 88.2, Sleep Tracking: 72). Designed system architecture, user journey, and north star metric. Built a functional MVP with onboarding, mood logging, and curiosity-gated insights screen.",
    ctaLabel: "View MVP",
    ctaUrl: "#",
  },
  {
    slug: "spotify-prd",
    title: "Increasing Time Spent Listening on Spotify",
    tags: ["PRD", "Case Study"],
    problem: "Free-tier Spotify users in India (18–27 years, ~16M segment) abandon sessions due to random ad interruptions and lack of playback control, directly hurting TSL, ad revenue, and premium conversion.",
    contribution: "Surveyed 36 users (83% frustrated by ads). Proposed a \"Spotify Mobile\" plan at ₹29/month — validated by 83.3% preference over current free tier. Designed full ad timer UX specification and data instrumentation plan with 7 custom tracking events.",
  },
  {
    slug: "yatra-dashboard",
    title: "Tracking Dashboard for Yatra Freight",
    tags: ["Case Study"],
    problem: "Yatra Freight teams manually chased shipment status via calls and fragmented portals, creating high operational costs, customer churn risk, and a scaling bottleneck.",
    contribution: "Wrote BRD and full PRD covering shipment display, exception management, RBAC, and automated milestone notifications. Built wireframes for 3 core views. Defined 7 success metrics including the north star (Proactive Exception Handling Rate) and 4 explicit product trade-offs.",
  },
  {
    slug: "yourdost-churn",
    title: "Reducing Churn & Measuring ROI for yourDOST",
    tags: ["Case Study"],
    problem: "yourDOST's B2B2C wellness platform faced high early churn (users dropping after 1–2 sessions) and couldn't give HR teams a measurable ROI on their wellness spend — making renewals hard to justify.",
    contribution: "Designed Privacy-First Onboarding, a Time-to-Value Optimizer to match employees with counselors faster, and a Smart Care Loop to prevent early churn. Built an ROI Quantification Model using the WHO-5 framework to produce a board-ready B2B wellness impact dashboard.",
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

const ProjectPage = () => {
  const { slug } = useParams();
  const detail = projectDetails.find((p) => p.slug === slug);
  const projectMeta = projects.find((p) => p.slug === slug);
  const screens = slug ? projectScreens[slug] : undefined;

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <h3 className="font-sub text-[12px] uppercase tracking-[0.12em] text-primary mb-3">
                Problem Statement
              </h3>
              <p className="text-foreground/80 text-[15px] leading-relaxed">
                {detail.problem}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="font-sub text-[12px] uppercase tracking-[0.12em] text-primary mb-3">
                Contribution
              </h3>
              <p className="text-foreground/80 text-[15px] leading-relaxed">
                {detail.contribution}
              </p>
            </ScrollReveal>
          </div>

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

          {/* Project screens */}
          <div className="flex flex-col gap-[20px]">
            {screens ? (
              screens.map((src, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  {i > 0 && (
                    <div className="mb-[20px] border-t" style={{ borderColor: "rgba(30, 42, 30, 0.2)" }} />
                  )}
                  <img
                    src={src}
                    alt={`${detail.title} screen ${i + 1}`}
                    className="w-full block transition-[filter] duration-[250ms] ease-in-out hover:brightness-[1.04]"
                    style={{ border: "1px solid #2A3545" }}
                  />
                </ScrollReveal>
              ))
            ) : (
              placeholderScreens.map((i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="aspect-[16/10] border border-border flex items-center justify-center" style={{ backgroundColor: projectMeta?.coverBg || "hsl(var(--muted))" }}>
                    <span className="font-sub text-[12px] uppercase tracking-[0.15em] text-foreground/20">
                      Screen {i} — Coming Soon
                    </span>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
