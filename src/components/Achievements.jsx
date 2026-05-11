import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { asset } from '../utils/asset';

const awards = [
  {
    n: '01', rank: 'TOP 100', logo: asset('/hackathons/Auth0 hackaton.png'),
    title: 'Auth0 Hackathon',
    desc: 'Ranked top 100 out of 40,000+ participants worldwide — built an AI-powered job & internship matching platform with candidate-recruiter matching and interview management.',
    rankBg: '#F59E0B', rankColor: '#0A0A0A', accentColor: '#F59E0B',
  },
  {
    n: '02', rank: 'FINALIST', logo: asset('/hackathons/Logo challenge orange nokia.png'),
    title: 'Orange Nokia Challenge',
    desc: 'Competed in the Orange-Nokia innovation challenge, developing an AI-driven solution for real-world telecom applications.',
    rankBg: '#FF7900', rankColor: '#fff', accentColor: '#FF7900',
  },
  {
    n: '03', rank: 'COMPETITOR', logo: asset('/hackathons/Paris hackaton.avif'),
    title: 'Paris AI Hackathon',
    desc: 'Participated in a major AI hackathon in Paris, collaborating on innovative AI solutions under time pressure.',
    rankBg: '#8B5CF6', rankColor: '#fff', accentColor: '#8B5CF6',
  },
  {
    n: '04', rank: 'RESEARCHER', logo: asset('/Laboratoire LATim.png'),
    title: 'LATim Medical AI',
    desc: 'Developed deep learning models for ocular pathology prediction at IMT Atlantique\'s INSERM-affiliated medical imaging research lab.',
    rankBg: '#10B981', rankColor: '#fff', accentColor: '#10B981',
  },
];

function AwardCard({ award, i }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.02,1.02,1.02)`;
    el.style.transition = 'transform 0.08s ease';
  }, []);
  const onLeave = useCallback(() => {
    ref.current.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)';
    ref.current.style.transition = 'transform 0.55s cubic-bezier(0.22,1,0.36,1)';
  }, []);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        flex: '1 1 240px', minWidth: 0,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${award.accentColor}30`,
        borderTop: `2px solid ${award.accentColor}`,
        borderRadius: 20, padding: '2.2rem 2rem',
        position: 'relative', overflow: 'hidden',
        boxShadow: `0 0 30px ${award.accentColor}12, 0 8px 32px rgba(0,0,0,0.35)`,
        transformStyle: 'preserve-3d', willChange: 'transform',
        cursor: 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      {/* Big number */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-1rem', right: '0.5rem',
        fontFamily: 'Bebas Neue', fontSize: '6rem', lineHeight: 0.85,
        color: '#fff', opacity: 0.04, userSelect: 'none',
      }}>{award.n}</div>

      {/* Rank badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        background: award.rankBg, color: award.rankColor,
        padding: '0.32rem 0.9rem', borderRadius: 50,
        fontFamily: 'var(--mono)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em',
        marginBottom: '1.2rem',
      }}>{award.rank}</div>

      {award.logo ? (
        <motion.img src={award.logo} alt={award.title}
          whileHover={{ scale: 1.06 }}
          style={{ height: 40, maxWidth: 130, objectFit: 'contain', marginBottom: '1.1rem', display: 'block', filter: 'brightness(1.1)' }}
        />
      ) : (
        <div style={{ fontSize: '2.2rem', marginBottom: '1.1rem' }}>{award.emoji}</div>
      )}

      <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.45rem', letterSpacing: '0.02em', marginBottom: '0.5rem', color: '#FFFFFF' }}>{award.title}</h3>
      <p style={{ fontFamily: 'var(--body)', fontSize: '0.84rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{award.desc}</p>
    </motion.article>
  );
}

export default function Achievements() {
  return (
    <section id="awards" className="section section--off" style={{ paddingBottom: '5.5rem' }}>
      {/* Gold gradient stripe top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #F59E0B, #8B5CF6, transparent)' }} />

      <div className="container">
        <div className="sec-header">
          <div>
            <p className="sec-eyebrow">Recognition</p>
            <h2 className="sec-title">AWARDS &<br />HONORS.</h2>
          </div>
          <p className="sec-body">
            Competitive results at international hackathons and research contributions — from AI innovation challenges to medical imaging research.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {awards.map((a, i) => <AwardCard key={i} award={a} i={i} />)}
        </div>
      </div>
    </section>
  );
}
