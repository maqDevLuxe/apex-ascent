import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Compass, Crown, Flame } from "lucide-react";

const programs = [
  {
    icon: <Crown size={32} />,
    title: "CEO Ascension",
    duration: "12 months",
    desc: "For senior executives preparing for the CEO role. Intensive strategic leadership development, board readiness, and enterprise-wide vision crafting.",
    features: ["Weekly 1:1 sessions", "Board simulation exercises", "360° leadership assessment", "Executive presence coaching"],
  },
  {
    icon: <Target size={32} />,
    title: "C-Suite Catalyst",
    duration: "6 months",
    desc: "Accelerated coaching for newly appointed C-Suite executives navigating the critical first 180 days.",
    features: ["Bi-weekly strategy sessions", "Stakeholder mapping", "Quick-win identification", "Transition blueprint"],
  },
  {
    icon: <Compass size={32} />,
    title: "Legacy Architecture",
    duration: "18 months",
    desc: "For established CEOs focused on building enduring organizational legacy and succession planning.",
    features: ["Monthly deep-dive sessions", "Succession framework", "Cultural architecture", "Philanthropic strategy"],
  },
  {
    icon: <Flame size={32} />,
    title: "Founder to CEO",
    duration: "9 months",
    desc: "Specialized program for founders transitioning from entrepreneurial leadership to scalable executive management.",
    features: ["Weekly coaching calls", "Organizational design", "Investor relations prep", "Scaling mindset work"],
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-navy-gradient text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedText>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Programs</p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Tailored <span className="italic text-gradient-gold">Pathways</span> to
              <br />Executive Excellence
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-primary-foreground/70 max-w-xl leading-relaxed">
              Each program is meticulously designed for a specific leadership inflection point. 
              Every engagement is bespoke, confidential, and results-driven.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-card border border-border hover:border-gold/30 transition-all duration-500 p-10 h-full group">
                  <div className="text-gold mb-6">{p.icon}</div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                    <span className="font-body text-xs tracking-widest uppercase text-gold border border-gold/30 px-3 py-1">{p.duration}</span>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="font-body text-sm text-foreground/80 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-gradient text-center">
        <AnimatedText>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">Not sure which program fits?</h2>
        </AnimatedText>
        <AnimatedSection delay={0.1}>
          <Link to="/booking">
            <MagneticButton className="px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:bg-navy-light transition-colors">
              Schedule a Discovery Call <ArrowRight className="inline ml-2" size={16} />
            </MagneticButton>
          </Link>
        </AnimatedSection>
      </section>
      <Footer />
    </div>
  );
};

export default Programs;
