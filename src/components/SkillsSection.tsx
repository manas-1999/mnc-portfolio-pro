import { Code2, Database, Brain, Wrench, Cloud, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["Angular 16+", "TypeScript", "RxJS", "NgRx", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"],
    color: "from-primary to-primary/50"
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "RESTful APIs", "GraphQL", "WebSocket"],
    color: "from-accent to-accent/50"
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["Python", "TensorFlow", "scikit-learn", "pandas", "NumPy", "NLP", "Sentiment Analysis"],
    color: "from-primary to-accent"
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Jenkins", "CI/CD", "Postman", "VS Code", "npm/Webpack"],
    color: "from-accent to-primary"
  },
  {
    title: "APIs & Auth",
    icon: Cloud,
    skills: ["OAuth 2.0", "JWT", "Socket.io", "Mongoose", "Bcrypt", "Nodemailer"],
    color: "from-primary/80 to-accent/80"
  },
  {
    title: "Architecture",
    icon: GitBranch,
    skills: ["MVC", "Database Design", "Query Optimization", "Responsive Design", "Code Reviews"],
    color: "from-accent/80 to-primary/80"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group glass-card rounded-xl p-6 hover:glow-combined transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
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

export default SkillsSection;
