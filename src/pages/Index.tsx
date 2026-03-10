import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedText } from "@/components/AnimatedSection";
import { MagneticButton } from "@/components/MagneticButton";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, BookOpen, Award, TrendingUp, Users, Star, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import mentorImg from "@/assets/mentor-portrait.jpg";
import execImg from "@/assets/executive-fullwidth.jpg";
import retreatImg from "@/assets/retreat.jpg";

/* ─── 1. HERO ─── */
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImg} alt="Executive mentoring session" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6"
          >
            Exclusive C-Suite Mentorship
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] max-w-3xl mb-8"
          >
            Where Extraordinary
            <br />
            <span className="text-gradient-gold italic">Leaders</span> Are Made
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-body text-primary-foreground/70 text-lg max-w-xl mb-10 leading-relaxed"
          >
            A private mentorship experience designed for senior executives who refuse to settle for ordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Link to="/booking">
              <MagneticButton className="px-8 py-4 bg-gold text-primary font-body font-semibold text-sm tracking-wider uppercase hover:bg-gold-light transition-colors">
                Apply for Mentorship <ArrowRight className="inline ml-2" size={16} />
              </MagneticButton>
            </Link>
            <Link to="/philosophy">
              <MagneticButton className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-colors">
                Our Philosophy
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* ─── 2. MENTORED COMPANIES ─── */
const companies = ["Goldman Sachs", "McKinsey & Co.", "Tesla", "Deloitte", "JP Morgan", "Bain & Company", "Meta", "Blackstone"];

const MentoredCompanies = () => (
  <section className="py-20 bg-cream-gradient">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedText className="text-center mb-12">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">Trusted By Leaders From</p>
      </AnimatedText>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {companies.map((c, i) => (
          <AnimatedSection key={c} delay={i * 0.08}>
            <span className="font-display text-lg md:text-xl text-foreground/30 hover:text-foreground/60 transition-colors duration-500 cursor-default">
              {c}
            </span>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 3. COACHING PARADIGMS ─── */
const paradigms = [
  { icon: <Award size={28} />, title: "Strategic Vision", desc: "Develop foresight that anticipates market shifts before they happen." },
  { icon: <TrendingUp size={28} />, title: "Executive Presence", desc: "Command rooms with authentic gravitas rooted in purpose." },
  { icon: <Users size={28} />, title: "Stakeholder Mastery", desc: "Navigate complex board dynamics and organizational politics." },
  { icon: <BookOpen size={28} />, title: "Legacy Building", desc: "Create lasting impact that transcends quarterly results." },
];

const CoachingParadigms = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedText className="text-center mb-4">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold">The Framework</p>
      </AnimatedText>
      <AnimatedText className="text-center mb-16" delay={0.1}>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">Coaching Paradigms</h2>
      </AnimatedText>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {paradigms.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="group p-8 bg-card border border-border hover:border-gold/30 transition-all duration-500 h-full">
              <div className="text-gold mb-6">{p.icon}</div>
              <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 4. LEADERSHIP TRANSFORMATION ─── */
const LeadershipTransformation = () => (
  <section className="py-24 bg-navy-gradient text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedText>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">The Transformation</p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              From Executive to <span className="italic text-gradient-gold">Visionary</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-8">
              Our methodology doesn't just refine your leadership — it redefines it. Through 
              intensive one-on-one sessions, behavioral frameworks, and real-world application, 
              we catalyze a transformation that your board, your team, and your industry will notice.
            </p>
          </AnimatedText>
          <AnimatedSection delay={0.3}>
            <div className="flex gap-12">
              <div>
                <p className="font-display text-4xl text-gold">96%</p>
                <p className="font-body text-xs text-primary-foreground/50 tracking-wider uppercase mt-1">Client Retention</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold">3.2x</p>
                <p className="font-body text-xs text-primary-foreground/50 tracking-wider uppercase mt-1">Leadership Impact</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2}>
          <div className="relative overflow-hidden group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={retreatImg}
              alt="Executive retreat"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── 5. SUCCESS METRICS ─── */
const metrics = [
  { value: "87%", label: "Promoted within 18 months" },
  { value: "4.2x", label: "Average ROI on coaching investment" },
  { value: "$2.4M", label: "Average salary increase" },
  { value: "340+", label: "C-Suite leaders mentored" },
];

const SuccessMetrics = () => (
  <section className="py-24 bg-cream-gradient">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Measurable Impact</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">Success By The Numbers</h2>
      </AnimatedText>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m, i) => (
          <AnimatedSection key={m.label} delay={i * 0.1}>
            <div className="text-center p-6">
              <p className="font-display text-4xl md:text-5xl text-accent mb-2">{m.value}</p>
              <p className="font-body text-sm text-muted-foreground">{m.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 6. MASTERMIND RETREATS ─── */
const MastermindRetreats = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="relative overflow-hidden group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src={retreatImg}
              alt="Mastermind retreat"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </AnimatedSection>
        <div>
          <AnimatedText>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">By Invitation Only</p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Mastermind Retreats
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Intimate gatherings of 8–12 senior executives in extraordinary settings. From the Swiss Alps 
              to private estates in Tuscany, these curated retreats combine deep strategic work with 
              transformative experiences.
            </p>
          </AnimatedText>
          <AnimatedSection delay={0.3}>
            <div className="space-y-3">
              {["3-day intensive strategy sessions", "Peer advisory roundtables", "Private chef & wellness programming"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ChevronRight size={14} className="text-gold" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 7. MENTOR'S PROFILE ─── */
const MentorProfile = () => (
  <section className="py-24 bg-navy-gradient text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedText>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Your Mentor</p>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              Dr. Alexander <span className="italic text-gradient-gold">Harrington</span>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-6">
              Former CEO of three Fortune 500 companies. Harvard Business School faculty. 
              Board advisor to global institutions. With 28 years of C-Suite experience, 
              Dr. Harrington brings an unparalleled depth of strategic insight and 
              transformative leadership methodology.
            </p>
          </AnimatedText>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-wrap gap-3">
              {["Harvard MBA", "3x Fortune 500 CEO", "McKinsey Alum", "Published Author"].map((tag) => (
                <span key={tag} className="font-body text-xs tracking-wider uppercase px-4 py-2 border border-gold/30 text-gold">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2}>
          <div className="relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              src={mentorImg}
              alt="Dr. Alexander Harrington"
              className="w-full max-w-md mx-auto aspect-square object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

/* ─── 8. FULL-WIDTH PORTRAIT ─── */
const FullWidthPortrait = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={execImg} alt="Executive leadership" className="w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
      </motion.div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedText>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground max-w-2xl leading-tight italic">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

/* ─── 9. EXPERIENCE COUNTERS ─── */
const counters = [
  { value: "28+", label: "Years of Executive Experience" },
  { value: "340+", label: "C-Suite Leaders Mentored" },
  { value: "52", label: "Countries Served" },
  { value: "15", label: "Published Works" },
];

const ExperienceCounters = () => (
  <section className="py-20 bg-background border-y border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="font-display text-5xl md:text-6xl text-accent">{c.value}</p>
              <div className="gold-divider my-4" />
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">{c.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 10. JOURNAL / PODCAST ─── */
const articles = [
  { tag: "Journal", title: "The Silent Currency of Executive Presence", date: "Feb 2026" },
  { tag: "Podcast", title: "Redefining Success at the Top — Episode 142", date: "Jan 2026" },
  { tag: "Journal", title: "Why Most Leadership Programs Fail C-Suite Executives", date: "Dec 2025" },
];

const JournalPodcast = () => (
  <section className="py-24 bg-cream-gradient">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Insights</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">The Leadership Journal</h2>
      </AnimatedText>
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((a, i) => (
          <AnimatedSection key={a.title} delay={i * 0.1}>
            <div className="group bg-card p-8 border border-border hover:border-gold/30 transition-all duration-500 cursor-pointer h-full">
              <span className="font-body text-xs tracking-widest uppercase text-gold">{a.tag}</span>
              <h3 className="font-display text-xl text-foreground mt-3 mb-4 group-hover:text-accent transition-colors">{a.title}</h3>
              <p className="font-body text-xs text-muted-foreground">{a.date}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 11. SELECTION PROCESS ─── */
const steps = [
  { num: "01", title: "Application", desc: "Submit your executive profile and leadership objectives." },
  { num: "02", title: "Assessment", desc: "A confidential 360° leadership evaluation and alignment call." },
  { num: "03", title: "Invitation", desc: "Selected candidates receive a personalized mentorship blueprint." },
  { num: "04", title: "Engagement", desc: "Begin your transformative journey with Dr. Harrington." },
];

const SelectionProcess = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Selective Admissions</p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground">The Selection Process</h2>
      </AnimatedText>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.12}>
            <div className="relative p-8">
              <span className="font-display text-6xl text-accent/20 absolute top-0 right-4">{s.num}</span>
              <div className="gold-divider-left mb-6" />
              <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 12. TESTIMONIALS ─── */
const testimonials = [
  { quote: "Working with Dr. Harrington fundamentally changed how I lead. Within a year, I was appointed CEO.", name: "Sarah Chen", role: "CEO, Meridian Technologies" },
  { quote: "The most transformative investment I've ever made in myself. My board relationships and strategic clarity have never been stronger.", name: "James Whitfield", role: "Founder & Chairman, Atlas Ventures" },
  { quote: "This isn't coaching — it's a complete recalibration of how you think about leadership and legacy.", name: "Maria Gonzalez", role: "COO, Sovereign Capital Partners" },
];

const Testimonials = () => (
  <section className="py-24 bg-navy-gradient text-primary-foreground">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedText className="text-center mb-16">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Endorsements</p>
        <h2 className="font-display text-3xl md:text-5xl">In Their Words</h2>
      </AnimatedText>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="p-8 border border-primary-foreground/10 h-full flex flex-col">
              <Star size={20} className="text-gold mb-4" />
              <p className="font-display text-lg italic text-primary-foreground/80 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body text-sm font-semibold text-primary-foreground">{t.name}</p>
                <p className="font-body text-xs text-primary-foreground/50">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 13. CTA ─── */
const ApplyCTA = () => (
  <section className="py-24 bg-cream-gradient">
    <div className="container mx-auto px-6 lg:px-12 text-center">
      <AnimatedText>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">Begin Your Journey</p>
      </AnimatedText>
      <AnimatedText delay={0.1}>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">Ready to Ascend?</h2>
      </AnimatedText>
      <AnimatedText delay={0.2}>
        <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Applications are reviewed quarterly. Only 12 new mentees are accepted each year to ensure 
          the highest caliber of personalized attention.
        </p>
      </AnimatedText>
      <AnimatedSection delay={0.3}>
        <Link to="/booking">
          <MagneticButton className="px-10 py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:bg-navy-light transition-colors">
            Apply for Mentorship <ArrowRight className="inline ml-2" size={16} />
          </MagneticButton>
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

/* ─── PAGE ─── */
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MentoredCompanies />
      <CoachingParadigms />
      <LeadershipTransformation />
      <SuccessMetrics />
      <MastermindRetreats />
      <MentorProfile />
      <FullWidthPortrait />
      <ExperienceCounters />
      <JournalPodcast />
      <SelectionProcess />
      <Testimonials />
      <ApplyCTA />
      <Footer />
    </div>
  );
};

export default Index;
