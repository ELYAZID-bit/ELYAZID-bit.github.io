import { motion } from 'framer-motion';
import { useRef, useCallback, useState } from 'react';

function Magnetic({ children, href, target, rel, style, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.38;
    const y = (e.clientY - r.top  - r.height / 2) * 0.38;
    el.style.transform = `translate(${x}px,${y}px)`;
    el.style.transition = 'transform 0.1s ease';
  }, []);
  const onLeave = useCallback((e) => {
    ref.current.style.transform = 'translate(0,0)';
    ref.current.style.transition = 'transform 0.55s cubic-bezier(0.22,1,0.36,1)';
    onMouseLeave && onMouseLeave(e);
  }, [onMouseLeave]);

  return (
    <a ref={ref} href={href} target={target} rel={rel}
      onMouseMove={onMove} onMouseLeave={onLeave} onMouseEnter={onMouseEnter}
      style={style}>
      {children}
    </a>
  );
}

const links = [
  { href: 'mailto:adnaneelyazid2018@gmail.com', label: 'adnaneelyazid2018@gmail.com', icon: '✉', tag: 'Email',   bg: '#F59E0B',                    color: '#0A0A0A', border: 'rgba(245,158,11,0.6)',       shadow: 'rgba(245,158,11,0.4)' },
  { href: 'tel:+33758606235',                   label: '+33 7 58 60 62 35',            icon: '📱', tag: 'Phone',   bg: 'rgba(255,255,255,0.07)',       color: '#F1F0F5', border: 'rgba(255,255,255,0.12)',     shadow: 'rgba(0,0,0,0.3)' },
  { href: 'https://www.linkedin.com/in/adnane-el-yazid-226176241/', label: 'LinkedIn', icon: '💼', tag: 'Network', bg: 'rgba(139,92,246,0.18)',        color: '#C4B5FD', border: 'rgba(139,92,246,0.4)',      shadow: 'rgba(139,92,246,0.3)', ext: true },
  { href: 'https://github.com/ELYAZID-bit',     label: 'GitHub',                       icon: '💻', tag: 'Code',    bg: 'rgba(15,8,32,0.8)',            color: '#F59E0B', border: 'rgba(245,158,11,0.3)',       shadow: 'rgba(0,0,0,0.5)',     ext: true },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('adnaneelyazid2018@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="section section--white" style={{ paddingBottom: '6rem' }}>
      {/* Gold gradient stripe */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #F59E0B, #8B5CF6, transparent)' }} />

      <div className="container">
        <div className="sec-header">
          <div>
            <p className="sec-eyebrow">Let's Connect</p>
            <h2 className="sec-title">LET'S BUILD<br />SOMETHING.</h2>
          </div>
          <p className="sec-body">
            Paris, Île-de-France · AI Engineer &amp; Data Scientist · IMT Atlantique (MCE) · OPmobility.
          </p>
        </div>

        {/* Contact cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {links.map((l, i) => (
            <motion.div
              key={l.href}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.08 }}
            >
              <Magnetic
                href={l.href} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noreferrer' : undefined}
                style={{
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  padding: '1.8rem 1.8rem',
                  background: l.bg, color: l.color,
                  border: `1.5px solid ${l.border}`,
                  borderRadius: 18,
                  backdropFilter: 'blur(20px)',
                  boxShadow: `0 4px 24px ${l.shadow}`,
                  fontFamily: 'var(--mono)',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 8px 32px ${l.shadow}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow=`0 4px 24px ${l.shadow}`; }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.6rem' }}>{l.icon}</span>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', opacity: 0.65,
                    background: 'rgba(255,255,255,0.1)', borderRadius: 50, padding: '0.22rem 0.6rem',
                  }}>{l.tag}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{l.label}</div>
                  {l.ext && <div style={{ fontSize: '0.72rem', opacity: 0.55, marginTop: 3 }}>Open in new tab ↗</div>}
                </div>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        {/* Copy email */}
        <motion.button
          onClick={copyEmail}
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.75rem 1.6rem', borderRadius: 10,
            fontFamily: 'var(--mono)', fontSize: '0.82rem', fontWeight: 700,
            background: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.06)',
            border: `1.5px solid ${copied ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.12)'}`,
            color: copied ? '#4ADE80' : 'rgba(255,255,255,0.55)',
            cursor: 'none', letterSpacing: '0.04em',
            backdropFilter: 'blur(16px)',
            transition: 'all 0.3s', marginBottom: '4rem',
          }}
        >
          {copied ? '✓ Copied to clipboard!' : '⎘ Copy email address'}
        </motion.button>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.9 }}
        >
          <div style={{
            fontFamily: 'Bebas Neue',
            fontSize: 'clamp(54px, 12vw, 180px)',
            lineHeight: 0.87, letterSpacing: '0.01em',
            userSelect: 'none',
          }}>
            <span style={{ color: '#FFFFFF' }}>LET'S<br /></span>
            <span style={{
              WebkitTextStroke: '3px #8B5CF6',
              WebkitTextFillColor: 'transparent',
            }}>TALK.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
