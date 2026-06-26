import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-canvas transition-all duration-300 ${
          isScrolled ? 'border-b border-hairline' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a
              href="#"
              className="text-sm font-semibold text-ink transition-colors"
            >
              Andrew Demers
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[13px] text-ink-subtle hover:text-ink px-3 py-1.5 rounded-md hover:bg-surface-1 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="px-[14px] py-[9px] text-[14px] font-medium text-ink bg-surface-1 border border-hairline rounded-md hover:bg-surface-2 transition-colors min-h-[40px]"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-[14px] py-[9px] text-[14px] font-medium text-ink bg-lavender hover:bg-lavender-hover rounded-md transition-colors min-h-[40px]"
              >
                Contact
              </button>
            </div>

            <button
              className="md:hidden p-2 text-ink"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-canvas pt-14 md:hidden"
          >
            <div className="flex flex-col items-center gap-4 p-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xl text-ink hover:text-ink-muted transition-colors py-3"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
                <button
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="w-full px-[14px] py-[9px] text-[14px] font-medium text-ink bg-surface-1 border border-hairline rounded-md hover:bg-surface-2 transition-colors min-h-[40px]"
                >
                  Resume
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full px-[14px] py-[9px] text-[14px] font-medium text-ink bg-lavender hover:bg-lavender-hover rounded-md transition-colors min-h-[40px]"
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
