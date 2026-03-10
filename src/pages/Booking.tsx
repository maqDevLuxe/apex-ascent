import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";
import { Send } from "lucide-react";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-navy-gradient text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedText>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Begin Your Journey</p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">
              Apply for <span className="italic text-gradient-gold">Mentorship</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-primary-foreground/70 max-w-xl leading-relaxed">
              Acceptance is limited to 12 new mentees per year. Complete the application below 
              and our team will respond within 5 business days.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          {submitted ? (
            <AnimatedSection>
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Send size={24} className="text-accent" />
                </div>
                <h2 className="font-display text-3xl text-foreground mb-4">Application Received</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Thank you for your interest in Ascend Executive Coaching. Our team will review 
                  your application and respond within 5 business days.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">First Name</label>
                    <input required type="text" className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Last Name</label>
                    <input required type="text" className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
                  <input required type="email" className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Current Title & Organization</label>
                  <input required type="text" className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Program of Interest</label>
                  <select required className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select a program</option>
                    <option>CEO Ascension (12 months)</option>
                    <option>C-Suite Catalyst (6 months)</option>
                    <option>Legacy Architecture (18 months)</option>
                    <option>Founder to CEO (9 months)</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">What leadership challenge are you facing?</label>
                  <textarea required rows={4} className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold transition-colors resize-none" />
                </div>
                <MagneticButton className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:bg-navy-light transition-colors">
                  Submit Application
                </MagneticButton>
                <p className="font-body text-xs text-muted-foreground text-center">
                  All applications are treated with the utmost confidentiality.
                </p>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Booking;
