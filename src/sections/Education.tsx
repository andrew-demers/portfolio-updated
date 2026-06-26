import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'M.S. in Artificial Intelligence',
    school: 'University of Colorado Boulder',
    year: '2027 (expected)',
    description: 'Deep, specialized dive into the theory and application of modern AI.',
    icon: Award,
    highlight: true,
  },
  {
    degree: 'Master of Business Administration',
    school: 'Louisiana State University Shreveport',
    year: '2022',
    description: 'Specialized in Data Analytics and Business Intelligence.',
    icon: GraduationCap,
    highlight: false,
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'Oregon State University',
    year: '2019',
    description: 'Focus on data structures, algorithms, and software engineering.',
    icon: GraduationCap,
    highlight: false,
  },
  {
    degree: 'B.S. in Mechanical Engineering',
    school: 'James Madison University',
    year: '2015',
    description: 'Business minor with a focus on mechanical engineering.',
    icon: GraduationCap,
    highlight: false,
  },
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-4"
          >
            Education
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[40px] font-semibold text-ink leading-[1.15]"
            style={{ letterSpacing: '-1px' }}
          >
            Academic Background
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className={`relative p-6 rounded-lg border ${
                item.highlight
                  ? 'bg-surface-2 border-hairline-strong'
                  : 'bg-surface-1 border-hairline'
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 right-6">
                  <span className="px-2 py-1 text-[12px] font-medium rounded-full bg-lavender text-ink">
                    In Progress
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center flex-shrink-0">
                  <item.icon className={`w-5 h-5 ${item.highlight ? 'text-lavender' : 'text-ink-subtle'}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-semibold text-ink mb-1">{item.degree}</h3>
                  <p className="text-[14px] text-ink-subtle mb-2">{item.school}</p>

                  <div className={`flex items-center gap-1.5 mb-3 ${item.highlight ? 'text-[13px] text-lavender' : 'text-[13px] text-ink-subtle'}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>

                  <p className="text-[14px] text-ink-muted leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
