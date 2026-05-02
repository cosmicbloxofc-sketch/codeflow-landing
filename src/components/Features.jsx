import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const REVIEWS = [
  { id: 1, avatar: '/fotos/av1.webp', imageOnly: true },
  { id: 2, avatar: '/fotos/av2.webp', imageOnly: true },
  { id: 3, avatar: '/fotos/av3.jpg', imageOnly: true },
  { id: 4, avatar: '/fotos/av4.jpg', imageOnly: true },
  { id: 5, avatar: '/fotos/av5.jpg', imageOnly: true },
  { id: 6, avatar: '/fotos/av6.jpg', imageOnly: true },
  { id: 7, avatar: '/fotos/av7.jpg', imageOnly: true },
  { id: 8, avatar: '/fotos/av8.jpg', imageOnly: true },
  { id: 9, avatar: '/fotos/av2.webp', imageOnly: true },
  { id: 10, avatar: '/fotos/av3.jpg', imageOnly: true },
];

const CARD_W = 260;
const CARD_H = 220;
const GAP = 16;

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill="#F59E0B">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  if (review.imageOnly) {
    return (
      <div
        style={{
          width: CARD_W,
          height: CARD_H,
          borderRadius: 16,
          overflow: 'hidden',
          border: '2px solid #2E5BFF22',
          flexShrink: 0,
          boxShadow: '0 2px 8px rgba(46,91,255,0.05)',
        }}
      >
        <img src={review.avatar} alt="Avaliação" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        borderRadius: 16,
        border: '2px solid #2E5BFF22',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        flexShrink: 0,
        boxShadow: '0 2px 8px rgba(46,91,255,0.05)',
        padding: 16,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <Stars />
      <p style={{ fontSize: 11, lineHeight: 1.6, color: '#374151', flex: 1, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', margin: 0 }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 8, borderTop: '1px solid #F3F4F6' }}>
        <img src={review.avatar} alt={review.name} style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: '#0A2540', margin: 0 }}>{review.name}</p>
          <p style={{ fontSize: 10, color: '#9CA3AF', margin: 0 }}>{review.handle}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction = 'left', speed = 40 }) {
  // Duplicate cards to create seamless loop
  const items = [...reviews, ...reviews];
  const totalWidth = reviews.length * (CARD_W + GAP);
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div
      style={{ overflow: 'hidden', width: '100%' }}
      onMouseEnter={e => e.currentTarget.querySelector('.marquee-track').style.animationPlayState = 'paused'}
      onMouseLeave={e => e.currentTarget.querySelector('.marquee-track').style.animationPlayState = 'running'}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: GAP,
          width: 'max-content',
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {items.map((r, i) => (
          <ReviewCard key={`${r.id}-${i}`} review={r} />
        ))}
      </div>
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth + GAP}px); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-${totalWidth + GAP}px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function Features() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [igHovered, setIgHovered] = useState(false);

  const row1 = REVIEWS.slice(0, 5);
  const row2 = REVIEWS.slice(5, 10);

  return (
    <section id="recursos" style={{ padding: '40px 0 96px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 48, position: 'relative', overflow: 'hidden' }}>
      <div
        ref={titleRef}
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: '0 20px',
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      >
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: '#0A2540', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, textAlign: 'center', textShadow: '#2E5BFF33 0px 2px 40px', margin: 0 }}>
          Veja algumas de nossas avaliações
        </h2>
        <p style={{ color: '#6B7280', fontSize: 18, lineHeight: '28px', maxWidth: 600, textAlign: 'center', margin: 0 }}>
          Mais de centenas de devs já usam. Veja o que estão falando.
        </p>
        <a
          href="https://www.instagram.com/codeflowofc/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIgHovered(true)}
          onMouseLeave={() => setIgHovered(false)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 20px',
            borderRadius: 12, fontSize: 14, fontWeight: 600, background: '#FFFFFF',
            color: '#0A2540', border: '2px solid #D1D5DB', textDecoration: 'none',
            transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
            boxShadow: igHovered ? '0 4px 16px rgba(0,0,0,0.10)' : 'none',
            transform: igHovered ? 'translateY(-2px)' : 'translateY(0)',
            borderColor: igHovered ? '#A8A8A8' : '#D1D5DB',
          }}
        >
          <img
            src="/fotos/instagram.png"
            alt="Instagram"
            style={{
              width: 20, height: 20, objectFit: 'contain',
              transition: 'transform 0.25s ease',
              transform: igHovered ? 'rotate(8deg) scale(1.1)' : 'rotate(0) scale(1)',
            }}
          />
          Nosso Instagram
        </a>
      </div>

      {/* Marquee rows with edge fades */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <MarqueeRow reviews={row1} direction="left" speed={40} />
        <MarqueeRow reviews={row2} direction="right" speed={44} />

        {/* Left fade */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: 120, height: '100%',
          background: 'linear-gradient(to right, #ffffff, transparent)',
          pointerEvents: 'none', zIndex: 10,
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 120, height: '100%',
          background: 'linear-gradient(to left, #ffffff, transparent)',
          pointerEvents: 'none', zIndex: 10,
        }} />
      </div>
    </section>
  );
}
