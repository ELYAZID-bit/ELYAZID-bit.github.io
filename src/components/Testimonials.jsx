import { motion } from 'framer-motion';
import { TestimonialSlider } from './Carousel';

const testimonials = [
  {
    quote: "I had the pleasure of working with Adnane and appreciated his professionalism, motivation, and strong technical background in AI and data science. He quickly adapts to new challenges, demonstrates strong problem-solving abilities, and consistently delivers high-quality work with attention to detail. His combination of mathematical rigor and practical data science skills makes him a valuable contributor to technical projects. Adnane is a dedicated and reliable engineer, and I would gladly recommend him for opportunities in artificial intelligence and data science.",
    name: 'Asmaa Fillatre',
    role: 'Manager Data Science · PhD in NLP & AI',
    company: 'Amadeus',
    relation: 'Direct manager at Amadeus',
    initials: 'AF',
    color: '#8B5CF6',
  },
  {
    quote: "I had the opportunity to work with Adnane El Yazid during his studies at IMT Atlantique, where he is enrolled in the Mathematical and Computational Engineering program, a demanding curriculum combining applied mathematics, statistics, machine learning, and programming. Adnane consistently demonstrated excellent analytical skills and strong academic performance, notably achieving top grades in several advanced courses including Probability & Statistics, Numerical Methods, and Stochastic Modeling. Beyond academics, he has also gained valuable industry experience through internships at Amadeus and OPmobility. Adnane stands out for his rigor, curiosity, and ability to connect theoretical concepts with practical applications. I highly recommend him to any organization seeking a talented and dedicated engineer.",
    name: 'Elsa Dupraz',
    role: 'Responsable du pôle data AI',
    company: 'IMT Atlantique',
    relation: 'Professor and academic supervisor',
    initials: 'ED',
    color: '#F59E0B',
  },
];

function TestimonialCard({ item }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(24px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 24,
      padding: '2.8rem 3rem',
      maxWidth: 760,
      margin: '0 auto',
      position: 'relative',
      boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
    }}>
      {/* Giant quote mark */}
      <div style={{
        position: 'absolute', top: '1.2rem', left: '2rem',
        fontFamily: 'Bebas Neue', fontSize: '7rem', lineHeight: 0.7,
        color: item.color, opacity: 0.15, userSelect: 'none', pointerEvents: 'none',
        zIndex: 0,
      }}>"</div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: 4, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ fontSize: '1.1rem', color: '#F59E0B' }}>★</span>
        ))}
        <span style={{
          marginLeft: 8, fontFamily: 'var(--mono)', fontSize: '0.68rem',
          fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: item.color, background: `${item.color}15`,
          border: `1px solid ${item.color}35`, borderRadius: 50,
          padding: '0.2rem 0.7rem',
        }}>LinkedIn Recommendation</span>
      </div>

      {/* Quote */}
      <blockquote style={{
        fontFamily: 'var(--body)', fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
        lineHeight: 1.82, color: 'rgba(255,255,255,0.82)', fontStyle: 'italic',
        marginBottom: '2rem', position: 'relative', zIndex: 1,
      }}>
        "{item.quote}"
      </blockquote>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 1, marginBottom: '1.5rem' }} />

      {/* Person */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Initials avatar */}
        <div style={{
          width: 50, height: 50, borderRadius: '50%',
          background: `${item.color}25`,
          color: item.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Bebas Neue', fontSize: '1.3rem', letterSpacing: '0.05em',
          border: `2px solid ${item.color}50`, flexShrink: 0,
        }}>
          {item.initials}
        </div>
        <div>
          <div style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: '0.92rem', color: '#FFFFFF' }}>{item.name}</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.74rem', color: item.color, fontWeight: 600, marginTop: 2 }}>{item.role}</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)', marginTop: 1 }}>{item.company} · {item.relation}</div>
        </div>
        {/* LinkedIn mark */}
        <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
          <div style={{
            fontFamily: 'var(--mono)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#60A5FA', background: 'rgba(96,165,250,0.1)',
            border: '1px solid rgba(96,165,250,0.25)', borderRadius: 8,
            padding: '0.3rem 0.6rem',
          }}>in LinkedIn</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section--yellow" style={{ paddingBottom: '5.5rem', position: 'relative' }}>
      {/* Stripe decoration */}
      <div className="stripe-pattern" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 8, opacity: 0.3, pointerEvents: 'none' }} />

      <div className="container">
        <div className="sec-header">
          <div>
            <p className="sec-eyebrow sec-eyebrow--dark">Social Proof</p>
            <h2 className="sec-title">
              WHAT THEY<br />SAY.
            </h2>
          </div>
          <p className="sec-body sec-body--dark">
            Real LinkedIn recommendations from managers and colleagues who worked with me directly.
          </p>
        </div>

        {/* Counter strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', gap: 0, marginBottom: '2.5rem',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: 14, overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {[
            { value: '2', label: 'LinkedIn Recs' },
            { value: '100%', label: 'Positive' },
            { value: '2', label: 'Companies' },
          ].map((s, i) => (
            <div key={i} style={{
              flex: 1, padding: '1rem', textAlign: 'center',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{ fontFamily: 'Bebas Neue', fontSize: '1.8rem', color: '#F59E0B', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
        >
          <TestimonialSlider
            items={testimonials}
            renderItem={(item) => <TestimonialCard item={item} />}
            interval={6000}
          />
        </motion.div>
      </div>
    </section>
  );
}
