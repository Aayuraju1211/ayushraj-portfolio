import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "PM Skills",
    skills: ["PRD Creation", "Wireframing", "Prototyping", "A/B Testing", "Root Cause Analysis", "Product Roadmap", "Prioritization", "User Research"],
  },
  {
    title: "Technical Skills",
    skills: ["C++", "Python", "SQL", "API Integration", "REST API", "System Architecture", "Automation"],
  },
  {
    title: "Data & Analytics",
    skills: ["Cohort Analysis", "Funnel Analysis", "KPI & Metrics Definition", "Data Visualization", "User Segmentation"],
  },
  {
    title: "Tools",
    skills: ["Figma", "MySQL", "Mixpanel", "Google Analytics", "Advanced Excel", "Notion", "n8n", "Power BI"],
  },
];

const MarqueeRow = ({ title, skills, reverse = false }: { title: string; skills: string[]; reverse?: boolean }) => {
  // Duplicate skills enough times for seamless loop
  const repeated = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="flex items-center gap-8 overflow-hidden">
      <div className="shrink-0 w-[160px] md:w-[200px]">
        <h3 className="font-sub text-[13px] uppercase tracking-[0.12em] text-primary">
          {title}
        </h3>
      </div>
      <div className="overflow-hidden flex-1 marquee-mask">
        <div className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
          {repeated.map((skill, i) => (
            <span key={`${skill}-${i}`} className="skill-pill whitespace-nowrap">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="section-label">03 Skills</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16">
            What I work with
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <MarqueeRow title={cat.title} skills={cat.skills} reverse={i % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
