import { Briefcase, Calendar, MapPin, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    title: "Software Developer (Full Stack)",
    company: "Netsmartz Infotech Pvt. Ltd.",
    location: "Chandigarh, India",
    period: "August 2023 – Present",
    current: true,
    highlights: [
      {
        icon: Zap,
        text: "Architected 3 production-grade applications serving 50,000+ users with MEAN Stack"
      },
      {
        icon: TrendingUp,
        text: "Developed AI-powered SaaS platforms handling 500+ business accounts with real-time dashboards"
      },
      {
        icon: Users,
        text: "Built healthcare platform reducing manual workload by 60% through AI automation"
      },
      {
        icon: TrendingUp,
        text: "Reduced page load time by 40% and API response time by 30% through optimization"
      }
    ]
  },
  {
    title: "Full Stack Development Intern",
    company: "Netsmartz Infotech Pvt. Ltd.",
    location: "Chandigarh, India",
    period: "March 2023 – August 2023",
    current: false,
    highlights: [
      {
        icon: Briefcase,
        text: "Completed 6-month intensive MEAN Stack development program"
      },
      {
        icon: Zap,
        text: "Developed responsive web applications under senior developer mentorship"
      },
      {
        icon: TrendingUp,
        text: "Built RESTful APIs and integrated frontend with backend services"
      }
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">Career Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            2.5+ years of building scalable solutions at enterprise level
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 w-3 h-3 -translate-x-1/2 rounded-full ${exp.current ? 'bg-primary glow-primary' : 'bg-accent'} ring-4 ring-background`} />

              <div className="glass-card rounded-xl p-6 md:p-8 hover:glow-combined transition-all duration-500">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{highlight.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
