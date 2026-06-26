import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Lightbulb, Users, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description: 'Deep understanding of machine learning models and their practical applications',
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description: 'Translating complex technical concepts into scalable, user-centric products',
  },
  {
    icon: Users,
    title: 'Cross-functional Leadership',
    description: 'Bridging the gap between technical teams and business objectives',
  },
  {
    icon: Rocket,
    title: 'End-to-End Delivery',
    description: 'From concept to production, managing the full product lifecycle',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-block text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[40px] font-semibold text-ink leading-[1.15] mb-6"
              style={{ letterSpacing: '-1px' }}
            >
              Bridging AI & Product
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-4 text-[16px] text-ink-muted leading-[1.6]"
            >
              <p>
                I am a dedicated professional at the intersection of machine learning and product
                management, driven by a passion for building innovative, data-informed solutions
                that deliver meaningful impact.
              </p>
              <p>
                With a strong foundation in developing and deploying machine learning models,
                combined with strategic product management expertise, I excel at transforming
                complex technical concepts into scalable, user-centric products.
              </p>
              <p>
                Throughout my career, I&apos;ve led cross-functional teams to conceptualize, design,
                and deliver AI-powered solutions that solve real-world problems. I thrive in roles
                that challenge me to bridge the gap between technical teams and business objectives.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-lg bg-surface-1 border border-hairline"
              >
                <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-lavender" />
                </div>
                <h3 className="text-[14px] font-medium text-ink mb-2">{item.title}</h3>
                <p className="text-[14px] text-ink-subtle leading-[1.5]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
