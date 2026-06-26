import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Cognitive Project Management for AI (CPMAI)+ PLUS',
    issuer: 'Project Management Institute',
    date: 'June 2025',
    description: 'Advanced certification for managing AI and cognitive computing projects with proven methodologies.',
    skills: ['AI Project Management', 'ML Operations', 'Agile AI'],
    url: 'https://www.pmi.org',
  },
  {
    name: 'Certified Scrum Product Owner (CSPO)',
    issuer: 'Scrum Alliance',
    date: 'June 2022',
    description: 'Certified in Scrum product ownership, backlog management, and agile product delivery.',
    skills: ['Scrum', 'Agile', 'Product Ownership'],
    url: 'https://www.scrumalliance.org',
  },
  {
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    date: 'April 2022',
    description: 'Globally recognized certification for project management excellence and best practices.',
    skills: ['Project Management', 'Risk Management', 'Stakeholder Management'],
    url: 'https://www.pmi.org',
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-4"
          >
            Certifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[40px] font-semibold text-ink leading-[1.15]"
            style={{ letterSpacing: '-1px' }}
          >
            Professional Credentials
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="p-6 rounded-lg bg-surface-1 border border-hairline"
            >
              <div className="w-12 h-12 rounded-md bg-surface-2 border border-hairline flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-lavender" />
              </div>

              <h3 className="text-[15px] font-semibold text-ink mb-2 leading-snug">
                {cert.name}
              </h3>

              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] text-ink-subtle hover:text-ink transition-colors"
              >
                {cert.issuer}
                <ExternalLink className="w-3 h-3" />
              </a>

              <div className="flex items-center gap-1.5 text-[13px] text-ink-subtle mt-1 mb-3">
                <Calendar className="w-3.5 h-3.5" />
                <span>{cert.date}</span>
              </div>

              <p className="text-[14px] text-ink-muted leading-[1.5] mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-[12px] rounded-full bg-surface-2 border border-hairline text-ink-subtle"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
