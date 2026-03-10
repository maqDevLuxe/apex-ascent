import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl mb-4">
              ASCEND<span className="text-gradient-gold">.</span>
            </h3>
            <p className="text-sm text-primary-foreground/60 font-body leading-relaxed">
              Elevating C-Suite leaders through transformative mentorship and strategic coaching.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-4">Navigate</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Programs", "Philosophy", "Booking"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-primary-foreground/50 hover:text-gold transition-colors font-body"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/50 font-body">
              <span>contact@ascendexecutive.com</span>
              <span>+1 (212) 555-0190</span>
              <span>New York • London • Singapore</span>
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-gold mb-4">Follow</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/50 font-body">
              <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gold transition-colors">Harvard Business Review</a>
              <a href="#" className="hover:text-gold transition-colors">Forbes Council</a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40 font-body">
            © 2026 Ascend Executive Coaching. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 font-body italic">
            "The measure of a leader is not what they achieve, but what they inspire."
          </p>
        </div>
      </div>
    </footer>
  );
};
