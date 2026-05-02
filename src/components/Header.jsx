import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkStyle = {
    fontSize: 15,
    fontWeight: 500,
    color: '#4B5563',
    textDecoration: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px 0',
    transition: 'color 0.2s ease',
    fontFamily: '"Inter", system-ui, sans-serif',
  };

  return (
    <header
      className={[
        'sticky top-0 z-[1000] w-full flex items-center justify-between',
        'h-[70px] md:h-20 px-5 md:px-10 lg:px-20',
        'border-b border-[#E5E7EB] backdrop-blur-md',
        'transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.10)]'
          : 'bg-white/85 shadow-[0_4px_24px_rgba(0,0,0,0.06)]',
      ].join(' ')}
    >
      {/* Logo + Nav */}
      <div className="flex items-center gap-8">
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Ir para o topo"
          className="flex items-center gap-2 rounded-lg outline-2 outline-offset-2 outline-[#2E5BFF] focus-visible:outline"
        >
          <span
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-white text-xl font-bold"
            style={{ backgroundImage: 'linear-gradient(135deg, #2E5BFF 0%, #0A2540 100%)' }}
            aria-hidden="true"
          >
            C
          </span>
          <span className="font-[Inter,system-ui,sans-serif] text-2xl font-bold tracking-tight text-[#0A2540]">
            CodeFlow
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          <button type="button" style={navLinkStyle} onClick={() => scrollToSection('como-funciona')} onMouseEnter={e => e.currentTarget.style.color = '#2E5BFF'} onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}>Como Funciona</button>
          <button type="button" style={navLinkStyle} onClick={() => scrollToSection('planos')} onMouseEnter={e => e.currentTarget.style.color = '#2E5BFF'} onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}>Planos</button>
          <button type="button" style={navLinkStyle} onClick={() => scrollToSection('faq')} onMouseEnter={e => e.currentTarget.style.color = '#2E5BFF'} onMouseLeave={e => e.currentTarget.style.color = '#4B5563'}>FAQ</button>
        </nav>
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={() => scrollToSection('planos')}
        className={[
          'inline-flex h-12 items-center justify-center rounded-lg px-6 md:px-8',
          'bg-[#2E5BFF] text-white font-semibold text-sm md:text-base',
          'shadow-[0_4px_16px_rgba(46,91,255,0.30)]',
          'transition-all duration-300 ease-out',
          'hover:scale-105 hover:shadow-[0_6px_24px_rgba(46,91,255,0.40)]',
          'outline-2 outline-offset-2 outline-[#2E5BFF] focus-visible:outline',
        ].join(' ')}
      >
        Começar Agora
      </button>
    </header>
  );
}
