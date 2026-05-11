import { motion } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { asset } from '../utils/asset';

function useTilt(intensity = 12) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.015,1.015,1.015)`;
    el.style.transition = 'transform 0.08s ease';
  }, [intensity]);
  const onLeave = useCallback(() => {
    ref.current.style.transform = 'perspective(900px) rotateY(0) rotateX(0) scale3d(1,1,1)';
    ref.current.style.transition = 'transform 0.55s cubic-bezier(0.22,1,0.36,1)';
  }, []);
  return { ref, onMove, onLeave };
}

const highlights = [
  { label: 'Production AI Apps', value: '2+',      color: '#8B5CF6' },
  { label: 'Hackathon — Auth0 40K', value: 'Top 100', color: '#F59E0B' },
  { label: 'Languages Spoken',    value: '3',      color: '#8B5CF6' },
  { label: 'AI Certifications',   value: '6+',     color: '#F59E0B' },
];

export default function About() {
  const tilt = useTilt(10);

  return (
    <section id="about" className="section section--yellow" style={{ paddingBottom: '5rem' }}>

      {/* Decorative stripe top */}
      <div className="stripe-pattern" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, opacity: 0.4, pointerEvents: 'none' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '85vh', maxWidth: 1200, margin: '0 auto', gap: '4rem', padding: '5rem 3rem', alignItems: 'center' }} className="about-split">

        {/* LEFT — Photo with 3D tilt */}
        <motion.div
          initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
          style={{ position: 'relative' }}
        >
          {/* Violet glow frame */}
          <div style={{
            position: 'absolute', inset: 0,
            transform: 'translate(12px, 12px)',
            background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
            borderRadius: 24, zIndex: 0,
            filter: 'blur(2px)',
            opacity: 0.8,
          }} />
          <div
            ref={tilt.ref}
            onMouseMove={tilt.onMove}
            onMouseLeave={tilt.onLeave}
            style={{ position: 'relative', zIndex: 1, transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            <img
              src={asset('/Adnane el yazid photo.jpg')} alt="Adnane EL YAZID"
              style={{
                width: '100%', borderRadius: 22,
                aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'top center',
                border: '2px solid rgba(139,92,246,0.4)', display: 'block',
              }}
            />
          </div>

          {/* Role badge */}
          <motion.div
            initial={{ scale: 0, rotate: -6 }} whileInView={{ scale: 1, rotate: -6 }}
            viewport={{ once: true }} transition={{ delay: 0.6, type: 'spring', damping: 12 }}
            style={{
              position: 'absolute', bottom: -18, right: -18, zIndex: 10,
              background: 'rgba(139,92,246,0.85)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(139,92,246,0.5)',
              padding: '0.65rem 1rem', borderRadius: 14,
              fontFamily: 'var(--mono)', fontSize: '0.78rem', fontWeight: 700,
              boxShadow: '0 4px 24px rgba(139,92,246,0.4)', letterSpacing: '0.04em',
              color: '#fff',
            }}
          >
            🤖 AI Engineer · IMT Atlantique
          </motion.div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22,1,0.36,1] }}
        >
          <p className="sec-eyebrow sec-eyebrow--dark">About Me</p>
          <h2 style={{
            fontFamily: 'Bebas Neue',
            fontSize: 'clamp(44px, 6vw, 76px)', lineHeight: 0.9, color: '#FFFFFF',
            marginBottom: '1.5rem',
          }}>
            Building<br/>Intelligent<br/>Systems.
          </h2>

          <div style={{ width: 52, height: 4, background: 'linear-gradient(90deg, #F59E0B, #8B5CF6)', borderRadius: 2, marginBottom: '1.5rem' }} />

          <p style={{ fontFamily: 'var(--body)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
            I'm an AI Engineer and Data Scientist completing my final year at <strong style={{ color: '#fff' }}>IMT Atlantique</strong> — building production-grade AI systems from generative AI and fraud detection to industrial AI and medical imaging.
          </p>
          <p style={{ fontFamily: 'var(--body)', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>
            Mathematical and Computational Engineering degree at <strong style={{ color: '#fff' }}>IMT Atlantique</strong> — top grades in Probability & Statistics, Numerical Methods, and Stochastic Modeling. 6+ certifications including Databricks, Dataiku, and Hugging Face.
          </p>

          {/* Highlights grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: '2rem' }}>
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 14, padding: '1rem',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}
              >
                <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: h.color, lineHeight: 1 }}>{h.value}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{h.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <motion.a href="https://www.linkedin.com/in/adnane-el-yazid-226176241/" target="_blank"
              whileHover={{ y: -3 }}
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '0.72rem 1.5rem', borderRadius: 50,
                fontFamily: 'var(--mono)', fontSize: '0.84rem', fontWeight: 700,
                background: 'rgba(245,158,11,0.12)', color: '#F59E0B',
                border: '1.5px solid rgba(245,158,11,0.35)',
                backdropFilter: 'blur(12px)',
              }}>
              LinkedIn ↗
            </motion.a>
            <motion.a href="https://github.com/ELYAZID-bit" target="_blank"
              whileHover={{ y: -3 }}
              style={{
                display: 'inline-flex', alignItems: 'center', padding: '0.72rem 1.5rem', borderRadius: 50,
                fontFamily: 'var(--mono)', fontSize: '0.84rem', fontWeight: 700,
                background: 'transparent', color: 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(255,255,255,0.2)',
              }}>
              GitHub ↗
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .about-split { grid-template-columns: 1fr !important; padding: 3rem 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
