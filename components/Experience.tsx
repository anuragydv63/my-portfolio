"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
  type: string;
  iconName: string;
  color: string;
  period: string;
  org: string;
  title: string;
  points: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: "internship",
    iconName: "briefcase",
    color: "cyan",
    period: "Jun – Jul 2025",
    org: "NIELIT | Ropar, Punjab",
    title: "Data Science Training Intern",
    points: [
      "Performed data cleaning, EDA, and ML model training using Pandas, NumPy, and Matplotlib on real-world datasets.",
      "Built Emotion Detection with TTS Feedback and Face Mask Detection using Python, OpenCV, and Flask.",
      "Deployed end-to-end projects with Flask web interfaces and managed version control via GitHub.",
    ],
  },
  {
    type: "education",
    iconName: "graduation",
    color: "purple",
    period: "2023 – 2027",
    org: "Himalayan Group of Professional Institution, Kala Amb (HPTU)",
    title: "B.Tech – Computer Science & Engineering",
    points: [
      "Pursuing Bachelor's degree in CSE with focus on AI, Machine Learning, and Full-Stack Development.",
      "Actively building real-world projects in Computer Vision, NLP, and Agentic AI Systems.",
      "Completed NIELIT internship in Data Science during 2nd year.",
    ],
  },
];

const colorMap: Record<string, { dot: string; badge: string; border: string; heading: string }> = {
  cyan: {
    dot: "bg-cyan-400 shadow-[0_0_15px_#06b6d4]",
    badge: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    border: "hover:border-cyan-500/50",
    heading: "text-cyan-300",
  },
  purple: {
    dot: "bg-purple-400 shadow-[0_0_15px_#a855f7]",
    badge: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    border: "hover:border-purple-500/50",
    heading: "text-purple-300",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-4xl mx-auto px-6 relative">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Experience &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">
          Education
        </span>
      </h2>
      <p className="text-gray-500 text-center mb-16 font-mono text-sm">// my journey so far</p>

      <div className="relative">
        {/* Center timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent -translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {timelineData.map((item, index) => {
            const c = colorMap[item.color];
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full ${c.dot} z-10`} />

                {/* Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[46%] p-6 rounded-2xl bg-white/5 border border-white/10 ${c.border} transition-colors ${
                    isLeft ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Period + Type */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold rounded-full border ${c.badge}`}>
                      {item.iconName === "briefcase"
                        ? <Briefcase size={12} />
                        : <GraduationCap size={12} />
                      }
                      {item.type === "internship" ? "INTERNSHIP" : "EDUCATION"}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{item.period}</span>
                  </div>

                  <h3 className={`text-lg font-bold mb-1 ${c.heading}`}>{item.title}</h3>
                  <p className="text-xs text-gray-500 mb-4 font-mono">{item.org}</p>

                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2 leading-relaxed">
                        <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
