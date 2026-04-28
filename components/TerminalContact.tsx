"use client";

import { useState } from "react";
import { Terminal, Send } from "lucide-react";

export default function TerminalContact() {
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([
    { sender: "system", text: "CONNECTION ESTABLISHED." },
    { sender: "system", text: "Please enter your name to begin:" }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<"NAME" | "EMAIL" | "MESSAGE">("NAME");
  const [userData, setUserData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isSubmitting) return;

    const userInput = inputVal.trim();
    // Add user message
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setInputVal("");

    if (step === "NAME") {
      setUserData(prev => ({ ...prev, name: userInput }));
      setStep("EMAIL");
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "system", text: `Welcome, ${userInput}. Please enter your email address:` }]);
      }, 300);
      return;
    }

    if (step === "EMAIL") {
      // Basic email validation
      if (!userInput.includes('@') || !userInput.includes('.')) {
        setTimeout(() => {
          setMessages(prev => [...prev, { sender: "system", text: "INVALID FORMAT. Please enter a valid email address:" }]);
        }, 300);
        return;
      }
      setUserData(prev => ({ ...prev, email: userInput }));
      setStep("MESSAGE");
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "system", text: "Identity verified. Type your message and hit Enter to transmit." }]);
      }, 300);
      return;
    }

    setIsSubmitting(true);

    setMessages(prev => [...prev, { 
      sender: "system", 
      text: "TRANSMITTING TO ANURAG..." 
    }]);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: userData.name,
          email: userData.email,
          message: userInput,
          subject: `New Message from ${userData.name} (Terminal Portfolio)`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setMessages(prev => [...prev, { 
          sender: "system", 
          text: "TRANSMISSION SUCCESSFUL. Anurag has received your message." 
        }]);
        // Reset form for new message
        setStep("NAME");
        setUserData({ name: "", email: "" });
      } else {
        setMessages(prev => [...prev, { 
          sender: "system", 
          text: "TRANSMISSION FAILED. Please check the API key or try the direct email below." 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        sender: "system", 
        text: "TRANSMISSION ERROR. Network failure." 
      }]);
    } finally {
      setIsSubmitting(false);
    }
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
            type={step === "EMAIL" ? "email" : "text"} 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={step === "NAME" ? "Type your name..." : step === "EMAIL" ? "Type your email..." : "Type your message..."}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-white/20 min-w-0"
            disabled={isSubmitting}
          />
          <button type="submit" className="text-cyan-400 hover:text-white transition-colors ml-4 pt-1">
            <Send size={18} />
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        Or reach me directly at <a href="mailto:anurayadav807780@gmail.com" className="text-cyan-400 hover:underline">anurayadav807780@gmail.com</a>
      </div>
    </section>
  );
}
