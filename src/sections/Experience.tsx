import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Lead Product Manager, AI Search and Asset Intelligence',
    company: 'Tricentis',
    period: 'May 2025 - Present',
    description: 'Own the AI Search and Asset Intelligence roadmap at Tricentis, helping customers discover and reuse test assets across thousands of projects. Define requirements for our RAG architecture, vector search, and recommender systems, and act as translator between AI engineering and business stakeholders. Establish golden datasets and evaluation pipelines to measure hallucination, reasoning accuracy, and task success rate before shipping - with role-based access control at the chunk level and PII redaction enforced throughout.',
    skills: ['RAG', 'Vector Search', 'AI/ML', 'Product Strategy', 'Agentic AI', 'LLMs', 'Search Architecture'],
    url: 'https://tricentis.com',
  },
  {
    title: 'Senior Technical Product Manager',
    company: 'webAI',
    period: 'Feb. 2026 - May 2025',
    description: 'Own product strategy and execution for a decentralized, privacy-first AI platform enabling secure, on-device and peer-to-peer intelligence delivery. Lead cross-functional initiatives across AI infrastructure, on-device LLM inference, and distributed architecture; drive roadmap and long-term vision with Engineering, Design, and Leadership.',
    skills: ['Product Strategy', 'AI/ML', 'Distributed Systems', 'Cross-Functional Leadership', 'On-Device Inference'],
    url: 'https://webai.com',
  },
  {
    title: 'Technical Product Manager - AI Applications',
    company: 'webAI',
    period: 'March 2024 - Feb. 2026',
    description: 'Led the end-to-end development of a no-code AI/ML platform, empowering users to build and deploy models without coding. Bridged complex technology with intuitive design and optimized for Apple hardware to enhance on-device performance and privacy.',
    skills: ['AI/ML', 'Product Strategy', 'No-Code Platform', 'Apple Silicon'],
    url: 'https://webai.com',
  },
  {
    title: 'Software Project Manager',
    company: 'Apptronik',
    period: 'June 2023 - Feb. 2024',
    description: 'Led the end-to-end delivery of AI/ML software for a general-purpose, humanoid robot, managing project plans to ensure on-time and on-budget execution. Acted as the key bridge between engineering teams, aligning software development with hardware delivery to ensure successful integration.',
    skills: ['Robotics', 'AI/ML', 'Project Management', 'Hardware Integration'],
    url: 'https://apptronik.com',
  },
  {
    title: 'Associate Product Manager - Computer Vision',
    company: 'Flash',
    period: 'July 2022 - April 2023',
    description: 'Managed the product roadmap and development for a computer vision program, making key trade-offs and working with cross-functional teams to deliver innovative SaaS features. Responsibilities included defining product requirements based on market data and creating testing protocols for the rapid deployment of both hardware and software.',
    skills: ['Computer Vision', 'SaaS', 'Product Roadmap', 'Agile'],
    url: 'https://flashparking.com',
  },
  {
    title: 'Project Manager I/II - Strategic Projects',
    company: 'Flash',
    period: 'June 2021 - July 2022',
    description: 'Oversaw the end-to-end software development lifecycle for B2B2C engineering projects, managing technical risks and ensuring agile execution across cross-functional teams. Focused on spearheading technical execution to deploy robust software solutions on schedule while managing resources to meet budgetary constraints.',
    skills: ['B2B2C', 'Agile', 'Risk Management', 'Resource Planning'],
    url: 'https://flashparking.com',
  },
  {
    title: 'Software Engineer',
    company: 'Ultra Electronics, Advanced Tactical Systems',
    period: 'Nov. 2019 - Jul. 2021',
    description: 'Improved design, usability, and implementation of defense software programs using Agile principles. Actively contributed to quality processes through unit testing, code reviews, and mentorship. Built a server-based development environment for the team using ESXi and vSphere technologies, enabling real-time testing and defect resolution that significantly accelerated delivery.',
    skills: ['Software Engineering', 'Agile', 'ESXi/vSphere', 'Unit Testing', 'Defense Systems'],
    url: 'https://www.ultra-as.com',
  },
  {
    title: 'Web Developer',
    company: 'OroSolutions, LLC',
    period: 'Mar. 2019 - Nov. 2019',
    description: 'Built and improved web applications supporting the accounting team\'s preparation and delivery of web-based financial statements. Enhanced the company\'s automated reporting platform by improving report generation controls with a variety of APIs.',
    skills: ['Web Development', 'JavaScript', 'APIs', 'Financial Systems'],
    url: '#',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[13px] font-medium text-ink-subtle uppercase tracking-[0.4px] mb-4"
          >
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[40px] font-semibold text-ink leading-[1.15]"
            style={{ letterSpacing: '-1px' }}
          >
            Career Journey
          </motion.h2>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="p-6 sm:p-8 rounded-lg bg-surface-1 border border-hairline"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className="text-[16px] font-semibold text-ink">{exp.title}</h3>
                <span className="text-[13px] text-ink-subtle flex-shrink-0">{exp.period}</span>
              </div>

              <a
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] text-ink-subtle hover:text-ink transition-colors mb-4"
              >
                {exp.company}
                <ExternalLink className="w-3 h-3" />
              </a>

              <p className="text-[14px] text-ink-muted leading-[1.6] my-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
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
