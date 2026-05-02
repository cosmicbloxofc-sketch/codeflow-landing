import BorderGlow from './BorderGlow';
import TiltedCard from './TiltedCard';
import FloatingOrbs from './FloatingOrbs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconGradientIds = ['_q1', '_q2', '_q3', '_q4', '_q5', '_q6'];

const QUESTIONS = [
  {
    id: iconGradientIds[0],
    question: 'É realmente o Claude Code oficial?',
    answer: 'Sim. Você usa os mesmos modelos da Anthropic — Opus 4.7, Sonnet 4.6, Haiku 4.5 — com os mesmos limites do plano Max 20x. A única diferença é o preço: R$ 249/mês em vez de R$ 1.100.',
    icon: (gid) => (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
        <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2E5BFF"/><stop offset="100%" stopColor="#0A2540"/></linearGradient></defs>
        <circle cx="16" cy="16" r="14" fill={`url(#${gid})`} style={{ opacity: '0.1' }} />
        <path d="M8 16l5 5 11-11" stroke={`url(#${gid})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="16" r="12" fill="none" stroke={`url(#${gid})`} style={{ opacity: '0.2' }} />
      </svg>
    ),
  },
  {
    id: iconGradientIds[1],
    question: 'Como funciona? Preciso criar uma conta?',
    answer: 'Não é por login. Você recebe uma API key, cola no Claude Code e usa normalmente. A gente manda tutorial completo e, se precisar, resolve junto via call.',
    icon: (gid) => (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
        <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2E5BFF"/><stop offset="100%" stopColor="#0A2540"/></linearGradient></defs>
        <circle cx="16" cy="16" r="14" fill={`url(#${gid})`} style={{ opacity: '0.1' }} />
        <rect x="8" y="10" width="16" height="12" rx="2" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
        <path d="M12 10V8a4 4 0 018 0v2" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="16" cy="16" r="2" fill={`url(#${gid})`} />
      </svg>
    ),
  },
  {
    id: iconGradientIds[2],
    question: 'O acesso é individual?',
    answer: 'Sim, acesso individual. Funciona em quantos dispositivos seus você quiser — Windows, Mac ou Linux. Só não pode compartilhar a chave com outras pessoas.',
    icon: (gid) => (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
        <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2E5BFF"/><stop offset="100%" stopColor="#0A2540"/></linearGradient></defs>
        <circle cx="16" cy="16" r="14" fill={`url(#${gid})`} style={{ opacity: '0.1' }} />
        <circle cx="16" cy="11" r="4" fill={`url(#${gid})`} />
        <path d="M8 24c0-4 3.6-7 8-7s8 3 8 7" fill={`url(#${gid})`} style={{ opacity: '0.7' }} />
      </svg>
    ),
  },
  {
    id: iconGradientIds[3],
    question: 'Onde posso usar?',
    answer: 'App desktop, VS Code, Cursor, Windsurf, JetBrains e qualquer IDE que suporte Claude Code. Também funciona direto no terminal. Não é extensão de navegador.',
    icon: (gid) => (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
        <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2E5BFF"/><stop offset="100%" stopColor="#0A2540"/></linearGradient></defs>
        <circle cx="16" cy="16" r="14" fill={`url(#${gid})`} style={{ opacity: '0.1' }} />
        <rect x="6" y="8" width="20" height="13" rx="2" fill="none" stroke={`url(#${gid})`} strokeWidth="2" />
        <path d="M11 24h10M16 21v3" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" />
        <path d="M10 13l3 3-3 3" stroke={`url(#${gid})`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: iconGradientIds[4],
    question: 'Tem os mesmos limites do Max 20x?',
    answer: 'Sim. Os mesmos limites de uso do plano Max 20x oficial da Anthropic. Sem cortes, sem throttling artificial.',
    icon: (gid) => (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
        <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2E5BFF"/><stop offset="100%" stopColor="#0A2540"/></linearGradient></defs>
        <circle cx="16" cy="16" r="14" fill={`url(#${gid})`} style={{ opacity: '0.1' }} />
        <path d="M16 6l2 7h7l-6 4 2 7-5-4-5 4 2-7-6-4h7z" fill={`url(#${gid})`} />
      </svg>
    ),
  },
  {
    id: iconGradientIds[5],
    question: 'E se não funcionar pra mim?',
    answer: 'Garantia de 7 dias. Se não funcionar por qualquer motivo, você recebe 100% do dinheiro de volta na mesma hora. Sem burocracia.',
    icon: (gid) => (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
        <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#2E5BFF"/><stop offset="100%" stopColor="#0A2540"/></linearGradient></defs>
        <circle cx="16" cy="16" r="14" fill={`url(#${gid})`} style={{ opacity: '0.1' }} />
        <path d="M16 6l8 4v7c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V10z" fill={`url(#${gid})`} style={{ opacity: '0.8' }} />
        <path d="M11 16l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

function QuestionCard({ item, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <TiltedCard containerHeight="100%" containerWidth="100%" scaleOnHover={1.02} rotateAmplitude={7}>
        <BorderGlow
          edgeSensitivity={40}
          glowColor="220 70 60"
          backgroundColor="transparent"
          borderRadius={16}
          glowRadius={30}
          glowIntensity={1.4}
          coneSpread={20}
          colors={['#2E5BFF', '#00D4AA', '#5B7FFF']}
          fillOpacity={0.3}
          className="h-full"
        >
          <article className="px-4 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8" style={{ backgroundImage: 'linear-gradient(in oklab 135deg, oklab(100% 0 -.0001 / 95%) 0%, oklab(96.7% 0 -0.015 / 90%) 100%)', backgroundOrigin: 'border-box', borderColor: '#2E5BFF33', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', boxShadow: '#0000000F 0px 8px 32px, #2E5BFF1A 0px 0px 0px 1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', minHeight: '200px', overflow: 'clip', position: 'relative' }}>
            <div className="w-10 h-10 sm:w-14 sm:h-14" style={{ alignItems: 'center', backdropFilter: 'blur(10px)', backgroundImage: 'linear-gradient(in oklab 135deg, oklab(96.7% 0 -0.015 / 80%) 0%, oklab(100% 0 -.0001 / 90%) 100%)', borderRadius: '12px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', justifyContent: 'center' }}>
              {item.icon(item.id)}
            </div>
            <h3 className="text-base sm:text-xl" style={{ boxSizing: 'border-box', color: '#0A2540', fontFamily: '"Inter", system-ui, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.25, margin: 0 }}>
              {item.question}
            </h3>
            <p className="text-xs sm:text-base" style={{ boxSizing: 'border-box', color: '#6B7280', fontFamily: '"Inter", system-ui, sans-serif', lineHeight: 1.5, margin: 0 }}>
              {item.answer}
            </p>
            <div aria-hidden="true" style={{ boxSizing: 'border-box', height: '100%', left: '0px', overflow: 'clip', position: 'absolute', top: '0px', width: '100%', pointerEvents: 'none' }}>
              <div style={{ backgroundImage: 'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246 / 10%) 0%, oklab(0% 0 -.0001 / 0%) 50%)', borderRadius: '50%', boxSizing: 'border-box', filter: 'blur(30px)', height: '150px', left: '-30px', position: 'absolute', top: '-30px', width: '150px' }} />
              <div style={{ backgroundImage: 'linear-gradient(in oklab 225deg, oklab(77.5% -0.149 0.022 / 8%) 0%, oklab(0% -.0001 0 / 0%) 50%)', borderRadius: '50%', bottom: '-30px', boxSizing: 'border-box', filter: 'blur(30px)', height: '150px', position: 'absolute', right: '-30px', width: '150px' }} />
            </div>
          </article>
        </BorderGlow>
      </TiltedCard>
    </div>
  );
}

export default function HowItWorks() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      id="como-funciona"
      className="px-5 md:px-10 lg:px-20 pt-16 md:pt-20 lg:pt-28 pb-[220px]"
      style={{ backgroundColor: '#F8FAFC', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '64px', position: 'relative', overflow: 'visible' }}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <FloatingOrbs
          orbCount={4}
          minSize={200}
          maxSize={350}
          speed={0.2}
          colors={['rgba(46,91,255,0.08)', 'rgba(91,127,255,0.06)', 'rgba(0,212,170,0.05)', 'rgba(139,92,246,0.04)']}
        />
      </div>

      <div
        ref={titleRef}
        className="relative z-10"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{ color: '#0A2540', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, textAlign: 'center', textShadow: '#2E5BFF33 0px 2px 40px' }}
        >
          Suas dúvidas, respondidas
        </h2>
        <p style={{ color: '#6B7280', fontSize: '18px', lineHeight: '28px', maxWidth: '600px', textAlign: 'center' }}>
          As perguntas que todo mundo faz antes de comprar — respondidas de forma direta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
        {QUESTIONS.map((q, i) => (
          <QuestionCard key={q.id} item={q} index={i} />
        ))}
      </div>

      <div aria-hidden="true" style={{ bottom: '-80px', height: '200px', left: 0, pointerEvents: 'none', position: 'absolute', width: '100%', zIndex: 10 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="_hw_wave" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#2E5BFF" stopOpacity="0.9"/><stop offset="30%" stopColor="#00D4AA" stopOpacity="0.8"/><stop offset="70%" stopColor="#5B7FFF" stopOpacity="0.85"/><stop offset="100%" stopColor="#2E5BFF" stopOpacity="0.9"/></linearGradient></defs>
          <path d="M0,60 Q360,20 720,60 T1440,60 L1440,140 Q1080,180 720,140 T0,140 Z" fill="url(#_hw_wave)" />
          <path d="M0,60 Q360,20 720,60 T1440,60" stroke="#FFFFFF66" strokeWidth="3" fill="none" />
          <path d="M0,140 Q360,180 720,140 T1440,140" stroke="#FFFFFF66" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </section>
  );
}
