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
                  Systems thinker. Product builder.
                </h1>
                <p className="text-base md:text-[17px] text-foreground/50 font-body leading-[1.8] max-w-2xl">
                  Final-year student at BITS Pilani. Spent 6 months at{" "}
                  <span className="text-primary">Unity Growth Fund</span>{" "}
                  owning product features end-to-end, from user research and wireframing to high-fidelity prototypes. Previously at{" "}
                  <span className="text-primary">Grasim Industries</span>.
                  {" "}I think in systems, build with data, and care about why users do what they do.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href="/Ayush_Raj_Resume.pdf"
                  download="Ayush_Raj_Resume.pdf"
                  className="flex items-center gap-2.5 px-6 py-3 border-2 border-primary bg-transparent rounded-[8px] font-sub uppercase text-[11px] tracking-[0.14em] font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Right Column - Photo Card */}
            <motion.div className="flex items-center justify-center pt-[100px] -ml-6" variants={fadeUp}>
              <div className="border border-border rounded-[16px] overflow-hidden bg-card/40 backdrop-blur-sm w-[315px]">
                <div className="h-[350px] overflow-hidden">
                  <img
                    src={ayushPhoto}
                    alt="Ayush Raj"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col items-center py-5 px-4 gap-2.5">
                  <h2 className="text-lg font-heading font-semibold text-foreground">
                    Ayush Raj
                  </h2>
                  <p className="text-sm text-primary font-body">
                    BITS Pilani '26
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-1">
                    <a
                      href="https://www.linkedin.com/in/ayush-raj-589080286"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 border border-border rounded-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="mailto:f20220851@goa.bits-pilani.ac.in"
                      className="p-2.5 border border-border rounded-[8px] text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
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
                Systems thinker. Product builder.
              </h1>
              <p className="text-base text-foreground/50 font-body leading-[1.8]">
                Final-year student at BITS Pilani. Spent 6 months at{" "}
                <span className="text-primary">Unity Growth Fund</span>{" "}
                owning product features end-to-end, from user research and wireframing to high-fidelity prototypes. Previously at{" "}
                <span className="text-primary">Grasim Industries</span>.
                {" "}I think in systems, build with data, and care about why users do what they do.
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
              <a href="/Ayush_Raj_Resume.pdf" download="Ayush_Raj_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 border-2 border-primary bg-transparent rounded-[8px] font-sub uppercase text-[10px] tracking-[0.14em] font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                <Download size={14} />
                Resume
              </a>
              <a href="mailto:f20220851@goa.bits-pilani.ac.in" className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] font-sub uppercase text-[10px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200">
                <Mail size={14} />
                Email
              </a>
              <a href="https://www.linkedin.com/in/ayush-raj-589080286" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-[8px] font-sub uppercase text-[10px] tracking-[0.14em] font-medium text-foreground hover:border-primary hover:text-primary transition-colors duration-200">
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
