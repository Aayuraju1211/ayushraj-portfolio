import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "Unity Growth Fund",
    role: "Product Management Intern",
    period: "June 2025 — Dec 2025",
    points: [
      "Spearheaded a local LLM chatbot (PRD + training datasets), cutting inbound support queries by 45%.",
      "Deployed \"Multi-Asset\" and \"VC Fund\" investment verticals, expanding SAM and unlocking new revenue streams.",
      "Launched an analytics dashboard tracking 15+ core metrics, reducing analysis time by 40%.",
      "Automated investor update workflows using n8n across 36 funds, reclaiming 2 weeks of quarterly IR bandwidth.",
    ],
  },
  {
    company: "Grasim Industries",
    role: "Summer Intern - Business Analysis",
    period: "May 2024 — July 2024",
    points: [
      "Processed and cleaned offline datasets containing daily operational logs, fixing missing or incorrect entries to ensure the data was accurate before it was handed off to the main reporting team.",
      "Utilized Matplotlib and Seaborn to generate static visual reports on 6 core metrics, assisting the dashboard team in building out their weekly trend charts.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="section-label">01 Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16">
            Where I've worked
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[240px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-12 ${i < experiences.length - 1 ? 'mb-12 md:mb-16' : ''}`}>
                  <div className="md:text-right">
                    <p className="font-sub text-[16px] uppercase tracking-[0.1em] text-muted-foreground font-medium whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>
                  <div className="md:pl-12 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full -translate-x-[calc(50%+0.5px)] hidden md:block" />
                    <h3 className="font-heading text-[20px] font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="font-sub text-[16px] text-[#1F935D] mb-4">{exp.role}</p>
                    <ul className="mt-4">
                      {exp.points.map((point, j) => (
                        <li key={j} className="text-foreground/80 text-[15px] leading-[1.7] mb-3 last:mb-0 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[12px] before:w-1.5 before:h-px before:bg-primary">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
