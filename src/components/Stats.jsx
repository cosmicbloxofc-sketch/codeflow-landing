import { Fragment, useRef, useState, useEffect } from 'react';
import CountUp from './CountUp';

const STATS = [
  {
    value: 100,
    suffix: '+',
    label: 'Clientes Ativos',
    glow: 'oklab(55.2% -0.017 -0.246 / 15%)',
  },
  {
    value: 78,
    suffix: '%',
    label: 'de Economia',
    glow: 'oklab(77.5% -0.149 0.022 / 15%)',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfação',
    glow: 'oklab(55.2% -0.017 -0.246 / 15%)',
  },
];

const valueStyle = {
  backgroundClip: 'text',
  backgroundColor: '#2E5BFF',
  backgroundImage:
    'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246) 0%, oklab(77.5% -0.149 0.022) 100%)',
  boxSizing: 'border-box',
  color: 'transparent',
  fontFamily: '"Inter", system-ui, sans-serif',
  fontWeight: 800,
  letterSpacing: '-0.02em',
};

const labelStyle = {
  boxSizing: 'border-box',
  color: '#6B7280',
  fontFamily: '"Inter", system-ui, sans-serif',
  fontWeight: 500,
};

const dividerStyle = {
  backgroundColor: '#E5E7EB',
  boxSizing: 'border-box',
  flexShrink: '0',
  width: '1px',
};

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="px-5 md:px-10 lg:px-20 pt-6 pb-10 md:pb-16"
      style={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <p
        className="text-xs md:text-sm"
        style={{
          boxSizing: 'border-box',
          color: '#6B7280',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.1em',
          lineHeight: 1.3,
          textTransform: 'uppercase',
        }}
      >
        Confiado por desenvolvedores em todo Brasil
      </p>
      <div
        className="flex-row flex-wrap md:flex-nowrap"
        style={{
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {STATS.map((stat, i) => (
          <Fragment key={stat.label}>
            <div
              style={{
                alignItems: 'center',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                position: 'relative',
              }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl leading-tight" style={valueStyle}>
                <CountUp
                  from={0}
                  to={stat.value}
                  duration={1.5}
                  separator={stat.separator || ''}
                  className="inline"
                />
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm lg:text-base" style={labelStyle}>{stat.label}</div>
              <div
                aria-hidden="true"
                className="hidden md:block"
                style={{
                  backgroundImage: `radial-gradient(circle farthest-corner at 50% 50% in oklab, ${stat.glow} 0%, oklab(0% 0 -.0001 / 0%) 70%)`,
                  borderRadius: '50%',
                  boxSizing: 'border-box',
                  filter: 'blur(40px)',
                  height: '150px',
                  left: '50%',
                  opacity: '0.6',
                  position: 'absolute',
                  top: '50%',
                  translate: '-50% -50%',
                  width: '150px',
                }}
              />
            </div>
            {i < STATS.length - 1 && <div aria-hidden="true" className="h-10 md:h-14" style={dividerStyle} />}
          </Fragment>
        ))}
      </div>
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(in oklab 90deg, oklab(55.2% -0.017 -0.246 / 10%) 0%, oklab(77.5% -0.149 0.022 / 10%) 100%)',
          borderRadius: '24px',
          boxSizing: 'border-box',
          filter: 'blur(30px)',
          height: '120%',
          left: '-10%',
          opacity: '0.6',
          position: 'absolute',
          top: '-10%',
          width: '120%',
        }}
      />
    </section>
  );
}
