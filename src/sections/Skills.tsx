import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, BarChart3, Eye, Bot, Cpu, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      { name: 'Python' },
      { name: 'JavaScript ES6+' },
      { name: 'SQL' },
      { name: 'React' },
      { name: 'MongoDB/JSON' },
    ],
  },
  {
    title: 'Applications & Tools',
    icon: BarChart3,
    skills: [
      { name: 'Redash' },
      { name: 'Looker' },
      { name: 'Tableau' },
      { name: 'Jira' },
      { name: 'Postman' },
      { name: 'Git' },
      { name: 'AWS' },
      { name: 'Figma' },
      { name: 'Miro' },
    ],
  },
  {
    title: 'AI/ML Technologies',
    icon: Bot,
    skills: [
      { name: 'Hugging Face' },
      { name: 'LangChain' },
      { name: 'Langfuse' },
      { name: 'n8n' },
      { name: 'Claude Skills' },
      { name: 'Jupyter Notebooks' },
    ],
  },
];

const aiExpertise = [
  { name: 'LLMs', icon: Sparkles, description: 'Large Language Models' },
  { name: 'Agentic AI', icon: Bot, description: 'Autonomous AI Agents' },
  { name: 'Machine Learning', icon: Cpu, description: 'ML Models & Pipelines' },
  { name: 'Computer Vision', icon: Eye, description: 'CV & Image Processing' },
  { name: 'AI Evals', icon: Cpu, description: 'Evaluation & Benchmarking' },
  { name: 'MLLMs', icon: Sparkles, description: 'Multimodal LLMs' },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-block text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-4"
          >
            Skills
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[40px] font-semibold text-ink leading-[1.15]"
            style={{ letterSpacing: '-1px' }}
          >
            Technical Expertise
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiExpertise.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="p-4 rounded-lg bg-surface-1 border border-hairline text-center"
              >
                <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-lavender" />
                </div>
                <h4 className="text-[14px] font-medium text-ink mb-1">{item.name}</h4>
                <p className="text-[12px] text-ink-subtle">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 }}
              className="p-6 rounded-lg bg-surface-1 border border-hairline"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-surface-2 border border-hairline flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-lavender" />
                </div>
                <h3 className="text-[14px] font-medium text-ink">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-2 rounded-md bg-surface-2 border border-hairline text-[13px] text-ink-subtle"
                  >
                    {skill.name}
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
