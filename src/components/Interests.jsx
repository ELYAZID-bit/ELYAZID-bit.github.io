import { motion } from 'framer-motion';
import { asset } from '../utils/asset';

const stats = [
  { value: '4',     label: 'Cities in 4 days — Prague · Vienna · Warsaw · Stockholm' },
  { value: '1st Dan', label: 'Taekwondo belt level' },
  { value: '⚽',    label: 'Football player & fan' },
];

const topics = [
  '✈️ World Traveler',
  '⚽ Football (Player & Fan)',
  '🥋 Taekwondo — Red Belt · 1st Dan',
  '🏙️ City Explorer',
  '🎣 Fishing',
  '🔬 AI Research',
];

const images = [
  { src: asset('/interests/prague photo1.jpg') },
  { src: asset('/interests/stockholm photo1.jpg') },
  { src: asset('/interests/vienne photo1.jpg') },
  { src: asset('/interests/warsaw photo1.jpg') },
  { src: asset('/interests/foot_terrain.jpg') },
];

export default function Interests() {
  return (
    <section id="interests" className="section section--off" style={{ paddingBottom: '6rem' }}>
      <div className="stripe-pattern" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, opacity: 0.3, pointerEvents: 'none' }} />

      <div className="container">
        <div className="sec-header">
          <div>
            <p className="sec-eyebrow sec-eyebrow--dark">Beyond the Code</p>
            <h2 className="sec-title">TRAVEL<br />&amp; SPORTS.</h2>
          </div>
          <p className="sec-body sec-body--dark">
            Exploring the world as eagerly as exploring new ideas — from 4 cities in 4 days across Europe to the discipline of taekwondo and the passion of football.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="interests-grid">

          {/* LEFT — text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p style={{
              fontFamily: 'var(--body)', fontSize: '1.05rem', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.65)', marginBottom: '1.8rem',
            }}>
              I explore the world as eagerly as I explore new ideas. From a 4-cities-in-4-days challenge through Prague, Vienna, Warsaw, and Stockholm, to weekends on the French Riviera in Nice and the village of Èze — travel sharpens perspective and fuels creativity.
            </p>
            <p style={{
              fontFamily: 'var(--body)', fontSize: '1.05rem', lineHeight: 1.85,
              color: 'rgba(255,255,255,0.65)', marginBottom: '2rem',
            }}>
              Beyond the map, I'm a red belt (1st Dan) taekwondo practitioner and a passionate football player and fan. The discipline from sports carries directly into how I approach engineering and research problems.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.2rem', flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: 14, padding: '1rem 1.4rem',
                    border: '1px solid rgba(245,158,11,0.25)',
                    boxShadow: '0 0 20px rgba(245,158,11,0.1)',
                  }}
                >
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: '#F59E0B', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Topic tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
              {topics.map((t, i) => (
                <motion.span key={t}
                  initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.05, type: 'spring' }}
                  style={{
                    padding: '0.38rem 0.9rem', borderRadius: 50,
                    fontFamily: 'var(--mono)', fontSize: '0.73rem', fontWeight: 500,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >{t}</motion.span>
              ))}
            </div>

            {/* LinkedIn CTA */}
            <motion.a
              href="https://www.linkedin.com/in/adnane-el-yazid-226176241/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(139,92,246,0.5)' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.78rem 1.6rem', borderRadius: 50,
                fontFamily: 'var(--mono)', fontSize: '0.84rem', fontWeight: 700,
                background: 'rgba(139,92,246,0.15)', color: '#A78BFA',
                border: '1.5px solid rgba(139,92,246,0.35)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(139,92,246,0.2)',
                transition: 'box-shadow 0.25s, transform 0.25s',
                letterSpacing: '0.03em',
              }}
            >
              Connect with me on LinkedIn ↗
            </motion.a>
          </motion.div>

          {/* RIGHT — photo grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.03, zIndex: 2 }}
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  aspectRatio: i === 0 ? '16/10' : '1/1',
                  gridColumn: i === 0 ? 'span 2' : 'span 1',
                  position: 'relative',
                  background: 'transparent',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
              >
                <img
                  src={img.src}
                  alt={`Travel & Sport — ${i + 1}`}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: img.pos || 'top center',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 820px) { .interests-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
