export default function AnimatedDecoration({ type = 'circle', position = 'top-left', color = '#2E5BFF', size = 100, delay = 0 }) {
  const positions = {
    'top-left': 'top-10 left-10',
    'top-right': 'top-10 right-10',
    'bottom-left': 'bottom-10 left-10',
    'bottom-right': 'bottom-10 right-10',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  const animations = {
    circle: 'animate-spin-slow',
    square: 'animate-bounce-slow',
    triangle: 'animate-pulse-slow'
  };

  const shapes = {
    circle: (
      <svg width={size} height={size} viewBox="0 0 100 100" className="opacity-5">
        <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="2" strokeDasharray="10,5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      </svg>
    ),
    square: (
      <svg width={size} height={size} viewBox="0 0 100 100" className="opacity-5">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="none" stroke={color} strokeWidth="2" />
        <rect x="25" y="25" width="50" height="50" rx="5" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      </svg>
    ),
    triangle: (
      <svg width={size} height={size} viewBox="0 0 100 100" className="opacity-5">
        <polygon points="50,10 90,80 10,80" fill="none" stroke={color} strokeWidth="2" />
        <polygon points="50,30 70,65 30,65" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="5,3" />
      </svg>
    )
  };

  return (
    <div
      className={`absolute ${positions[position]} pointer-events-none`}
      style={{
        animation: `${animations[type]} ${3 + delay}s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {shapes[type]}
    </div>
  );
}
