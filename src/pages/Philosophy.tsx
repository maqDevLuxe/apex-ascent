import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";

const principles = [
  { title: "Radical Candor, Absolute Confidentiality", desc: "True transformation requires uncomfortable honesty. Our sessions are a sacred space where vulnerability meets accountability." },
  { title: "Evidence Over Intuition", desc: "We ground every coaching intervention in behavioral science, psychometric data, and longitudinal research from the world's leading institutions." },
  { title: "The Whole Leader", desc: "Executive excellence cannot be compartmentalized. We address the integration of professional ambition, personal wellbeing, and purposeful legacy." },
  { title: "Selectivity as a Standard", desc: "We accept fewer than 5% of applicants. This ensures every cohort is composed of leaders who are genuinely committed to transformation." },
];

const Philosophy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-navy-gradient text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedText>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Our Belief System</p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              A Philosophy of
              <br /><span className="italic text-gradient-gold">Intentional</span> Leadership
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-primary-foreground/70 max-w-xl leading-relaxed">
              We believe that the world's most consequential decisions are made by a small number of people.
              Our mission is to ensure those people lead with wisdom, courage, and clarity.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="space-y-16">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <span className="font-display text-5xl text-accent/20 shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-3">{p.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-gradient text-primary-foreground text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <AnimatedText>
            <p className="font-display text-2xl md:text-4xl italic leading-relaxed text-primary-foreground/80">
              "We don't create followers. We create leaders who create leaders."
            </p>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-sm text-gold mt-6 tracking-widest uppercase">— Dr. Alexander Harrington</p>
          </AnimatedText>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Philosophy;
