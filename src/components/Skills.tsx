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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <h3 className="font-sub text-[13px] uppercase tracking-[0.12em] text-primary mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
