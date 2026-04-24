"use client";

import { useState } from "react";
import { Terminal, Send } from "lucide-react";

export default function TerminalContact() {
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: "system", text: "CONNECTION ESTABLISHED." },
    { sender: "system", text: "Ready to receive transmission. Type your message and hit Enter." }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: inputVal }];
    
    // Simulate system response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: "system", 
        text: "TRANSMISSION RECEIVED. I will process your message and respond shortly." 
      }]);
    }, 600);

    setMessages(newMessages);
    setInputVal("");
  };

  return (
    <section id="contact" className="py-24 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connection</span>
      </h2>

      <div className="w-full rounded-lg overflow-hidden border border-white/20 bg-[#0A0A10] shadow-[0_0_30px_rgba(6,182,212,0.1)]">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs font-mono text-gray-400 flex items-center gap-2">
            <Terminal size={14} /> root@anurag:~
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm h-80 overflow-y-auto flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.sender === "system" ? "text-cyan-400" : "text-white"}>
              <span className="opacity-50 mr-2">{msg.sender === "system" ? "SYS>" : "USR>"}</span>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Terminal Input */}
        <form onSubmit={handleSubmit} className="flex p-4 border-t border-white/10 bg-white/5">
          <span className="text-cyan-400 font-mono mr-2 pt-2">C:\&gt;</span>
          <input 
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-white/20"
          />
          <button type="submit" className="text-cyan-400 hover:text-white transition-colors ml-4 pt-1">
            <Send size={18} />
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        Or reach me directly at <a href="mailto:contact@anurag.com" className="text-cyan-400 hover:underline">contact@anurag.com</a>
      </div>
    </section>
  );
}
