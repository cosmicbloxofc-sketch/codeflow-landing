import { useState, useEffect, useRef } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    // Gera partículas flutuantes
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Parallax com mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 100,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 100
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Integração com serviço de newsletter
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const posts = [
    {
      category: 'Tecnologia',
      readTime: '5 min de leitura',
      title: 'O futuro da inteligência artificial no desenvolvimento web',
      excerpt: 'Exploramos como a IA está transformando a forma como construímos aplicações modernas.',
      date: '23 de Abril, 2026',
      likes: 342,
      comments: 89,
      shares: '2.1k'
    },
    {
      category: 'Design',
      readTime: '8 min de leitura',
      title: 'Princípios de design minimalista para interfaces modernas',
      excerpt: 'Descubra como criar interfaces limpas e funcionais que colocam o usuário em primeiro lugar.',
      date: '20 de Abril, 2026',
      likes: 287,
      comments: 64,
      shares: '1.8k'
    },
    {
      category: 'Inovação',
      readTime: '6 min de leitura',
      title: 'Como construir produtos que as pessoas realmente amam',
      excerpt: 'Lições práticas sobre product-market fit e como criar experiências memoráveis.',
      date: '18 de Abril, 2026',
      likes: 412,
      comments: 103,
      shares: '2.5k'
    }
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Grain Texture */}
      <div className="grain-texture absolute inset-0"></div>

      {/* Header */}
      <header className="relative z-50 px-5 md:px-20 py-8 flex items-center justify-between"
        style={{ borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Newsletter
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#posts" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
            Posts
          </a>
          <a href="#comunidade" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
            Comunidade
          </a>
          <a href="#sobre" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
            Sobre
          </a>
          <button
            className="px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: '#FFFFFF'
            }}
          >
            Assinar
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative px-5 md:px-20 py-20 md:py-32 overflow-hidden">
        {/* Background animado com gradientes mesh */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          />
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            style={{ backgroundColor: 'var(--accent-secondary)' }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
            style={{ backgroundColor: 'var(--accent-primary)', opacity: 0.5 }}
          />
        </div>

        {/* Partículas flutuantes interativas */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm animate-float pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}

        {/* Parallax em múltiplas camadas */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"
            style={{
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
            }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.2),transparent_40%)]"
            style={{
              transform: `translate(${mousePos.x * 0.04}px, ${mousePos.y * 0.04}px)`
            }}
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.2),transparent_40%)]"
            style={{
              transform: `translate(${mousePos.x * 0.06}px, ${mousePos.y * 0.06}px)`
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px),
                             linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Floating Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
            style={{
              backgroundColor: 'var(--accent-light)',
              border: '1px solid var(--accent-primary)'
            }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-primary)' }} />
            <span className="text-xs font-medium" style={{ color: 'var(--accent-primary)' }}>
              +2.4k leitores esta semana
            </span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
            style={{ color: 'var(--text-primary)' }}
          >
            Receba insights direto<br />na sua caixa de entrada
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
            style={{ color: 'var(--text-secondary)' }}
          >
            Junte-se a milhares de leitores que recebem conteúdo exclusivo sobre tecnologia, design e inovação.
          </p>

          {/* Email Form com hover states sofisticados */}
          <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="relative flex-1 group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full px-6 py-4 rounded-xl text-sm transition-all duration-300 outline-none group-hover:border-opacity-100"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '2px solid var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                style={{
                  background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))'
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-50 overflow-hidden group"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: '#FFFFFF'
              }}
            >
              <span className="relative z-10">{isSubmitting ? 'Enviando...' : 'Assinar Newsletter'}</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(90deg, var(--accent-secondary), var(--accent-primary))'
                }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
              </div>
            </button>
          </form>

          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            Sem spam. Cancele quando quiser.
          </p>

          {/* Stats Bar */}
          <div className={`flex flex-wrap justify-center gap-8 md:gap-16 mt-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                12k+
              </div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Assinantes
              </div>
            </div>
            <div className="w-px h-12 self-center" style={{ backgroundColor: 'var(--border-color)' }} />
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                250+
              </div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Posts Publicados
              </div>
            </div>
            <div className="w-px h-12 self-center" style={{ backgroundColor: 'var(--border-color)' }} />
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-primary)' }}>
                98%
              </div>
              <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Taxa de Abertura
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="posts" className="relative px-5 md:px-20 py-20"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Últimos Posts
            </h2>
            <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--accent-primary)' }}>
              Ver todos →
            </a>
          </div>

          {/* Posts Grid */}
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group cursor-pointer"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  animation: isVisible ? `slideIn 0.5s ease-out ${index * 0.1 + 0.5}s both` : 'none',
                  boxShadow: '0 0 0 0 rgba(168, 85, 247, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 0 rgba(168, 85, 247, 0)';
                }}
              >
                {/* Post Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--accent-primary)'
                      }}
                    >
                      {post.category}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      {post.readTime}
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-opacity-10"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>

                {/* Post Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-opacity-80 transition-opacity" style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>

                {/* Post Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {post.date}
                  </span>
                  <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: 'var(--accent-primary)' }}>
                    Ler mais →
                  </a>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center gap-6 mt-6 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{post.shares}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidade" className="relative px-5 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Junte-se à nossa comunidade
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Conecte-se com outros leitores, compartilhe ideias e participe de discussões sobre os temas que você mais gosta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '2px solid var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Entrar no Discord
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: '#FFFFFF'
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Entrar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-20 py-12"
        style={{ borderTop: '1px solid var(--border-color)' }}
      >
        <div className="max-w-6xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>Posts</a>
            <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>Comunidade</a>
            <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>Sobre</a>
            <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>Contato</a>
            <a href="#" className="text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--text-secondary)' }}>Privacidade</a>
          </nav>

          <div className="w-full h-px mb-8" style={{ backgroundColor: 'var(--border-color)' }} />

          <div className="text-center">
            <div className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Newsletter
            </div>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              © 2026 Newsletter. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
