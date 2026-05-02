import { useEffect, useRef, useState } from 'react';

const PROJECTS = [
  {
    id: 'cli',
    title: 'Claude Code na CLI',
    image: '/videos/CLI.gif',
    featured: false,
  },
  {
    id: 'ide',
    title: 'Claude Code Desktop',
    image: '/videos/app.gif',
    featured: true,
  },
  {
    id: 'vscode',
    title: 'Claude Code no VS Code',
    image: '/videos/VSCODE.gif',
    featured: false,
  },
];

function ProjectCard({ project, index, isVisible }) {
  const { title, image } = project;

  return (
    <article
      className="relative rounded-2xl border-2 border-[#2E5BFF33] bg-white overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(46,91,255,0.20)] hover:-translate-y-3 hover:translate-x-6 transition-transform duration-150 flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: '240px' }}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="px-5 py-4 border-t border-[#2E5BFF1A]">
        <p className="text-sm font-semibold text-[#0A2540] text-center">{title}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Ajusta threshold e rootMargin para mobile
    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: isMobile ? 0.1 : 0.3,
        rootMargin: isMobile ? '0px' : '-100px'
      }
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
      id="projetos"
      className="px-5 md:px-10 lg:px-20 py-16 md:py-24 lg:py-28 bg-[#F8FAFC] relative w-full flex flex-col gap-12 md:gap-16"
    >
      <div
        className="relative flex flex-col items-center gap-4 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2540] [text-shadow:#2E5BFF33_0px_2px_40px]">
          Claude Code em Ação
        </h2>
        <p className="max-w-[600px] text-base md:text-lg text-[#6B7280] leading-7">
          Veja o Claude Code funcionando na CLI, IDE e VS Code. Use onde você preferir trabalhar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto items-stretch">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}

