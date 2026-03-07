import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import ayushPhoto from "@/assets/ayush-photo.jpg";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-semibold text-foreground leading-[1.1] mb-6"
            >
              Building products at the intersection of AI, data, and human behavior.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground font-body max-w-xl mb-10"
            >
              Final-year ME student at BITS Pilani. Previously at Unity Growth Fund and Grasim Industries.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button inline-flex items-center gap-2">
                <Download size={14} />
                Download Resume
              </a>
              <a href="mailto:ayush@example.com" className="cta-button inline-flex items-center gap-2">
                <Mail size={14} />
                Email
              </a>
              <a
                href="https://linkedin.com/in/ayushraj"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center gap-2"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="border border-border overflow-hidden max-w-[380px] w-full">
              <img
                src={ayushPhoto}
                alt="Ayush Raj"
                className="w-full h-auto object-cover aspect-[3/4]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
