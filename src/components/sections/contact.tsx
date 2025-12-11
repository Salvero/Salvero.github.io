"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormState({ name: "", email: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's{" "}
            <span className="gradient-text">Connect</span>
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? I'd love to hear from you.
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="gradient-border p-6">
              <div className="relative z-10 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">{siteConfig.location}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-4">Connect with me</h3>
                  <div className="flex gap-3">
                    {socialIcons.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={cn(
                          "p-3 rounded-full",
                          "bg-muted hover:bg-primary/10",
                          "text-muted-foreground hover:text-primary",
                          "border border-border hover:border-primary/50",
                          "transition-all duration-300"
                        )}
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="gradient-border p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-muted border border-border",
                      "focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "transition-all duration-200",
                      "placeholder:text-muted-foreground"
                    )}
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg",
                      "bg-muted border border-border",
                      "focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "transition-all duration-200",
                      "placeholder:text-muted-foreground"
                    )}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg resize-none",
                      "bg-muted border border-border",
                      "focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "transition-all duration-200",
                      "placeholder:text-muted-foreground"
                    )}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                    "bg-gradient-to-r from-primary to-secondary",
                    "text-white font-medium",
                    "hover:shadow-lg hover:shadow-primary/25",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-300"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status message */}
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-500 text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-500 text-sm"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
