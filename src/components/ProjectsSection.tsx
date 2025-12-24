import { ExternalLink, Bot, Building2, Stethoscope, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Voice Agent Platform",
    description: "End-to-end SaaS platform with AI-powered voice agents handling 500+ business accounts. Features real-time monitoring dashboards supporting 100+ concurrent agents using Angular and WebSocket.",
    icon: Bot,
    tags: ["Angular", "Node.js", "MongoDB", "WebSocket", "AI/ML"],
    metrics: ["500+ Accounts", "100+ Concurrent Agents", "Real-time Dashboard"],
    gradient: "from-primary to-primary/50"
  },
  {
    title: "Visual Workflow Builder",
    description: "Full-stack AI agent automation platform with drag-and-drop functionality for creating node-based hierarchical task structures with conditional logic supporting AND/OR operators.",
    icon: Workflow,
    tags: ["Angular", "Express.js", "MongoDB", "Drag & Drop"],
    metrics: ["Visual Node Builder", "Conditional Logic", "Task Automation"],
    gradient: "from-accent to-accent/50"
  },
  {
    title: "Healthcare Automation Platform",
    description: "Comprehensive platform automating patient follow-ups and medical report generation with role-based access control (RBAC) using JWT authentication.",
    icon: Stethoscope,
    tags: ["MEAN Stack", "AI Voice Agents", "JWT", "RBAC"],
    metrics: ["60% Workload Reduction", "Automated Follow-ups", "Report Generation"],
    gradient: "from-primary to-accent"
  },
  {
    title: "Enterprise SaaS Applications",
    description: "Architected 3 production-grade full-stack applications with MongoDB database design, Node.js backend APIs, subscription management, and calendar-based scheduling with cron jobs.",
    icon: Building2,
    tags: ["MEAN Stack", "Cron Jobs", "Subscriptions", "Scalable Architecture"],
    metrics: ["50,000+ Users", "99.5% Uptime", "15+ API Integrations"],
    gradient: "from-accent to-primary"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade applications solving real business problems
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card rounded-xl p-6 md:p-8 hover:glow-combined transition-all duration-500"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-secondary/50 text-muted-foreground border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
