import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-6"
        >
          Technical Product Manager - AI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[clamp(2.25rem,7vw,5rem)] font-semibold text-ink leading-[1.05] mb-6"
          style={{ letterSpacing: 'clamp(-1px, -0.0375em, -3px)' }}
        >
          Andrew Demers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[18px] text-ink-muted leading-[1.5] max-w-[560px] mx-auto mb-10 tracking-[-0.1px]"
        >
          Building innovative, data-informed solutions at the intersection of
          machine learning and product management
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-[14px] py-[9px] text-[14px] font-medium text-ink bg-lavender hover:bg-lavender-hover rounded-md transition-colors min-h-[40px]"
          >
            Get in Touch
          </button>
          <button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="px-[14px] py-[9px] text-[14px] font-medium text-ink bg-surface-1 border border-hairline rounded-md hover:bg-surface-2 transition-colors min-h-[40px]"
          >
            View Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-ink-tertiary hover:text-ink-subtle transition-colors"
        >
          <span className="text-[12px] uppercase tracking-[0.4px]">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  );
}
