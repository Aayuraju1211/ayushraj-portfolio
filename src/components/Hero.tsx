import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import ayushPhoto from "@/assets/ayush-photo.png";
import coverBanner from "@/assets/hero-cover-banner.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const Hero = () => {
  return (
    <section className="h-[calc(100vh-80px)] flex flex-col pt-16 overflow-hidden max-md:h-auto max-md:overflow-visible max-md:pb-12">
      {/* Slim Cover Banner */}
      <motion.div
        className="relative w-full h-[18vh] max-md:h-[140px] flex-shrink-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src={coverBanner}
          alt="Cover banner"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/40" />
      </motion.div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col max-w-[1400px] mx-auto px-6 md:px-12 w-full min-h-0">
        {/* Profile Picture — overlaps banner */}
        <motion.div
          className="relative -mt-12 md:-mt-14 mb-5 md:mb-6 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-[16px] border-[3px] border-background overflow-hidden shadow-lg">
            <img
              src={ayushPhoto}
              alt="Ayush Raj"
              className="w-full h-full object-cover object-[40%_top]"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 flex-1 min-h-0"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Identity & Education */}
          <motion.div className="md:col-span-4 flex flex-col gap-4" variants={fadeUp}>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-[1.1]">
                Ayush Raj
              </h1>

              {/* Socials */}
              <div className="flex items-center gap-2 mt-3">
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

            {/* Education */}
            <div className="text-[13px] md:text-sm text-muted-foreground font-body leading-relaxed">
              <p className="font-sub uppercase text-[10px] tracking-[0.18em] text-foreground/25 mb-1.5">
                Education
              </p>
              B.E. Mechanical Engineering, Minor in Computational Economics.
              <br />
              <span className="text-foreground/60 font-medium">BITS Pilani, Goa Campus</span>{" "}
              <span className="text-foreground/30">(Class of 2026)</span>
            </div>
          </motion.div>

          {/* Right Column: Intro & Resume CTA */}
          <motion.div className="md:col-span-8 flex flex-col gap-5" variants={fadeUp}>
            {/* Intro text */}
            <p className="text-base md:text-[17px] text-foreground/85 font-body leading-[1.75] max-w-2xl">
              Hi there! I'm Ayush Raj. A final-year engineering student
              transitioning into Product Management. I recently completed a
              6-month PM internship at{" "}
              <span className="text-foreground font-medium">Unity Growth Fund</span>,
              focusing on user research, data analysis, and product strategy.
            </p>

            {/* Resume Card */}
            <div className="border border-border bg-card/60 backdrop-blur-sm rounded-[16px] p-5 md:p-6 max-w-md">
              <p className="font-sub uppercase text-[10px] tracking-[0.18em] text-foreground/25 mb-2">
                Resume
              </p>
              <p className="text-sm text-muted-foreground font-body mb-4">
                View my full background, skills, and experience.
              </p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center gap-2 text-[12px]"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
