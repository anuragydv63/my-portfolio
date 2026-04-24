"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    color: "cyan",
    skills: ["Python", "HTML", "CSS", "SQL"],
  },
  {
    title: "AI/ML & Computer Vision",
    color: "purple",
    skills: ["RAG Architecture", "LangChain", "OpenCV", "MediaPipe", "GGUF Quantization", "Gemma 2", "Ollama", "ChromaDB", "Emotion Detection", "Object Detection"],
  },
  {
    title: "Data Science",
    color: "pink",
    skills: ["Data Cleaning", "EDA", "Feature Engineering", "ML Model Training", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Backend & Tools",
    color: "green",
    skills: ["FastAPI", "Flask", "Streamlit", "RESTful API", "SSE (Real-time Streaming)"],
  },
  {
    title: "Infrastructure",
    color: "orange",
    skills: ["Git", "GitHub", "Docker", "Linux/WSL", "Groq API", "Llama Models"],
  },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/40 text-cyan-300 bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
  purple: "border-purple-500/40 text-purple-300 bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  pink: "border-pink-500/40 text-pink-300 bg-pink-500/10 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
  green: "border-green-500/40 text-green-300 bg-green-500/10 hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
  orange: "border-orange-500/40 text-orange-300 bg-orange-500/10 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]",
};

const headingColorMap: Record<string, string> = {
  cyan: "text-cyan-400 border-cyan-500/30",
  purple: "text-purple-400 border-purple-500/30",
  pink: "text-pink-400 border-pink-500/30",
  green: "text-green-400 border-green-500/30",
  orange: "text-orange-400 border-orange-500/30",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Technical{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Skills
        </span>
      </h2>
      <p className="text-gray-500 text-center mb-16 font-mono text-sm">// my tech arsenal</p>

      <div className="flex flex-col gap-10">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.1, duration: 0.5 }}
          >
            <h3 className={`text-sm font-mono font-bold mb-4 pb-2 border-b ${headingColorMap[category.color]}`}>
              &gt; {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 cursor-default ${colorMap[category.color]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
