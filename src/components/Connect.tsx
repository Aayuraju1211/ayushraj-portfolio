import { useState } from "react";
import { Mail, Linkedin, Send, Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const Connect = () => {
  const [form, setForm] = useState({ contact: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Placeholder webhook URL — replace with actual Apps Script URL
    try {
      // await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", { method: "POST", body: JSON.stringify(form) });
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ contact: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
    setSending(false);
  };

  return (
    <section id="connect" className="py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <ScrollReveal>
          <p className="section-label">04 Connect</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16">
            Let's talk
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal delay={0.1}>
            <div className="border border-border p-8 h-full flex flex-col justify-center">
              <p className="font-heading text-xl font-medium text-foreground mb-2">
                Open to Product roles.
              </p>
              <p className="text-muted-foreground mb-8">
                Internships, full-time, and consulting.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button inline-flex items-center gap-2"
                >
                  <Download size={14} /> Download Resume
                </a>
                <a
                  href="mailto:ayush@example.com"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-sub text-sm"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href="https://linkedin.com/in/ayushraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-sub text-sm"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-sub text-[12px] uppercase tracking-[0.1em] text-muted-foreground block mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="font-sub text-[12px] uppercase tracking-[0.1em] text-muted-foreground block mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="cta-button inline-flex items-center gap-2"
              >
                <Send size={14} />
                {sending ? "Sending..." : "Submit"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Connect;
