"use client"

import { motion } from "framer-motion"
import { Code2, Database, FileCode2, Terminal, Braces, Server, Globe, Cpu } from "lucide-react"

const technologies = [
  {
    name: "Java",
    icon: Code2,
    description: "Enterprise applications & Spring Boot",
    level: "Advanced",
  },
  {
    name: "Python",
    icon: Terminal,
    description: "Data processing & automation",
    level: "Basic",
  },
  {
    name: "JavaScript",
    icon: Braces,
    description: "React, Node.js & full-stack development",
    level: "Advanced",
  },
  {
    name: "SQL",
    icon: Database,
    description: " MySQL & database design",
    level: "Advanced",
  },
  
  {
    name: "React/Next.js",
    icon: Globe,
    description: "Modern frontend development",
    level: "Basic",
  },
  {
    name: "Node.js",
    icon: Server,
    description: "Backend services & REST APIs",
    level: "Intermediate",
  },
  {
    name: "AI/ML",
    icon: Cpu,
    description: "Machine learning integration",
    level: "Basic",
  },
   {
    name: "MongoDB",
    icon: Database,
    description: "NoSQL database design & management",
    level: "Basic",
  },
   {
    name: "Express.js",
    icon: Server,
    description: "Backend API development",
    level: "Intermediate",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-2">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Technologies I work with to build scalable, maintainable, and performant applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <tech.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tech.description}</p>
                  <span className="inline-block mt-2 text-xs font-mono text-primary/80">
                    {tech.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
