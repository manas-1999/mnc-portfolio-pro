import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Maharaja Ranjit Singh Punjab Technical University",
    location: "Bathinda, India",
    period: "2020 – 2023",
    icon: GraduationCap
  },
  {
    degree: "Diploma",
    field: "Computer Science & Engineering",
    institution: "Sant Longowal Institute of Engineering & Technology (SLIET)",
    location: "Longowal, India",
    period: "2017 – 2019",
    icon: BookOpen
  }
];

const certifications = [
  "Agentic AI Training – 3-day intensive workshop on AI agents and automation (2024)",
  "Prompt Engineering Workshop – Advanced prompt engineering techniques (2024)",
  "Data Structures & Algorithms – 2-month comprehensive DSA program (2023)",
  "Full Stack Development Internship – 6-month MEAN Stack specialization (2023)"
];

const achievements = [
  {
    title: "Extra Miler Award",
    description: "Received at Netsmartz for consistently exceeding performance expectations and delivering high-quality work",
    icon: Trophy
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-6 hover:glow-combined transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <edu.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location} • {edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="glass-card rounded-xl p-6">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" />
                Recognition
              </h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card rounded-xl p-6 border-l-4 border-primary glow-primary">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
