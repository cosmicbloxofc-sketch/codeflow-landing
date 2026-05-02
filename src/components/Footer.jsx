const WHATSAPP_NUMBER = '5537999830575';
const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const linkStyle = {
  boxSizing: 'border-box',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontFamily: '"Inter", system-ui, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '18px',
  opacity: '0.8',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease, transform 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
};

function FooterLink({ href, target, rel, children, style }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{ ...linkStyle, ...style }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = '0.8';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-5 md:px-10 lg:px-20 py-10 md:py-14"
      style={{
        alignItems: 'center',
        backgroundColor: '#0A2540',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '8px' }}>
        <div
          aria-hidden="true"
          style={{
            alignItems: 'center',
            backgroundImage: 'linear-gradient(in oklab 135deg, oklab(55.2% -0.017 -0.246) 0%, oklab(77.5% -0.149 0.022) 100%)',
            borderRadius: '8px',
            boxSizing: 'border-box',
            display: 'flex',
            flexShrink: '0',
            height: '40px',
            justifyContent: 'center',
            width: '40px',
          }}
        >
          <span style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: '24px' }}>
            C
          </span>
        </div>
        <span style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '30px' }}>
          CodeFlow
        </span>
      </div>

      <p style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '20px', opacity: '0.7', textAlign: 'center' }}>
        Claude Code acessível para desenvolvedores brasileiros
      </p>

      {/* Social links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <FooterLink href="https://www.instagram.com/codeflowofc/" target="_blank" rel="noopener noreferrer" style={{ gap: 6 }}>
          <img src="/fotos/instagram.png" alt="" style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.8 }} />
          Instagram
        </FooterLink>
        <FooterLink href={waLink('Olá! Gostaria de falar com o time do CodeFlow.')} target="_blank" rel="noopener noreferrer" style={{ gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.8 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </FooterLink>
      </div>

      {/* Institutional links */}
      <nav aria-label="Links institucionais" style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <FooterLink href="/termos.html">Termos de Uso</FooterLink>
        <FooterLink href="/privacidade.html">Política de Privacidade</FooterLink>
        <FooterLink href={waLink('Olá! Gostaria de falar com o time do CodeFlow.')} target="_blank" rel="noopener noreferrer">Contato</FooterLink>
      </nav>

      <div aria-hidden="true" style={{ backgroundColor: '#FFFFFF1A', boxSizing: 'border-box', flexShrink: '0', height: '1px', marginTop: '16px', width: '100%' }} />

      <p style={{ boxSizing: 'border-box', color: '#FFFFFF', fontFamily: '"Inter", system-ui, sans-serif', fontSize: '14px', lineHeight: '18px', opacity: '0.6' }}>
        © {year} CodeFlow. Todos os direitos reservados.
      </p>
    </footer>
  );
}
