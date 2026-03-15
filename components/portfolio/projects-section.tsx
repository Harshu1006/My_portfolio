"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, ShoppingCart, BarChart3, MessageSquare, Shield, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Image Search Web App",
    description: "AI-powered image search application that allows users to find relevant images based on natural language queries, utilizing deep learning models for accurate results.",
    icon: Cpu,
    tags: ["html", "css", "javascript", "FastAPI"],
    featured: true,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
    icon: ShoppingCart,
    tags: ["React", "Node.js", "express", "MongoDB  "],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard with customizable widgets, automated reporting, and team collaboration features.",
    icon: BarChart3,
    tags: ["React", "D3.js", "Python", "Redis"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable messaging platform with end-to-end encryption, file sharing, and video conferencing capabilities.",
    icon: MessageSquare,
    tags: ["TypeScript", "WebSocket", "MongoDB", "WebRTC"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Authentication Service",
    description: "Secure OAuth 2.0 authentication service with multi-factor authentication, SSO integration, and audit logging.",
    icon: Shield,
    tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with Kanban boards, time tracking, and automated workflow capabilities.",
    icon: Sparkles,
    tags: ["React", "GraphQL", "Node.js", "MySQL"],
    featured: false,
    liveUrl: "#",
    githubUrl: "#",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-wider mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A selection of projects that showcase my skills in full-stack development, 
            system design, and problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              className={`group relative flex flex-col p-6 rounded-xl bg-card border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                project.featured 
                  ? "border-primary/50 md:col-span-2 lg:col-span-1" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {project.featured && (
                <div className="absolute -top-3 left-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <project.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-foreground pt-2">{project.title}</h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button size="sm" variant="outline" className="gap-2 flex-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
