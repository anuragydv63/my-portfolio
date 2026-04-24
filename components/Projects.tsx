"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Shield, Database, Hand, Bot, Briefcase } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Local-First AI Agent (Hybrid RAG)",
    period: "2025 – Present",
    icon: <Brain size={22} />,
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-500/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    description:
      "Co-developed and deployed Gemma 2 (2B) with 4-bit GGUF quantization, achieving TTFT <0.9s and 40+ tokens/sec on 4GB VRAM. Engineered fault-tolerant agentic workflow via LangChain with ChromaDB vector search and live web scraping.",
    tech: ["FastAPI", "LangChain", "Ollama", "ChromaDB", "GGUF", "SSE"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Emotion Detection with TTS Feedback",
    period: "Jul – Oct 2025",
    icon: <Shield size={22} />,
    iconColor: "text-cyan-400",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    description:
      "Real-time emotion recognition pipeline using Mediapipe facial landmarks and OpenCV. Integrated gTTS multimodal feedback system generating dynamic voice responses. Deployed as Flask web interface for smart classrooms.",
    tech: ["Python", "MediaPipe", "OpenCV", "Flask", "gTTS"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "College ERP System",
    period: "2025 – Present",
    icon: <Database size={22} />,
    iconColor: "text-green-400",
    borderColor: "hover:border-green-500/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    description:
      "Web-based ERP for college administration covering student records, attendance, and course management. Normalized SQL schema with role-based access control. RESTful Flask backend with modular architecture.",
    tech: ["Python", "Flask", "SQL", "RESTful API", "RBAC"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Virtual Hand Mouse",
    period: "2024",
    icon: <Hand size={22} />,
    iconColor: "text-orange-400",
    borderColor: "hover:border-orange-500/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    description:
      "Control your computer mouse entirely using hand gestures captured via webcam. Features smooth tracking, click detection, drag, and scroll — all without touching any hardware.",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "AI Career Buddy",
    period: "2025",
    icon: <Briefcase size={22} />,
    iconColor: "text-yellow-400",
    borderColor: "hover:border-yellow-500/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    description:
      "Flask-based application that guides users with AI-powered career suggestions, resume matching, and personalized roadmaps. Integrates Gemini API for intelligent responses and career path recommendations.",
    tech: ["Python", "Flask", "Gemini API", "SQL"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "WhatsApp Automation Bot",
    period: "2025",
    icon: <Bot size={22} />,
    iconColor: "text-pink-400",
    borderColor: "hover:border-pink-500/50",
    glowColor: "hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    description:
      "Fully functional AI-powered WhatsApp bot using Gemini AI that intelligently parses messages and automatically replies with context-aware responses. Handles rate-limiting and quota management.",
    tech: ["Node.js", "whatsapp-web.js", "Gemini API", "JavaScript"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Projects
        </span>
      </h2>
      <p className="text-gray-500 text-center mb-16 font-mono text-sm">// things i&apos;ve built</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 ${project.borderColor} transition-all duration-300 ${project.glowColor} flex flex-col h-full`}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <span className={`${project.iconColor} p-2 rounded-lg bg-white/5`}>
                {project.icon}
              </span>
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                {project.period}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
