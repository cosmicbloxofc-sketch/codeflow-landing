import ShinyText from './ShinyText';
import { useRef, useState, useEffect } from 'react';
import { trackMetaInitiateCheckout, trackMetaViewContent } from '../utils/analytics';

const PLANS = [
  {
    id: 'MAX20X',
    name: 'Plano MAX 20x',
    price: 'R$249',
    period: '/mês',
    description: 'Use o máximo do Claude Code',
    featured: true,
    features: [
      'Acesso a todos os modelos',
      'Use onde quiser, VS Code, terminal e etc',
      'API key individual',
      'Suporte personalizado',
      'Garantia de 7 dias',
    ],
  },
];

const standardCardStyle = {
  backgroundImage:
    'linear-gradient(in oklab 135deg, oklab(100% 0 -.0001 / 98%) 0%, oklab(98.4% -0.001 -0.003 / 95%) 100%)',
  backgroundOrigin: 'border-box',
  borderColor: '#2E5BFF26',
  borderRadius: '20px',
  borderStyle: 'solid',
  borderWidth: '2px',
  boxShadow: '#00000014 0px 12px 48px, #2E5BFF1A 0px 0px 0px 1px',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: '0%',
  flexDirection: 'column',
  flexGrow: '1',
  flexShrink: '1',
  gap: '24px',
  overflow: 'clip',
  position: 'relative',
  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
  cursor: 'pointer',
  maxWidth: '380px',
};

const featuredCardStyle = {
  backgroundImage:
    'linear-gradient(in oklab 135deg, oklab(59.8% -0.007 -0.218) 0%, oklab(40.4% -0.028 -0.090) 100%)',
  backgroundOrigin: 'border-box',
  borderColor: '#2E5BFF',
  borderRadius: '20px',
  borderStyle: 'solid',
  borderWidth: '3px',
  boxShadow:
    '#2E5BFF66 0px 20px 60px, #2E5BFF33 0px 0px 0px 2px, #2E5BFF26 0px 0px 80px',
  boxSizing: 'border-box',
  display: 'flex',
  flexBasis: '0%',
  flexDirection: 'column',
  flexGrow: '1',
  flexShrink: '1',
  gap: '24px',
  overflow: 'clip',
  position: 'relative',
  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
  cursor: 'pointer',
  maxWidth: '380px',
};

const CTA_STYLES = {
  PRO: {
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246) 0%, oklab(26% -0.019 -0.057) 100%)',
    backgroundOrigin: 'border-box',
    borderColor: '#2E5BFF',
    borderRadius: '12px',
    borderStyle: 'solid',
    borderWidth: '2px',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: '0',
    height: '48px',
    justifyContent: 'center',
    marginTop: 'auto',
    overflow: 'clip',
    position: 'relative',
    width: '100%',
  },
  MAX5X: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    backgroundImage:
      'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246) 0%, oklab(52.8% -0.038 -0.115) 100%)',
    border: 'none',
    borderRadius: '12px',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: '0',
    height: '48px',
    justifyContent: 'center',
    marginTop: 'auto',
    overflow: 'clip',
    position: 'relative',
    width: '100%',
  },
  MAX20X: {
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246) 0%, oklab(26% -0.019 -0.057) 100%)',
    border: 'none',
    borderRadius: '12px',
    boxSizing: 'border-box',
    display: 'flex',
    flexShrink: '0',
    height: '48px',
    justifyContent: 'center',
    marginTop: 'auto',
    overflow: 'clip',
    position: 'relative',
    width: '100%',
  },
};

function StandardDecorations({ gradientId }) {
  return (
    <div
      aria-hidden="true"
      style={{
        boxSizing: 'border-box',
        height: '100%',
        left: '0px',
        overflow: 'clip',
        position: 'absolute',
        top: '0px',
        width: '100%',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle farthest-corner at 80% 19.999999999999996% in oklab, oklab(55.2% -0.017 -0.246 / 12%) 0%, oklab(0% 0 -.0001 / 0%) 60%)',
          boxSizing: 'border-box',
          height: '200px',
          position: 'absolute',
          right: '-50px',
          top: '-50px',
          width: '200px',
        }}
      />
      <div
        style={{
          backgroundImage:
            'radial-gradient(circle farthest-corner at 20% 80% in oklab, oklab(77.5% -0.149 0.022 / 8%) 0%, oklab(0% -.0001 0 / 0%) 60%)',
          bottom: '-50px',
          boxSizing: 'border-box',
          height: '200px',
          left: '-50px',
          position: 'absolute',
          width: '200px',
        }}
      />
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(46, 91, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(0, 212, 170, 0.1)" />
          </linearGradient>
        </defs>
        <circle cx="15%" cy="25%" r="4" fill={`url(#${gradientId})`} />
        <circle cx="85%" cy="75%" r="3" fill={`url(#${gradientId})`} />
        <path d="M10,50 Q30,40 50,50" stroke={`url(#${gradientId})`} fill="none" />
        <rect x="80%" y="10%" width="30" height="30" rx="5" fill="none" stroke={`url(#${gradientId})`} style={{ opacity: '0.5' }} />
      </svg>
    </div>
  );
}

function FeaturedDecorations() {
  return (
    <>
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(55.2% -0.017 -0.246 / 50%) 0%, oklab(0% 0 -.0001 / 0%) 70%)',
          borderRadius: '50%',
          boxSizing: 'border-box',
          filter: 'blur(80px)',
          height: '400px',
          left: '50%',
          opacity: '0.5',
          position: 'absolute',
          top: '50%',
          translate: '-50% -50%',
          width: '500px',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          boxSizing: 'border-box',
          height: '100%',
          left: '0px',
          overflow: 'clip',
          position: 'absolute',
          top: '0px',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            backgroundImage:
              'radial-gradient(circle farthest-corner at 30% 30.000000000000004% in oklab, oklab(100% 0 0 / 40%) 0%, oklab(0% 0 0 / 0%) 50%)',
            borderRadius: '50%',
            boxSizing: 'border-box',
            filter: 'blur(40px)',
            height: '250px',
            left: '-50px',
            position: 'absolute',
            top: '-50px',
            width: '250px',
          }}
        />
        <div
          style={{
            backgroundImage:
              'radial-gradient(circle farthest-corner at 70% 70% in oklab, oklab(77.5% -0.149 0.022 / 20%) 0%, oklab(0% -.0001 0 / 0%) 50%)',
            borderRadius: '50%',
            bottom: '-50px',
            boxSizing: 'border-box',
            filter: 'blur(50px)',
            height: '300px',
            position: 'absolute',
            right: '-50px',
            width: '300px',
          }}
        />
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="_plans_featured_a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(0, 212, 170, 0.4)" />
            </linearGradient>
          </defs>
          <circle cx="10%" cy="20%" r="5" fill="url(#_plans_featured_a)" />
          <circle cx="90%" cy="30%" r="4" fill="url(#_plans_featured_a)" />
          <circle cx="15%" cy="80%" r="3" fill="url(#_plans_featured_a)" />
          <circle cx="85%" cy="85%" r="6" fill="url(#_plans_featured_a)" style={{ opacity: '0.5' }} />
          <path d="M20,40 Q40,30 60,40 T100,40" stroke="url(#_plans_featured_a)" strokeWidth="2" fill="none" />
          <path d="M80,60 Q100,50 120,60" stroke="url(#_plans_featured_a)" strokeWidth="1.5" fill="none" style={{ opacity: '0.6' }} />
          <rect x="70%" y="15%" width="40" height="40" rx="8" fill="none" stroke="url(#_plans_featured_a)" strokeWidth="1.5" transform="rotate(15)" style={{ opacity: '0.4' }} />
        </svg>
        <div
          style={{
            backgroundImage:
              'linear-gradient(in oklab 90deg, oklab(0% 0 0 / 0%) 0%, oklab(100% 0 0 / 30%) 50%, oklab(0% 0 0 / 0%) 100%)',
            boxSizing: 'border-box',
            height: '100%',
            left: 'round(-100%, 1px)',
            position: 'absolute',
            top: '0px',
            width: 'round(50%, 1px)',
          }}
        />
      </div>
    </>
  );
}

function PlanCard({ plan, onPlanClick }) {
  const { id, name, price, period, description, features, featured } = plan;
  const cardStyle = featured ? featuredCardStyle : standardCardStyle;
  const nameColor = featured
    ? { color: '#FFFFFF', opacity: '0.9' }
    : { color: '#6B7280' };
  const priceColor = featured ? '#FFFFFF' : '#0A2540';
  const periodStyle = featured
    ? { color: '#FFFFFF', opacity: '0.8' }
    : { color: '#6B7280' };
  const descriptionStyle = featured
    ? { color: '#FFFFFF', opacity: '0.9' }
    : { color: '#6B7280' };
  const featureTextColor = featured ? '#FFFFFF' : '#1A1A1A';
  const dividerColor = featured ? '#FFFFFF33' : '#E5E7EB';
  const spotlightColor = featured
    ? 'rgba(255, 255, 255, 0.4)'
    : 'rgba(46, 91, 255, 0.35)';

  // Spotlight effect state
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = e => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setIsHovered(false);
  };

  const getCardStyle = () => {
    const baseStyle = { ...cardStyle };

    if (isHovered) {
      baseStyle.transform = 'translateY(-8px) scale(1.02)';
      if (featured) {
        baseStyle.boxShadow = '#2E5BFF80 0px 28px 80px, #2E5BFF50 0px 0px 0px 3px, #2E5BFF40 0px 0px 120px';
      } else {
        baseStyle.boxShadow = '#00000020 0px 20px 60px, #2E5BFF40 0px 0px 0px 2px';
      }
    }

    return baseStyle;
  };

  return (
    <div
      ref={divRef}
      data-plan-id={id}
      data-featured={featured ? 'true' : undefined}
      className="p-6 md:p-12"
      style={getCardStyle()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`
        }}
      />

      {/* Content (relative positioning to stay above spotlight) */}
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            boxSizing: 'border-box',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            lineHeight: '20px',
            textTransform: 'uppercase',
            ...nameColor,
          }}
        >
          {name}
        </div>
        <div style={{ alignItems: 'baseline', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
          <div
            className="text-[40px] sm:text-[48px] md:text-[56px]"
            style={{
              boxSizing: 'border-box',
              color: priceColor,
              fontFamily: '"Inter", system-ui, sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
            }}
          >
            {price}
          </div>
          <div
            className="text-base sm:text-lg"
            style={{
              boxSizing: 'border-box',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: '22px',
              ...periodStyle,
            }}
          >
            {period}
          </div>
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
            ...descriptionStyle,
          }}
        >
          {description}
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{ backgroundColor: dividerColor, boxSizing: 'border-box', flexShrink: '0', height: '1px', width: '100%', position: 'relative', zIndex: 1 }}
      />

      <ul
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {features.map((feature, i) => (
          <li key={i} style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
            <div
              aria-hidden="true"
              style={{
                boxSizing: 'border-box',
                color: '#00D4AA',
                flexShrink: '0',
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '20px',
                lineHeight: '24px',
              }}
            >
              ✓
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                color: featureTextColor,
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
              }}
            >
              {feature}
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => {
          trackMetaInitiateCheckout({ planId: id, planName: name, value: 249 });
          onPlanClick(id);
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(46, 91, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.95)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        style={{
          ...CTA_STYLES[id],
          position: 'relative',
          zIndex: 1,
          transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
          cursor: 'pointer',
        }}
      >
        <div
          className="text-base sm:text-lg"
          style={{
            boxSizing: 'border-box',
            color: '#FFFFFF',
            display: 'flex',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: '22px',
          }}
        >
          Começar Agora
        </div>
      </button>

      {featured ? <FeaturedDecorations /> : <StandardDecorations gradientId={`_plans_${id}_decor`} />}
    </div>
  );
}

export default function Plans({ onPlanClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          trackMetaViewContent({ planId: 'MAX20X', planName: 'Plano MAX 20x', value: 249 });
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="planos"
      className="px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-28"
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '64px',
        position: 'relative',
        scrollMarginTop: '80px',
      }}
    >
      <div
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            boxSizing: 'border-box',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            textAlign: 'center',
            textShadow: '#2E5BFF33 0px 2px 40px',
            whiteSpaceCollapse: 'preserve',
          }}
        >
          <ShinyText
            text="Escolha seu plano"
            speed={3}
            delay={1}
            color="#0A2540"
            shineColor="#2E5BFF"
            spread={90}
            direction="left"
          />
        </h2>
        <p
          style={{
            boxSizing: 'border-box',
            color: '#6B7280',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '18px',
            lineHeight: '28px',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          Todos os planos incluem acesso completo ao Claude Code. Escolha a quantidade de uso que você precisa.
        </p>
      </div>

      <div
        className="plans-grid"
        style={{
          boxSizing: 'border-box',
          gap: '32px',
          width: '100%',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
        }}
      >
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} onPlanClick={onPlanClick} />
        ))}
      </div>

      <svg
        aria-hidden="true"
        width="600"
        height="400"
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ left: '-50px', opacity: '0.03', position: 'absolute', top: '50px', pointerEvents: 'none' }}
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="#2E5BFF" strokeWidth="2" />
        <rect x="400" y="200" width="130" height="130" rx="18" fill="none" stroke="#00D4AA" strokeWidth="2" transform="rotate(-12 465 265)" />
        <path d="M50 300 Q150 250 250 300" fill="none" stroke="#2E5BFF" strokeWidth="2" />
      </svg>
      <svg
        aria-hidden="true"
        width="500"
        height="400"
        viewBox="0 0 500 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: '0.03', position: 'absolute', right: '-80px', top: '100px', pointerEvents: 'none' }}
      >
        <circle cx="400" cy="100" r="90" fill="none" stroke="#00D4AA" strokeWidth="2" />
        <rect x="50" y="200" width="110" height="110" rx="14" fill="none" stroke="#2E5BFF" strokeWidth="2" transform="rotate(18 105 255)" />
        <path d="M200 50 L250 100 L300 50" fill="none" stroke="#2E5BFF" strokeWidth="2" />
      </svg>
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle farthest-corner at 50% 50% in oklab, oklab(55.2% -0.017 -0.246 / 8%) 0%, oklab(0% 0 -.0001 / 0%) 70%)',
          boxSizing: 'border-box',
          height: '100%',
          left: '0px',
          position: 'absolute',
          top: '0px',
          width: '100%',
          pointerEvents: 'none',
        }}
      />
      <svg
        aria-hidden="true"
        width="100%"
        height="100%"
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ left: '0px', opacity: '0.06', position: 'absolute', top: '0px', pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id="_plans_bg_lines" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E5BFF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#00D4AA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2E5BFF" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="150" r="100" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="2" strokeDasharray="10,5" />
        <circle cx="1100" cy="250" r="130" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="3" strokeDasharray="15,8" />
        <circle cx="720" cy="100" r="80" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="2" strokeDasharray="5,3" />
        <rect x="150" y="300" width="150" height="150" rx="20" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="2" transform="rotate(25 225 375)" />
        <rect x="1000" y="50" width="120" height="120" rx="15" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="2" transform="rotate(-20 1060 110)" />
        <polygon points="500,350 550,300 600,350 550,400" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="2" />
        <polygon points="850,400 900,350 950,400 900,450" fill="none" stroke="url(#_plans_bg_lines)" strokeWidth="2" />
        <path d="M100,100 Q250,50 400,100 T700,100" stroke="url(#_plans_bg_lines)" strokeWidth="2" fill="none" />
        <path d="M750,300 Q900,250 1050,300 T1350,300" stroke="url(#_plans_bg_lines)" strokeWidth="2" fill="none" />
        <path d="M200,450 L250,400 L300,450 L350,400" stroke="url(#_plans_bg_lines)" strokeWidth="2" fill="none" />
        <circle cx="600" cy="250" r="5" fill="url(#_plans_bg_lines)" />
        <circle cx="450" cy="200" r="4" fill="url(#_plans_bg_lines)" />
        <circle cx="950" cy="150" r="6" fill="url(#_plans_bg_lines)" />
      </svg>
    </section>
  );
}

export { PLANS };
