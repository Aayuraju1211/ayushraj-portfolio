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
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-[1fr_auto] gap-16 items-center w-full">
            {/* Left Column */}
            <motion.div className="flex flex-col gap-10 pt-16" variants={fadeUp}>
              <div>
                <h1 className="text-4xl md:text-[2.8rem] lg:text-[3.4rem] font-heading font-semibold text-foreground leading-[1.08] mb-6 max-w-[580px]">
                  Building products at the intersection of AI, data, and human behavior.
                </h1>
                <p className="text-base md:text-[17px] text-foreground/50 font-body leading-[1.8] max-w-2xl">
                  Final-year ME student at BITS Pilani. Previously at{" "}
                  <span className="text-primary">Unity Growth Fund</span>{" "}
                  and{" "}
                  <span className="text-primary">Grasim Industries</span>.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 border border-border rounded-[8px] font-sub uppercase text-[11px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Download size={15} />
                  Download Resume
                </a>
                <a
                  href="mailto:ayush@example.com"
                  className="flex items-center gap-2.5 px-6 py-3 border border-border rounded-[8px] font-sub uppercase text-[11px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Mail size={15} />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/ayushraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 border border-border rounded-[8px] font-sub uppercase text-[11px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Right Column - Photo */}
            <motion.div className="flex items-center justify-center pt-24" variants={fadeUp}>
              <div className="rounded-[16px] overflow-hidden w-[275px]">
                <img
                  src={ayushPhoto}
                  alt="Ayush Raj"
                  className="w-full h-[calc(100%+50px)] object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="rounded-[16px] overflow-hidden w-[260px]">
                <img
                  src={ayushPhoto}
                  alt="Ayush Raj"
                  className="w-full h-[340px] object-cover object-[40%_20%]"
                  loading="eager"
                />
              </div>
            </motion.div>

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

            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] font-sub uppercase text-[10px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200">
                <Download size={14} />
                Resume
              </a>
              <a href="mailto:ayush@example.com" className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] font-sub uppercase text-[10px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200">
                <Mail size={14} />
                Email
              </a>
              <a href="https://linkedin.com/in/ayushraj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] font-sub uppercase text-[10px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200">
                <Linkedin size={14} />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
