
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TerminalContact from "@/components/TerminalContact";
import DownloadResume from "@/components/DownloadResume";
import { Terminal, Github, Linkedin, Mail, Phone } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden selection:bg-cyan-500/30">
      <ParticlesBackground />
      {/* Background glowing effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 flex flex-col sm:flex-row justify-between items-center backdrop-blur-sm border-b border-white/5 gap-3 sm:gap-0">
        <div className="font-mono text-cyan-400 font-bold text-lg md:text-xl flex items-center gap-2">
          <Terminal size={24} /> ANURAG.SYS
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="about" className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-4xl mx-auto px-6 pt-20 text-center">

        {/* Hero Content */}
        <div className="flex flex-col items-center gap-6 relative z-20">
          <div className="inline-flex px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse inline-block" />
            SYSTEM ONLINE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Anurag</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            AI Enthusiast & Developer building intelligent systems — from{" "}
            <span className="text-cyan-400 font-medium">Local RAG Agents</span> and{" "}
            <span className="text-purple-400 font-medium">Computer Vision</span> pipelines to full-stack web applications.
            B.Tech CSE @ HPTU | NIELIT Data Science Intern.
          </p>

          {/* Skills quick badges */}
          <div className="flex flex-wrap gap-2">
            {["Python", "LangChain", "FastAPI", "OpenCV", "Flask", "ChromaDB"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 font-mono">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap gap-4 items-center justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              View Projects
            </a>
            {/* PDF Download Button */}
            <DownloadResume />
          </div>

          {/* Contact quick links */}
          <div className="flex flex-col items-center gap-3 mt-4 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5 text-sm text-gray-500 font-mono">
              <a href="mailto:anurayadav807780@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-center sm:text-left">
                <Mail size={16} /> <span className="break-all">anurayadav807780@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-gray-700">|</span>
              <a href="tel:+919536010156" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone size={16} /> +91-9536010156
              </a>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 text-sm text-gray-500 font-mono mt-1">
              <a href="https://github.com/anuragydv63" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Github size={16} /> GitHub
              </a>
              <span className="text-gray-700">|</span>
              <a href="https://www.linkedin.com/in/anuragydv63/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Skills */}
      <Skills />

      <div className="w-full max-w-4xl mx-auto h-px bg-white/5 my-8" />

      {/* Experience & Education */}
      <Experience />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />

      {/* Projects */}
      <Projects />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />

      {/* Contact */}
      <TerminalContact />

      <footer className="text-center py-8 pb-12 text-gray-500 text-sm border-t border-white/5">
        <p>© 2026 Anurag Yadav. All systems functional.</p>
      </footer>
    </div>
  );
}
