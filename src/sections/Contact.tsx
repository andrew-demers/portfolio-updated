import { motion } from 'framer-motion';
import { Mail, LinkedinIcon, GithubIcon, FileText } from 'lucide-react';

const contactLinks = [
  {
    name: 'Resume',
    description: 'Download my CV',
    icon: FileText,
    href: '/resume.pdf',
  },
  {
    name: 'Email',
    description: 'Get in touch',
    icon: Mail,
    href: 'mailto:andrew@demers.com',
  },
  {
    name: 'LinkedIn',
    description: 'Connect professionally',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/andrew-demers/',
  },
  {
    name: 'GitHub',
    description: 'View my code',
    icon: GithubIcon,
    href: 'https://www.github.com/andrew-demers',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="p-12 rounded-xl bg-surface-1 border border-hairline mb-8"
        >
          <p className="text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-4">
            Let&apos;s Collaborate
          </p>

          <h2
            className="text-[28px] font-semibold text-ink leading-[1.20] mb-4"
            style={{ letterSpacing: '-0.6px' }}
          >
            Ready to Build the Future?
          </h2>

          <p className="text-[18px] text-ink-muted leading-[1.5] max-w-2xl">
            Let&apos;s collaborate on building the next generation of AI-powered products.
            I&apos;m always open to discussing innovative projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="p-6 rounded-lg bg-surface-1 border border-hairline hover:bg-surface-2 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center mb-4">
                <link.icon className="w-5 h-5 text-ink-muted" />
              </div>

              <h3 className="text-[15px] font-medium text-ink mb-1">{link.name}</h3>
              <p className="text-[13px] text-ink-subtle">{link.description}</p>
            </motion.a>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="pt-8 border-t border-hairline mt-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-ink font-semibold">Andrew Demers - AI Product Manager</span>

            <p className="text-[13px] text-ink-tertiary">
              &copy; {new Date().getFullYear()} Andrew Demers. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
