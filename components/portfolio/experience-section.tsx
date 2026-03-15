"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Award, Calendar } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Gla University, Mathura",
    period: "2024 - 2027",
    description: "Specialized in Software Development with focus on Data Structures, Algorithms, Database Management, and Web Technologies. Graduated with distinction.",
    achievements: [
      "CGPA: 8.0/10",
      "AI and Ml competiton top -10 in university hackathon 2026",
      "Dean's List - All Semesters",
    ],
    icon: GraduationCap,
  },
 
  {
    type: "education",
    title: "Full-Stack Development Certification",
    organization: "freeCodeCamp",
    period: "2024- 2027",
    description: "Completed comprehensive certification covering responsive web design, JavaScript algorithms, front-end libraries, and APIs.",
    achievements: [
      "300+ hours of coursework",
      "Built 6 projects including a personal ",

      "Top contributor in forums",
    ],
    icon: Award,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-2">JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            My academic background and campus experiences that shaped my growth as a developer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.title}-${exp.period}`}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background md:left-1/2" />

              {/* Content card */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <exp.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
