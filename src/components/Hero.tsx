import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import ayushPhoto from "@/assets/ayush-photo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const Hero = () => {
  return (
    <section className="h-[calc(100vh-80px)] flex items-center overflow-hidden max-md:h-auto max-md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Desktop Layout - 2 columns: 65% content + 35% image */}
          <div className="hidden md:grid md:grid-cols-[65%_35%] gap-6 items-start w-full">
            {/* Column 1: Intro + Cards */}
            <motion.div className="flex flex-col gap-6 pr-4" variants={fadeUp}>
              {/* Intro Text */}
              <div>
                <h1 className="text-4xl md:text-[3.2rem] lg:text-[3.8rem] font-heading font-semibold text-foreground leading-[1.08] mb-6">
                  Building products at the intersection of AI, data, and human behavior.
                </h1>
                <p className="text-base md:text-[17px] text-foreground/50 font-body leading-[1.8] max-w-2xl">
                  Final-year ME student at BITS Pilani. Previously at{" "}
                  <span className="text-primary">Unity Growth Fund</span>{" "}
                  and{" "}
                  <span className="text-primary">Grasim Industries</span>.
                </p>
              </div>

              {/* Education + Resume Cards side by side */}
              <div className="grid grid-cols-2 gap-4">
                {/* Education Box */}
                <div className="border border-border rounded-[16px] bg-card/40 backdrop-blur-sm p-5">
                  <p className="font-sub uppercase text-[10px] tracking-[0.18em] text-foreground/25 mb-2">
                    Education
                  </p>
                  <p className="text-sm font-body text-foreground/80 leading-relaxed">
                    B.E. Mechanical Engineering,
                    <br />
                    Minor in Computational Economics
                  </p>
                  <p className="text-xs font-body text-muted-foreground mt-1.5">
                    BITS Pilani • Expected May 2026
                  </p>
                </div>

                {/* Resume Box */}
                <div className="border border-border rounded-[16px] bg-card/40 backdrop-blur-sm p-5 flex flex-col">
                  <p className="font-sub uppercase text-[10px] tracking-[0.18em] text-foreground/25 mb-2">
                    Professional Resume
                  </p>
                  <p className="text-xs text-muted-foreground font-body mb-4">
                    CV covering product strategy, AI building, and execution track record.
                  </p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[8px] bg-foreground text-background font-sub uppercase text-[11px] tracking-[0.12em] font-medium hover:opacity-90 transition-opacity duration-200 mt-auto"
                  >
                    <Download size={14} />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Image Card */}
            <motion.div className="flex items-stretch" variants={fadeUp}>
              <div className="border border-border rounded-[16px] overflow-hidden bg-card/40 backdrop-blur-sm w-full flex flex-col">
                <div className="overflow-hidden h-[420px]">
                  <img
                    src={ayushPhoto}
                    alt="Ayush Raj"
                    className="w-full h-full object-cover object-[40%_top] hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col items-center p-4 gap-2">
                  <h2 className="text-lg font-heading font-semibold text-foreground">
                    Ayush Raj
                  </h2>
                  <p className="text-sm text-primary font-body">
                    BITS Pilani '26
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <a
                      href="https://linkedin.com/in/ayushraj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="mailto:ayush@example.com"
                      className="p-2 border border-border rounded-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 md:hidden">
            {/* Profile Card */}
            <motion.div variants={fadeUp}>
              <div className="border border-border rounded-[16px] overflow-hidden bg-card/40 backdrop-blur-sm max-w-[280px] mx-auto">
                <div className="overflow-hidden h-[240px]">
                  <img
                    src={ayushPhoto}
                    alt="Ayush Raj"
                    className="w-full h-full object-cover object-[40%_top] hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col items-center p-4 gap-2">
                  <h2 className="text-lg font-heading font-semibold text-foreground">Ayush Raj</h2>
                  <p className="text-sm text-primary font-body">BITS Pilani '26</p>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <a href="https://linkedin.com/in/ayushraj" target="_blank" rel="noopener noreferrer" className="p-2 border border-border rounded-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200" aria-label="LinkedIn"><Linkedin size={16} /></a>
                    <a href="mailto:ayush@example.com" className="p-2 border border-border rounded-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200" aria-label="Email"><Mail size={16} /></a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div variants={fadeUp}>
              <h1 className="text-3xl font-heading font-semibold text-foreground leading-[1.08] mb-5">
                Building products at the intersection of AI, data, and human behavior.
              </h1>
              <p className="text-base text-foreground/50 font-body leading-[1.8]">
                Final-year ME student at BITS Pilani. Previously at{" "}
                <span className="text-primary">Unity Growth Fund</span>{" "}
                and <span className="text-primary">Grasim Industries</span>.
              </p>
            </motion.div>

            {/* Education + Resume */}
            <motion.div className="flex flex-col gap-4" variants={fadeUp}>
              <div className="border border-border rounded-[16px] bg-card/40 backdrop-blur-sm p-5">
                <p className="font-sub uppercase text-[10px] tracking-[0.18em] text-foreground/25 mb-2">Education</p>
                <p className="text-sm font-body text-foreground/80 leading-relaxed">B.E. Mechanical Engineering,<br />Minor in Computational Economics</p>
                <p className="text-xs font-body text-muted-foreground mt-1.5">BITS Pilani • Expected May 2026</p>
              </div>
              <div className="border border-border rounded-[16px] bg-card/40 backdrop-blur-sm p-5">
                <p className="font-sub uppercase text-[10px] tracking-[0.18em] text-foreground/25 mb-2">Professional Resume</p>
                <p className="text-xs text-muted-foreground font-body mb-4">CV covering product strategy, AI building, and execution track record.</p>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[8px] bg-foreground text-background font-sub uppercase text-[11px] tracking-[0.12em] font-medium hover:opacity-90 transition-opacity duration-200"><Download size={14} />Download PDF</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
