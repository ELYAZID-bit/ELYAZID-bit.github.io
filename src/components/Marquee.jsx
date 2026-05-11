import { motion } from 'framer-motion';
import { asset } from '../utils/asset';

const logos = [
  { src: asset('/OPmobility logo.png'),                      alt: 'OPmobility' },
  { src: asset('/Amadeus_logo.png'),                         alt: 'Amadeus' },
  { src: asset('/Laboratoire LATim.png'),                    alt: 'LATim' },
  { src: asset('/school/imt atlantique logo.png'),           alt: 'IMT Atlantique' },
  { src: asset('/hackathons/Auth0 hackaton.png'),            alt: 'Auth0' },
  { src: asset('/hackathons/Logo challenge orange nokia.png'), alt: 'Orange Nokia' },
];

export default function Marquee() {
  return (
    <section className="section section--off" style={{
      padding: '3.5rem 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--mono)', fontSize: '0.68rem',
          letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
        }}>
          Companies I've Worked With
        </p>
      </div>

      <div style={{
        position: 'relative', overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: '4.5rem', alignItems: 'center', width: 'max-content', padding: '0.5rem 0' }}
        >
          {[...logos, ...logos].map((l, i) => (
            <motion.img
              key={i} src={l.src} alt={l.alt}
              whileHover={{ opacity: 1, filter: 'grayscale(0%) brightness(1)', scale: 1.1 }}
              style={{
                height: 36, maxWidth: 120, objectFit: 'contain',
                opacity: 0.45, filter: 'grayscale(60%) brightness(1.6)',
                flexShrink: 0, transition: 'all 0.3s ease',
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
