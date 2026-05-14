import { motion } from 'framer-motion';
import Carousel from './Carousel';
import { asset } from '../utils/asset';

const exps = [
  {
    n: '01', role: 'Data scientist/ MLOps Engineer', company: 'OPmobility',
    period: '2024 — 2025 · Contrat de Pro · 12 mois', logo: asset('/OPmobility logo.png'),
    color: '#8B5CF6',
    bullets: [
      'Applying machine learning and AI to industrial and manufacturing challenges.',
      'Developing AI-driven solutions in a production environment at a world leader in automotive equipment.',
      'Bridging final-year academic excellence and real-world industry practice (12-month mission).',
    ],
  },
  {
    n: '02', role: 'GEN AI Engineer Intern', company: 'Amadeus',
    period: 'Stage 2A · Spring–Summer 2024', logo: asset('/Amadeus_logo.png'),
    color: '#3B82F6',
    bullets: [
      'Worked on generative AI projects and fraud detection systems at a global travel tech leader.',
      'Applied advanced AI and data science techniques to production-grade enterprise systems.',
      'Gained hands-on experience in enterprise-level AI development and deployment.',
    ],
  },
  {
    n: '03', role: 'Deep Learning Researcher', company: 'Laboratoire LATim · IMT Atlantique',
    period: 'Research Project · Brest', logo: asset('/Laboratoire LATim.png'),
    color: '#10B981',
    bullets: [
      'Developed AI models for the prediction and detection of ocular pathologies.',
      'Applied deep learning and computer vision techniques to medical image analysis.',
      'Contributed to research at the intersection of AI and healthcare at an INSERM-affiliated lab.',
    ],
  },
];

function ExpCard({ exp }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: `0 0 50px ${exp.color}30, 0 16px 48px rgba(0,0,0,0.5)` }}
      style={{
        flexShrink: 0,
        width: 'min(72vw, 580px)',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${exp.color}40`,
        borderTop: `2px solid ${exp.color}`,
        borderRadius: 20,
        padding: '2.2rem 2.4rem',
        display: 'flex', flexDirection: 'column', gap: '1.2rem',
        position: 'relative', overflow: 'hidden',
        boxShadow: `0 0 30px ${exp.color}15, 0 8px 32px rgba(0,0,0,0.4)`,
        transition: 'box-shadow 0.3s, transform 0.3s',
      }}
    >
      {/* Big number watermark */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-1rem', right: '0.5rem',
        fontFamily: 'Bebas Neue', fontSize: 'clamp(70px, 14vw, 160px)',
        lineHeight: 0.85, userSelect: 'none', pointerEvents: 'none',
        color: '#fff', opacity: 0.03,
      }}>{exp.n}</div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        {exp.logo ? (
          <div style={{
            width: 52, height: 52, borderRadius: 12, background: 'rgba(255,255,255,0.92)',
            border: `1px solid ${exp.color}50`, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 7, flexShrink: 0,
          }}>
            <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        ) : (
          <div style={{
            width: 52, height: 52, borderRadius: 12, background: 'rgba(255,255,255,0.08)',
            border: `1px solid ${exp.color}50`, display: 'flex',
            alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0,
          }}>{exp.emoji}</div>
        )}
        <div>
          <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', lineHeight: 0.95, letterSpacing: '0.02em', color: '#FFFFFF' }}>{exp.role}</h3>
          <div style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '0.8rem', color: exp.color, marginTop: 2 }}>{exp.company}</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginTop: 1 }}>{exp.period}</div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: `${exp.color}30`, borderRadius: 1 }} />

      {/* Bullets */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        {exp.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.55rem', fontFamily: 'var(--body)', fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>
            <span style={{ color: exp.color, fontWeight: 900, flexShrink: 0, fontSize: '0.9rem' }}>→</span>
            {b}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section section--white" style={{ paddingBottom: '5rem' }}>
      <div className="container">
        <div className="sec-header">
          <div>
            <p className="sec-eyebrow">Career</p>
            <h2 className="sec-title">EXPERIENCE.</h2>
          </div>
          <p className="sec-body">
            Led AI projects across travel tech, automotive industry & medical research. Building production-grade systems from generative AI to industrial machine learning.
          </p>
        </div>

        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', paddingLeft: 0 }}>
          ← Drag to explore →
        </p>
      </div>

      {/* Full-width carousel */}
      <Carousel gap={20} paddingX={48}>
        {exps.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <ExpCard exp={e} />
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
}
