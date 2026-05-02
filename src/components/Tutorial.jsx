import { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import VimeoPlayer from './VimeoPlayer';

const CODE_SNIPPET = `{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.aibee.cloud",
    "ANTHROPIC_API_KEY": "sua key"
  }
}`;

function CopyCodeBlock() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden my-3" style={{ border: '1px solid var(--border-color)' }}>
      <div className="flex items-center justify-between px-4 py-2" style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)' }}>
        <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>settings.json</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-xs font-medium transition-all duration-200"
          style={{
            backgroundColor: copied ? 'var(--accent-primary)' : 'var(--bg-secondary)',
            color: copied ? '#FFFFFF' : 'var(--text-secondary)',
            border: '1px solid var(--border-color)'
          }}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>
      <pre className="px-4 py-3 text-xs font-mono overflow-x-auto" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
        {CODE_SNIPPET}
      </pre>
    </div>
  );
}

const TUTORIALS = {
  windows: {
    app: {
      title: 'Claude Code App — Windows',
      subtitle: 'Configuração completa passo a passo',
      videoUrl: '/videos/tutorial-win-app.mp4',
      videoType: 'local',
      steps: [
        {
          number: 1,
          text: 'Abre o Claude no Windows.',
        },
        {
          number: 2,
          text: 'No canto superior esquerdo da janela, clica no ícone de 3 risquinhos (menu hamburger).',
        },
        {
          number: 3,
          text: 'Vai em: Ajuda → Solução de Problemas → Ativar Modo Desenvolvedor. Essa opção fica no menu da direita, mais ou menos no meio da lista.',
        },
        {
          number: 4,
          text: 'O Claude vai reiniciar. Quando abrir, clica em Começar.',
        },
        {
          number: 5,
          text: 'Clica de novo nos 3 risquinhos no canto superior esquerdo. Agora vai aparecer a opção Desenvolvedor no menu.',
        },
        {
          number: 6,
          text: 'Vai em: Desenvolvedor → Configurar Inferência de Terceiros…',
        },
        {
          number: 7,
          text: 'Na tela que abrir, deixa marcado Gateway (no bloco Connection / Conexão, na parte de cima).',
        },
        {
          number: 8,
          text: 'Preencha os campos: Gateway base URL: https://api.aibee.cloud | Gateway API key: cole sua chave de API | Gateway auth scheme: bearer | Gateway extra headers: deixe vazio',
        },
        {
          number: 9,
          text: 'Clica em Aplicar localmente (botão no canto inferior direito).',
        },
        {
          number: 10,
          text: 'O Claude vai reiniciar e aplicar a configuração. Quando abrir de novo, clica em Continuar com Gateway.',
        },
      ],
    },
    terminal: {
      title: 'Claude Code Terminal — Windows',
      subtitle: 'Configuração completa passo a passo',
      videoUrl: '1186708850',
      videoType: 'vimeo',
      steps: [
        {
          number: 1,
          text: 'Abre o Explorador de Arquivos do Windows.',
        },
        {
          number: 2,
          text: 'Navega até a pasta: C:\\Users\\[SeuUsuário]\\.claude',
        },
        {
          number: 3,
          text: 'Abre o arquivo settings.json com um editor de texto (Bloco de Notas, VS Code, etc).',
        },
        {
          number: 4,
          text: 'Apaga tudo que está no arquivo e cola o código abaixo, substituindo "sua key" pela sua chave de API entre aspas:',
          codeBlock: true,
        },
        {
          number: 5,
          text: 'Salva o arquivo (Ctrl+S).',
        },
        {
          number: 6,
          text: 'Pronto! O Claude Code no terminal já está configurado e funcionando.',
        },
      ],
    },
    vscode: {
      title: 'Claude Code VS Code — Windows',
      subtitle: 'Configuração completa passo a passo',
      videoUrl: '1186708889',
      videoType: 'vimeo',
      steps: [
        {
          number: 1,
          text: 'Abre o Visual Studio Code.',
        },
        {
          number: 2,
          text: 'Vai na aba de Extensões (ícone de quadradinhos no menu lateral esquerdo ou Ctrl+Shift+X).',
        },
        {
          number: 3,
          text: 'Procura por "Claude Code" e instala a extensão oficial.',
        },
        {
          number: 4,
          text: 'Abre o Explorador de Arquivos do Windows e navega até: C:\\Users\\[SeuUsuário]\\.claude',
        },
        {
          number: 5,
          text: 'Abre o arquivo settings.json com um editor de texto.',
        },
        {
          number: 6,
          text: 'Apaga tudo que está no arquivo e cola o código abaixo, substituindo "sua key" pela sua chave de API entre aspas:',
          codeBlock: true,
        },
        {
          number: 7,
          text: 'Salva o arquivo (Ctrl+S).',
        },
        {
          number: 8,
          text: 'Pronto! O Claude Code no VS Code já está configurado e funcionando.',
        },
      ],
    },
  },
  macos: {
    app: {
      title: 'Claude Code App — macOS',
      subtitle: 'Configuração completa passo a passo',
      videoUrl: '/videos/tutorial-mac-app.mp4',
      videoType: 'local',
      steps: [
        {
          number: 1,
          text: 'Abra o app Claude no Mac. Na primeira tela, clica em Get started (caso seja primeiro acesso).',
        },
        {
          number: 2,
          text: 'Na barra do Mac, clica em Help (ou Ajuda) → Troubleshooting (ou Solução de problemas).',
        },
        {
          number: 3,
          text: 'Clica em Enable Developer Mode (ou Ativar modo desenvolvedor).',
        },
        {
          number: 4,
          text: 'Vai aparecer o menu Developer na barra do Mac. Clica nele → Configure Third-Party Inference…',
        },
        {
          number: 5,
          text: 'Na janela que abrir, escolhe a opção Gateway (na parte de cima).',
        },
        {
          number: 6,
          text: 'Preencha os campos: Gateway base URL: https://api.aibee.cloud | Gateway API Key: cole sua chave de API | Gateway auth scheme: bearer | Gateway extra headers: deixe vazio',
        },
        {
          number: 7,
          text: 'Clica em Apply locally (canto inferior direito). Depois clica em Relaunch now para reiniciar.',
        },
        {
          number: 8,
          text: 'Quando o Claude reabrir, escolhe Continue with Gateway. Pronto! No canto inferior esquerdo vai aparecer Gateway.',
        },
      ],
    },
    terminal: {
      title: 'Claude Code Terminal — macOS',
      subtitle: 'Configuração completa passo a passo',
      videoUrl: '',
      videoType: 'local',
      steps: [
        {
          number: 1,
          text: 'Passo 1 - Descrição aqui',
        },
      ],
    },
    vscode: {
      title: 'Claude Code VS Code — macOS',
      subtitle: 'Configuração completa passo a passo',
      videoUrl: '',
      videoType: 'local',
      steps: [
        {
          number: 1,
          text: 'Passo 1 - Descrição aqui',
        },
      ],
    },
  },
};

export default function Tutorial() {
  const [selectedOS, setSelectedOS] = useState('windows');
  const [selectedTool, setSelectedTool] = useState('app');
  const [showSteps, setShowSteps] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentTutorial = TUTORIALS[selectedOS][selectedTool];

  const handleOSChange = (os) => {
    if (os !== selectedOS) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedOS(os);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  const handleToolChange = (tool) => {
    if (tool !== selectedTool) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTool(tool);
        setTimeout(() => setIsTransitioning(false), 50);
      }, 200);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    // Carregar tema salvo
    const savedTheme = localStorage.getItem('tutorial-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('tutorial-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <section
      className="min-h-screen py-16 md:py-24 relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Grain Texture */}
      <div className="grain-texture absolute inset-0"></div>

      {/* Theme Toggle - Posição fixa no canto superior direito */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-xl transition-all duration-300 group"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          color: 'var(--text-primary)'
        }}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <svg className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </button>

      {/* Header */}
      <div className={`px-5 md:px-10 lg:px-20 mb-16 transition-all duration-700 relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto">
          {/* Badge minimalista */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 font-mono text-xs font-medium tracking-wider uppercase transition-all duration-300"
            style={{
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent-primary)',
              border: '1px solid var(--accent-primary)'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
            Tutoriais
          </div>

          {/* Título com tipografia forte */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
            style={{ color: 'var(--text-primary)' }}
          >
            Configure seu<br />
            <span style={{ color: 'var(--accent-primary)' }}>Claude Code</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Selecione seu sistema operacional e ferramenta.<br className="hidden md:block" />
            Siga o tutorial em vídeo.
          </p>
        </div>
      </div>

      {/* OS Selection - Design minimalista com ícones grandes */}
      <div className={`px-5 md:px-10 lg:px-20 mb-12 transition-all duration-700 delay-100 relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
            <button
              onClick={() => handleOSChange('windows')}
              className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                selectedOS === 'windows' ? 'scale-[1.02]' : 'hover:scale-[1.02]'
              }`}
              style={{
                backgroundColor: selectedOS === 'windows' ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                border: `2px solid ${selectedOS === 'windows' ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                color: selectedOS === 'windows' ? '#FFFFFF' : 'var(--text-primary)'
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mb-3 transition-transform group-hover:scale-110 duration-300">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
              <span className="font-semibold text-sm">Windows</span>
            </button>

            <button
              onClick={() => handleOSChange('macos')}
              className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                selectedOS === 'macos' ? 'scale-[1.02]' : 'hover:scale-[1.02]'
              }`}
              style={{
                backgroundColor: selectedOS === 'macos' ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                border: `2px solid ${selectedOS === 'macos' ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                color: selectedOS === 'macos' ? '#FFFFFF' : 'var(--text-primary)'
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mb-3 transition-transform group-hover:scale-110 duration-300">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="font-semibold text-sm">macOS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tool Selection - Tabs minimalistas */}
      <div className={`px-5 md:px-10 lg:px-20 mb-12 transition-all duration-700 delay-200 relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex rounded-xl p-1" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <button
              onClick={() => handleToolChange('app')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 font-mono ${
                selectedTool === 'app' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: selectedTool === 'app' ? 'var(--accent-primary)' : 'transparent',
                color: selectedTool === 'app' ? '#FFFFFF' : 'var(--text-secondary)'
              }}
            >
              App
            </button>

            <button
              onClick={() => handleToolChange('terminal')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 font-mono ${
                selectedTool === 'terminal' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: selectedTool === 'terminal' ? 'var(--accent-primary)' : 'transparent',
                color: selectedTool === 'terminal' ? '#FFFFFF' : 'var(--text-secondary)'
              }}
            >
              Terminal
            </button>

            <button
              onClick={() => handleToolChange('vscode')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 font-mono ${
                selectedTool === 'vscode' ? 'shadow-sm' : ''
              }`}
              style={{
                backgroundColor: selectedTool === 'vscode' ? 'var(--accent-primary)' : 'transparent',
                color: selectedTool === 'vscode' ? '#FFFFFF' : 'var(--text-secondary)'
              }}
            >
              VS Code
            </button>
          </div>
        </div>
      </div>

      {/* Video Player - Terminal Style */}
      <div className={`px-5 md:px-10 lg:px-20 mb-12 transition-all duration-700 delay-300 relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto">
          {/* Terminal Header */}
          <div className="rounded-t-2xl p-4 flex items-center gap-2" style={{ backgroundColor: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-color)' }}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className={`font-mono text-xs ml-4 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`} style={{ color: 'var(--text-tertiary)' }}>
              {currentTutorial.title}
            </span>
          </div>

          {/* Video Container */}
          <div className="rounded-b-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderTop: 'none' }}>
            <div className={`relative flex items-center justify-center ${isTransitioning ? '' : 'animate-video-reload'}`} style={{ backgroundColor: 'var(--bg-secondary)' }}>
              {currentTutorial.videoUrl ? (
                currentTutorial.videoType === 'vimeo' ? (
                  <VimeoPlayer
                    key={`${selectedOS}-${selectedTool}`}
                    videoId={currentTutorial.videoUrl}
                    title={currentTutorial.title}
                  />
                ) : (
                  <VideoPlayer
                    key={`${selectedOS}-${selectedTool}`}
                    src={currentTutorial.videoUrl}
                    title={currentTutorial.title}
                  />
                )
              ) : (
                <div className="text-center aspect-video w-full flex items-center justify-center">
                  <div>
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--text-tertiary)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-mono text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      Video coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="p-6" style={{ borderTop: '1px solid var(--border-color)' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {currentTutorial.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {currentTutorial.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Accordion - Minimalista */}
      <div className={`px-5 md:px-10 lg:px-20 transition-all duration-700 delay-400 relative z-10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            <button
              onClick={() => setShowSteps(!showSteps)}
              className="group w-full px-6 py-5 flex items-center justify-between transition-colors duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 transition-transform group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-primary)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold">Passo a passo</span>
              </div>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${showSteps ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: 'var(--text-tertiary)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`transition-all duration-500 ease-in-out ${
              showSteps ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6 space-y-4" style={{ borderTop: showSteps ? '1px solid var(--border-color)' : 'none', paddingTop: showSteps ? '1.5rem' : '0' }}>
                {currentTutorial.steps.map((step, index) => (
                  <div
                    key={step.number}
                    className="flex gap-4 group"
                    style={{
                      animation: showSteps ? `slideIn 0.4s ease-out ${index * 0.08}s both` : 'none'
                    }}
                  >
                    <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--accent-primary)',
                        border: '1px solid var(--accent-primary)'
                      }}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="leading-relaxed transition-colors duration-300" style={{ color: 'var(--text-secondary)' }}>
                        {step.text}
                      </p>
                      {step.codeBlock && <CopyCodeBlock />}
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent-primary)' }}>
                  <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-bold" style={{ color: 'var(--accent-primary)' }}>💡 Dica:</span> Se tiver dúvidas, entre em contato com nosso suporte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
