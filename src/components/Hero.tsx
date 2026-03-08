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
  visible: { transition: { staggerChildren: 0.1 } },
};

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] flex items-center overflow-hidden max-md:min-h-auto max-md:max-h-none max-md:py-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Right Column: Profile + Education + Resume */}
          <motion.div
            className="md:col-span-4 md:order-2 flex flex-col gap-4"
            variants={fadeUp}
          >
            {/* Profile Card */}
            <div className="border border-border rounded-[16px] overflow-hidden bg-card/40 backdrop-blur-sm">
              <div className="flex flex-col items-center p-6 gap-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border">
                  <img
                    src={ayushPhoto}
                    alt="Ayush Raj"
                    className="w-full h-full object-cover object-[40%_top]"
                    loading="eager"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-heading font-semibold text-foreground">
                    Ayush Raj
                  </h2>
                  <p className="text-sm text-primary font-body mt-0.5">
                    BITS Pilani '26
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2">
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
            <div className="border border-border rounded-[16px] bg-card/40 backdrop-blur-sm p-5">
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
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-[8px] bg-foreground text-background font-sub uppercase text-[11px] tracking-[0.12em] font-medium hover:opacity-90 transition-opacity duration-200"
              >
                <Download size={14} />
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Left Column: Intro */}
          <motion.div
            className="md:col-span-8 md:order-1 flex flex-col gap-6"
            variants={fadeUp}
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground leading-[1.1] mb-5">
                Hey there! I'm Ayush Raj 👋
              </h1>
              <p className="text-base md:text-[17px] text-foreground/85 font-body leading-[1.8] max-w-2xl">
                I'm a final-year student with a keen interest in Product
                Management. I recently completed a 6-month Product Management
                Internship at{" "}
                <span className="text-foreground font-medium">
                  Unity Growth Fund
                </span>
                , focusing on user research, data analysis, and product
                strategy...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
