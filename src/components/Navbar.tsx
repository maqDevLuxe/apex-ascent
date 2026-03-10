import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Programs", path: "/programs" },
  { label: "Philosophy", path: "/philosophy" },
  { label: "Booking", path: "/booking" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/10"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display text-xl tracking-wide text-primary-foreground">
            ASCEND<span className="text-gradient-gold">.</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-body font-medium tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-primary-foreground/70 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="text-sm font-body font-semibold tracking-wider uppercase px-6 py-2.5 border border-gold/40 text-gold hover:bg-gold hover:text-primary transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-body font-medium tracking-widest uppercase text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
