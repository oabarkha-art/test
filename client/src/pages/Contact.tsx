import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Contact Page
 * Design: Minimalist Art Gallery
 * - Contact form with name, email, and message
 * - Contact information display
 * - Back navigation to home
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Bitte geben Sie Ihren Namen ein");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Bitte geben Sie Ihre E-Mail-Adresse ein");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Bitte geben Sie eine Nachricht ein");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Bitte geben Sie eine gültige E-Mail-Adresse ein");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Vielen Dank! Ihre Nachricht wurde gesendet.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground">
                Svea Fritzenkötter
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Künstlerin & Illustratorin
              </p>
            </div>
            <nav className="flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Galerie
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Me
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          Zurück zur Galerie
        </Link>
      </div>

      {/* Contact Content */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Kontaktformular
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre.email@example.com"
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht..."
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-sm bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8">
              Kontaktinformationen
            </h2>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                  <a
                    href="mailto:abarkha@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abarkha@outlook.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                  <a
                    href="tel:+49123456789"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +49 (0) 123 456789
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Standort</h3>
                  <p className="text-muted-foreground">
                    Deutschland
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="divider-line"></div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Folgen Sie mir</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Svea Fritzenkötter. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:abarkha@outlook.com"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                E-Mail
              </a>
              <a
                href="#"
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
