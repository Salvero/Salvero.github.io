"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Send, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================
// Validation Types & Helpers
// ============================================

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

/**
 * Validates email format using RFC 5322 standard regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates form fields and returns error object
 */
function validateForm(formState: FormState): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!formState.name.trim()) {
    errors.name = "Name is required";
  } else if (formState.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation
  if (!formState.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(formState.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Message validation
  if (!formState.message.trim()) {
    errors.message = "Message is required";
  } else if (formState.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

// ============================================
// BEM Class Names
// ============================================

const formClasses = {
  input: cn(
    "w-full px-4 py-3 rounded-lg",
    "bg-muted border border-border",
    "focus:border-primary focus:ring-2 focus:ring-primary/20",
    "transition-all duration-200",
    "placeholder:text-muted-foreground"
  ),
  inputError: cn(
    "w-full px-4 py-3 rounded-lg",
    "bg-muted border-2 border-red-500",
    "focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
    "transition-all duration-200",
    "placeholder:text-muted-foreground"
  ),
  errorMessage: cn(
    "flex items-center gap-1.5 mt-1.5",
    "text-sm text-red-500"
  ),
  label: "block text-sm font-medium mb-2",
  labelRequired: "text-red-500 ml-0.5",
};

// ============================================
// Contact Component
// ============================================

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Form state
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  /**
   * Handle field change
   */
  const handleChange = useCallback((field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  /**
   * Handle field blur - validate on blur
   */
  const handleBlur = useCallback((field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate single field
    const fieldErrors = validateForm(formState);
    if (fieldErrors[field]) {
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  }, [formState]);

  /**
   * Handle form submission with validation and error handling
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate all fields
    const validationErrors = validateForm(formState);
    setErrors(validationErrors);

    // If there are errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual form handler
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate for demo
          if (Math.random() > 0.1) {
            resolve(true);
          } else {
            reject(new Error("Network error"));
          }
        }, 1500);
      });

      // Success
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);

    } catch (error) {
      // Error handling with structured logging
      console.error(JSON.stringify({
        level: "error",
        message: "Contact form submission failed",
        timestamp: new Date().toISOString(),
        context: {
          error: error instanceof Error ? error.message : "Unknown error",
          formData: { name: formState.name, email: formState.email },
        },
      }));

      setSubmitStatus("error");
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitError(null);
      }, 5000);

    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Render error message with accessibility
   */
  const renderError = (field: keyof FormErrors) => {
    if (!errors[field] || !touched[field]) return null;

    return (
      <p
        id={`${field}-error`}
        role="alert"
        className={formClasses.errorMessage}
      >
        <AlertCircle size={14} />
        {errors[field]}
      </p>
    );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
          <h2
            id="contact-title"
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          >
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

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="gradient-border p-6 sm:p-8">
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6"
                noValidate
              >
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className={formClasses.label}>
                    Name<span className={formClasses.labelRequired}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-required="true"
                    aria-invalid={!!errors.name && touched.name}
                    aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                    className={errors.name && touched.name ? formClasses.inputError : formClasses.input}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {renderError("name")}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className={formClasses.label}>
                    Email<span className={formClasses.labelRequired}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-required="true"
                    aria-invalid={!!errors.email && touched.email}
                    aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                    className={errors.email && touched.email ? formClasses.inputError : formClasses.input}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {renderError("email")}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className={formClasses.label}>
                    Message<span className={formClasses.labelRequired}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    aria-required="true"
                    aria-invalid={!!errors.message && touched.message}
                    aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                    className={cn(
                      errors.message && touched.message ? formClasses.inputError : formClasses.input,
                      "resize-none"
                    )}
                    placeholder="Tell me about your project..."
                  />
                  {renderError("message")}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                    "bg-gradient-to-r from-primary to-secondary",
                    "text-white font-medium",
                    "hover:shadow-lg hover:shadow-primary/25",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-300"
                  )}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
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
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/30"
                    role="status"
                    aria-live="polite"
                  >
                    <p className="text-center text-green-500 text-sm font-medium">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/10 border border-red-500/30"
                    role="alert"
                    aria-live="assertive"
                  >
                    <p className="text-center text-red-500 text-sm font-medium">
                      ✗ {submitError}
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
