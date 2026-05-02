import { useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '5537999830575';
const whatsappLink =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Ainda tenho dúvidas sobre o CodeFlow e queria falar pelo WhatsApp.')}`;

export default function FinalCta() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Adiciona a animação de pulse ao documento
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
          box-shadow: #2E5BFF1A 0px 0px 0px 1px inset, #FFFFFF4D 0px 8px 32px;
        }
        50% {
          transform: scale(1.05);
          box-shadow: #2E5BFF1A 0px 0px 0px 1px inset, #FFFFFF4D 0px 12px 40px, 0 0 0 8px rgba(255, 255, 255, 0.1);
        }
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta-final"
      className="px-5 md:px-10 lg:px-20 py-16 md:py-20 lg:py-24"
      style={{
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246) 0%, oklab(26% -0.019 -0.057) 100%)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        position: 'relative',
      }}
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl"
        style={{
          boxSizing: 'border-box',
          color: '#FFFFFF',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          maxWidth: '800px',
          textAlign: 'center',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        Ainda com dúvidas sobre o CodeFlow?
      </h2>
      <p
        style={{
          boxSizing: 'border-box',
          color: '#FFFFFF',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '20px',
          lineHeight: '32px',
          maxWidth: '600px',
          opacity: isVisible ? '0.9' : '0',
          textAlign: 'center',
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
        }}
      >
        Chame a gente no WhatsApp e tire suas dúvidas antes de começar.
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '#2E5BFF1A 0px 0px 0px 1px inset, #FFFFFF4D 0px 8px 32px',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'flex',
          flexShrink: '0',
          height: '64px',
          justifyContent: 'center',
          marginTop: '8px',
          paddingInline: '48px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s',
          animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.animation = 'none';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animation = 'pulse 2s ease-in-out infinite';
        }}
      >
        <span
          style={{
            boxSizing: 'border-box',
            color: '#2E5BFF',
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '22px',
          }}
        >
          Chamar no WhatsApp
        </span>
      </a>
      <p
        style={{
          boxSizing: 'border-box',
          color: '#FFFFFF',
          fontFamily: '"Inter", system-ui, sans-serif',
          fontSize: '14px',
          lineHeight: '18px',
          opacity: isVisible ? '0.7' : '0',
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s',
        }}
      >
        
      </p>
    </section>
  );
}
