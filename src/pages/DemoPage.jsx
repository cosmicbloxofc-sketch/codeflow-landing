import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import FloatingOrbs from '../components/FloatingOrbs';
import BorderGlow from '../components/BorderGlow';
import ShinyText from '../components/ShinyText';

export default function DemoPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Animação de entrada com delay
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleVoltar = () => {
    navigate('/', {
      state: { scrollTo: location.state?.from || 'projetos' }
    });
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const benefits = [
    {
      icon: '⚡',
      title: 'Velocidade Real',
      description: 'Veja código sendo gerado em tempo real, do zero ao deploy completo em minutos.'
    },
    {
      icon: '🧠',
      title: 'Contexto Completo',
      description: 'O Claude entende todo o seu projeto, arquivos relacionados e dependências.'
    },
    {
      icon: '✨',
      title: 'Qualidade Profissional',
      description: 'Código pronto para produção, com testes, documentação e boas práticas.'
    },
    {
      icon: '🚀',
      title: 'Múltiplas IDEs',
      description: 'Funciona em VS Code, Cursor, Windsurf, JetBrains e terminal.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white overflow-hidden relative">
      {/* Grain Texture */}
      <div className="grain-texture absolute inset-0 opacity-30"></div>

      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrbs
          orbCount={4}
          minSize={200}
          maxSize={400}
          speed={0.3}
          colors={[
            'rgba(46, 91, 255, 0.08)',
            'rgba(0, 212, 170, 0.06)',
            'rgba(91, 127, 255, 0.05)'
          ]}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 px-5 md:px-20 py-6 flex items-center justify-between border-b border-white/10">
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E5BFF] to-[#00D4AA] flex items-center justify-center font-bold text-lg transition-transform group-hover:scale-110">
            C
          </div>
          <span className="text-xl font-bold">CodeFlow</span>
        </Link>

        <button
          onClick={handleVoltar}
          className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 bg-white/5 hover:bg-white/10 border border-white/10"
        >
          ← Voltar
        </button>
      </header>

      {/* Hero Section - Cinema Style */}
      <section className="relative px-5 md:px-20 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div
            className="text-center mb-12 md:mb-16"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#2E5BFF]/10 border border-[#2E5BFF]/20 mb-6">
              <span className="text-sm font-semibold text-[#2E5BFF]">🎬 Demonstração ao Vivo</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <ShinyText
                text="Claude Code em Ação"
                speed={3}
                delay={0.5}
                color="#FFFFFF"
                shineColor="#2E5BFF"
                spread={120}
                direction="left"
              />
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Assista como desenvolvedores reais usam o Claude Code para criar projetos completos em minutos.
              <span className="text-[#00D4AA] font-semibold"> Do zero ao deploy.</span>
            </p>
          </div>

          {/* Video Player - Cinematic */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            {/* Cinematic Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">
              {/* Top Bar - Cinema UI */}
              <div className="absolute top-0 left-0 right-0 z-20 px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-white/50 font-mono">tutorial-mac-app.mp4</div>
                </div>
              </div>

              {/* Video */}
              <div className="relative aspect-video bg-black">
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 border-4 border-[#2E5BFF] border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-sm text-white/50">Carregando vídeo...</p>
                    </div>
                  </div>
                )}

                <video
                  ref={videoRef}
                  src="/videos/tutorial-mac-app.mp4"
                  className="w-full h-full"
                  controls
                  preload="metadata"
                  onLoadedData={handleVideoLoad}
                  style={{ opacity: videoLoaded ? 1 : 0 }}
                >
                  <track kind="captions" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E5BFF]/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#2E5BFF]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#00D4AA]/20 rounded-full blur-3xl"></div>
          </div>

          {/* Video Stats */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease 0.6s',
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white/50">Gravado em tempo real</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/50">⏱️ Projeto completo em</span>
              <span className="text-[#00D4AA] font-bold">8 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/50">📦 Do zero ao</span>
              <span className="text-[#2E5BFF] font-bold">deploy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative px-5 md:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Por que isso importa?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Não é só sobre velocidade. É sobre transformar completamente como você desenvolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.8 + index * 0.1}s`,
                }}
              >
                <BorderGlow
                  edgeSensitivity={40}
                  glowColor="46 91 255"
                  backgroundColor="transparent"
                  borderRadius={24}
                  glowRadius={40}
                  glowIntensity={1.2}
                  coneSpread={25}
                  colors={['#2E5BFF', '#00D4AA']}
                  fillOpacity={0.05}
                  className="h-full"
                >
                  <div className="p-8 h-full bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </BorderGlow>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative px-5 md:px-20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.2s',
            }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Pronto para Experimentar?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Comece a desenvolver 10x mais rápido hoje mesmo. Todos os modelos, todas as IDEs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                state={{ scrollTo: 'planos' }}
                className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#2E5BFF] to-[#00D4AA] text-white shadow-lg shadow-[#2E5BFF]/50"
              >
                <span className="relative z-10">Ver Planos →</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <button
                onClick={handleVoltar}
                className="px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 bg-white/5 hover:bg-white/10 border border-white/20"
              >
                ← Voltar para Início
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="relative px-5 md:px-20 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© 2026 CodeFlow. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Início
            </Link>
            <a href="/termos.html" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Termos
            </a>
            <a href="/privacidade.html" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
