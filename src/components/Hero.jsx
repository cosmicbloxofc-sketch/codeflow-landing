import { useEffect, useState } from 'react';
import FloatingOrbs from './FloatingOrbs';

const AVATARS = [
  'https://i.pravatar.cc/40?img=11',
  'https://i.pravatar.cc/40?img=25',
  'https://i.pravatar.cc/40?img=33',
  'https://i.pravatar.cc/40?img=47',
];

function SocialProof() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex' }}>
        {AVATARS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              width: 28, height: 28, borderRadius: '50%', objectFit: 'cover',
              border: '2px solid #fff',
              marginLeft: i === 0 ? 0 : -8,
              boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
            }}
          />
        ))}
      </div>
      <span style={{ fontSize: 13, color: '#6B7280', fontWeight: 500 }}>
        <strong style={{ color: '#0A2540' }}>+100</strong> clientes usando agora
      </span>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
      opacity: 0.4, animation: 'bounce-fade 2s ease-in-out infinite',
    }}>
      <span style={{ fontSize: 11, color: '#6B7280', letterSpacing: '0.05em', textTransform: 'uppercase' }}>scroll</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M4 9l4 4 4-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <style>{`
        @keyframes bounce-fade {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(5px); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

export default function Hero({ onViewPlans, onHowItWorks }) {
  const primaryGradient = 'linear-gradient(135deg, #2E5BFF 0%, #0A2540 100%)';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.65s ease-out ${delay}s, transform 0.65s ease-out ${delay}s`,
  });

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center gap-8 px-5 md:px-10 lg:px-20 pt-24 md:pt-32 pb-16 overflow-hidden bg-white"
    >
      {/* FloatingOrbs Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <FloatingOrbs
          orbCount={6}
          minSize={150}
          maxSize={400}
          speed={1.8}
          colors={[
            'rgba(46, 91, 255, 0.18)',
            'rgba(91, 127, 255, 0.15)',
            'rgba(0, 212, 170, 0.12)',
            'rgba(46, 91, 255, 0.1)',
            'rgba(139, 92, 246, 0.08)',
            'rgba(59, 130, 246, 0.1)'
          ]}
        />
      </div>

      {/* Radial gradients */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[800px] z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(46,91,255,0.15) 0%, rgba(46,91,255,0) 50%)' }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[800px] z-10"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 60%, rgba(0,212,170,0.12) 0%, rgba(0,212,170,0) 50%)' }} />

      {/* H1 com 78% destacado */}
      <h1
        className="relative max-w-4xl text-center font-extrabold tracking-tight text-[#0A2540] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight z-20"
        style={fadeUp(0.22)}
      >
        Plano Max 20x<br />
        <span style={{
          background: 'linear-gradient(135deg, #2E5BFF 0%, #00D4AA 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Economize R$849/mês</span>
      </h1>

      {/* Subtítulo */}
      <p
        className="relative max-w-2xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-[#6B7280] z-20"
        style={fadeUp(0.34)}
      >
        Todos os modelos da Anthropic por uma fração do preço. Configure em minutos, use onde quiser. Suporte personalizado em português.
      </p>

      {/* CTAs */}
      <div
        className="relative mt-2 flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full max-w-md md:max-w-none md:w-auto z-20"
        style={fadeUp(0.46)}
      >
        <button
          type="button"
          onClick={onViewPlans}
          className={[
            'inline-flex h-14 items-center justify-center rounded-xl px-8 md:px-10',
            'text-white text-base md:text-lg font-semibold',
            'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),0_8px_32px_rgba(46,91,255,0.40)]',
            'transition-all duration-300 ease-out',
            'hover:scale-105 hover:-translate-y-0.5 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),0_12px_40px_rgba(46,91,255,0.53)]',
            'outline-2 outline-offset-2 outline-[#2E5BFF] focus-visible:outline',
          ].join(' ')}
          style={{ backgroundImage: primaryGradient }}
        >
          Ver Planos
        </button>
        <button
          type="button"
          onClick={onHowItWorks}
          className={[
            'inline-flex h-14 items-center justify-center rounded-xl px-8 md:px-10',
            'bg-white text-[#1A1A1A] text-base md:text-lg font-semibold',
            'border-2 border-[#E5E7EB]',
            'shadow-[0_4px_16px_rgba(0,0,0,0.08)]',
            'transition-all duration-300 ease-out',
            'hover:scale-105 hover:-translate-y-0.5 hover:border-[#2E5BFF] hover:shadow-[0_8px_24px_rgba(46,91,255,0.20)]',
            'outline-2 outline-offset-2 outline-[#2E5BFF] focus-visible:outline',
          ].join(' ')}
        >
          Como Funciona
        </button>
      </div>

      {/* Prova social */}
      <div className="relative z-20" style={fadeUp(0.58)}>
        <SocialProof />
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 mt-2" style={fadeUp(0.70)}>
        <ScrollIndicator />
      </div>
    </section>
  );
}
