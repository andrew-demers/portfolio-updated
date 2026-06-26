import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, BarChart3, Users, Bot } from 'lucide-react';

const highlights = [
  {
    icon: Layers,
    title: 'Intuitive AI Products',
    description: 'Turning complex AI capabilities into products users can understand and act on',
  },
  {
    icon: BarChart3,
    title: 'Metrics That Matter',
    description: 'Task success, reuse, and real user outcomes - not vanity engagement numbers',
  },
  {
    icon: Users,
    title: 'Engineering Partnership',
    description: 'Partnering closely with engineering and data science to ship and scale',
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Building agent workflows that reduce manual effort and surface what matters',
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
                I&apos;m a product leader focused on building and scaling AI-powered systems that solve real-world problems.
              </p>
              <p>
                Today, I lead AI Search &amp; Asset Intelligence at Tricentis, where I&apos;m focused on improving how enterprise teams discover, reuse, and act on large-scale testing assets. My work centers on RAG, vector search, and agent-driven workflows - turning advances in LLMs into practical, high-impact products.
              </p>
              <p>
                Prior to Tricentis, I led AI product initiatives at webAI, where I delivered 50+ AI-driven features across a full-stack machine learning platform and launched the company&apos;s first mobile AI application. My work spanned on-device LLM inference, distributed AI systems, and privacy-first architectures.
              </p>
              <p>
                I&apos;ve also worked across robotics and computer vision, shipping AI/ML capabilities for autonomous systems and driving adoption through tight iteration loops between model performance and user feedback.
              </p>
              <p>
                I&apos;m currently pursuing an M.S. in Artificial Intelligence and enjoy working at the intersection of product, engineering, and applied AI.
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
