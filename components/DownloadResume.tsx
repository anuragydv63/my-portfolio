"use client";

import { FileDown, Loader2 } from "lucide-react";
import { useState } from "react";

export default function DownloadResume() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    // Open a new print-ready window with styled resume content
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) {
      setLoading(false);
      alert("Please allow popups to download the resume.");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Anurag Yadav - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            color: #1a1a2e;
            background: #fff;
            padding: 36px 48px;
            font-size: 13px;
            line-height: 1.6;
          }
          h1 {
            font-size: 28px;
            font-weight: 700;
            text-align: center;
            color: #1a1a2e;
            letter-spacing: 1px;
          }
          .contact-info {
            text-align: center;
            margin: 6px 0 20px;
            font-size: 12px;
            color: #555;
          }
          .contact-info a { color: #0891b2; text-decoration: none; }
          .section-title {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: #0891b2;
            border-bottom: 1.5px solid #0891b2;
            padding-bottom: 4px;
            margin: 20px 0 10px;
          }
          .entry-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 2px;
          }
          .entry-title { font-weight: 700; color: #1a1a2e; font-size: 13.5px; }
          .entry-org { font-size: 12px; color: #444; }
          .entry-period { font-size: 11px; color: #888; white-space: nowrap; margin-left: 10px; }
          ul { margin: 6px 0 12px 18px; }
          li { margin-bottom: 3px; color: #333; font-size: 12.5px; }
          .skills-section { margin-bottom: 6px; }
          .skills-label { font-weight: 700; color: #1a1a2e; display: inline; }
          .skills-text { color: #333; display: inline; }
          .tech-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px; }
          .tag {
            background: #e0f2fe;
            color: #0369a1;
            border: 1px solid #bae6fd;
            border-radius: 99px;
            padding: 2px 10px;
            font-size: 11px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <h1>ANURAG YADAV</h1>
        <div class="contact-info">
          +91-9536010156 &nbsp;|&nbsp;
          <a href="mailto:anurayadav807780@gmail.com">anurayadav807780@gmail.com</a>
          &nbsp;|&nbsp;
          <a href="https://linkedin.com">LinkedIn</a>
          &nbsp;|&nbsp;
          <a href="https://github.com">GitHub</a>
        </div>

        <!-- EDUCATION -->
        <div class="section-title">Education</div>
        <div class="entry-header">
          <div>
            <div class="entry-title">Himalayan Group of Professional Institution, Kala Amb (HPTU)</div>
            <div class="entry-org">B.Tech – Computer Science &amp; Engineering (CSE)</div>
          </div>
          <div class="entry-period">2023 – 2027</div>
        </div>

        <!-- TRAINING & INTERNSHIP -->
        <div class="section-title">Training &amp; Internship</div>
        <div class="entry-header">
          <div>
            <div class="entry-title">National Institute of Electronics and Information Technology (NIELIT) | Ropar, Punjab</div>
            <div class="entry-org">Data Science Training</div>
          </div>
          <div class="entry-period">Jun – Jul 2025</div>
        </div>
        <ul>
          <li>Performed data cleaning, EDA, and ML model training using Pandas, NumPy, and Matplotlib on real-world datasets.</li>
          <li>Built Emotion Detection with TTS Feedback and Face Mask Detection using Python, OpenCV, and Flask.</li>
          <li>Deployed end-to-end projects with Flask web interfaces and managed version control via GitHub.</li>
        </ul>

        <!-- PROJECTS -->
        <div class="section-title">Projects</div>

        <div class="entry-header">
          <div class="entry-title">Local-First AI Agent (Hybrid RAG) | FastAPI, LangChain, Ollama, ChromaDB</div>
          <div class="entry-period">2025 – Present</div>
        </div>
        <ul>
          <li>Co-developed and deployed Gemma 2 (2B) with 4-bit GGUF quantization, achieving TTFT &lt;0.9s and 40+ tokens/sec on 4GB VRAM hardware constraint.</li>
          <li>Collaborated on engineering a fault-tolerant agentic workflow via LangChain tool-calling with ChromaDB vector search and live web scraping for real-time grounding.</li>
          <li>Contributed to architecting non-blocking FastAPI endpoints with SSE for real-time streaming and GPU-RAM resource isolation ensuring strict data sovereignty.</li>
        </ul>

        <div class="entry-header">
          <div class="entry-title">Emotion Detection with TTS Feedback | Python, MediaPipe, OpenCV, Flask, gTTS</div>
          <div class="entry-period">Jul – Oct 2025</div>
        </div>
        <ul>
          <li>Built real-time emotion recognition pipeline using Mediapipe facial landmarks and OpenCV processing live webcam feed.</li>
          <li>Integrated gTTS-based multimodal feedback system generating dynamic voice responses based on detected emotions.</li>
          <li>Deployed Flask web interface with real-time visualization; designed for smart classroom and assistive interaction use cases.</li>
        </ul>

        <div class="entry-header">
          <div class="entry-title">College ERP System | Python, Flask, SQL</div>
          <div class="entry-period">2025 – Present</div>
        </div>
        <ul>
          <li>Developing a web-based ERP system for college administration covering student records, attendance, and course management.</li>
          <li>Designing normalized SQL schema with role-based access control for admin, faculty, and student portals.</li>
          <li>Building RESTful backend using Flask with modular architecture for scalability and maintainability.</li>
        </ul>

        <!-- TECHNICAL SKILLS -->
        <div class="section-title">Technical Skills</div>
        <div class="skills-section">
          <span class="skills-label">Languages: </span>
          <span class="skills-text">Python, HTML, CSS, SQL</span>
        </div>
        <div class="skills-section">
          <span class="skills-label">AI/ML &amp; Computer Vision: </span>
          <span class="skills-text">RAG Architecture, Local Inference (Gemma 2 2B), 4-bit Quantization (GGUF), LangChain, OpenCV, Mediapipe, Emotion Detection, Object Detection</span>
        </div>
        <div class="skills-section">
          <span class="skills-label">Data Science: </span>
          <span class="skills-text">Data Cleaning, EDA, Feature Engineering, ML Model Training, NumPy, Pandas, Matplotlib</span>
        </div>
        <div class="skills-section">
          <span class="skills-label">Backend &amp; Tools: </span>
          <span class="skills-text">FastAPI, Flask, Streamlit, RESTful API Design, Real-time Streaming (SSE), ChromaDB</span>
        </div>
        <div class="skills-section">
          <span class="skills-label">Infrastructure: </span>
          <span class="skills-text">Git, GitHub, Docker, Linux/WSL, Groq API, Llama Models</span>
        </div>

        <script>
          window.onload = function() {
            window.print();
            window.onafterprint = function() { window.close(); };
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
    setLoading(false);
  };

  return (
    <button
      id="download-resume-btn"
      onClick={handleDownload}
      disabled={loading}
      className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden
        bg-gradient-to-r from-cyan-500 via-cyan-400 to-purple-500 text-white
        shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]
        hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {loading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <FileDown size={18} className="group-hover:animate-bounce" />
      )}
      {loading ? "Generating..." : "Download Resume"}
    </button>
  );
}
