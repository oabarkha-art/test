import { Link } from "wouter";
import { Mail } from "lucide-react";
import { useState } from "react";

/**
 * Home Page - Portfolio Gallery
 * Design: Minimalist Art Gallery
 * - Elegant navigation with About & Contact links
 * - Masonry gallery layout showcasing artworks
 * - Each artwork has title and description
 * - Subtle hover effects on images
 */

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  year: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Fließende Formen",
    description: "Eine abstrakte Komposition mit fließenden Formen in warmen Erdtönen. Die Schichten schaffen Tiefe und Bewegung.",
    image: "/images/hero-abstract-art.png",
    year: "2024"
  },
  {
    id: 2,
    title: "Stille Natur",
    description: "Eine zarte Illustration der Natur mit Wasserfarben. Botanische Elemente in sanften, gedämpften Farben.",
    image: "/images/illustration-nature.png",
    year: "2024"
  },
  {
    id: 3,
    title: "Goldene Stunde",
    description: "Eine expressive Landschaftsmalerei mit Sonnenuntergang. Moderne Impressionist-Technik mit sichtbaren Pinselstrichen.",
    image: "/images/painting-landscape.png",
    year: "2023"
  },
  {
    id: 4,
    title: "Porträt",
    description: "Eine künstlerische Porträt-Illustration mit warmen, gedämpften Tönen. Elegante und ausdrucksstarke Linienführung.",
    image: "/images/illustration-portrait.png",
    year: "2023"
  }
];

export default function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Me
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Gemälde & Illustrationen
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Willkommen in meinem Portfolio. Hier zeige ich eine Auswahl meiner Kunstwerke – von abstrakten Gemälden bis zu feinen Illustrationen. Jedes Werk erzählt eine Geschichte.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider-line"></div>
      </div>

      {/* Gallery Section */}
      <section className="container">
        <div className="gallery-grid">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="artwork-card"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Artwork Image */}
              <div className="overflow-hidden rounded-sm bg-muted">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className={`artwork-image artwork-hover ${
                    hoveredId === artwork.id ? "scale-105" : ""
                  }`}
                />
              </div>

              {/* Artwork Info */}
              <div className="artwork-info">
                <div>
                  <h3 className="artwork-title">{artwork.title}</h3>
                  <p className="text-xs text-muted-foreground">{artwork.year}</p>
                </div>
                <p className="artwork-description">
                  {artwork.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="divider-line mb-8"></div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interessiert?
          </h2>
          <p className="text-muted-foreground mb-8">
            Kontaktieren Sie mich für Anfragen zu Kunstwerken, Commissions oder Zusammenarbeit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            <Mail size={18} />
            Nachricht senden
          </Link>
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
                href="mailto:svea@example.com"
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
