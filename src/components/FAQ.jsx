import { useState, useEffect, useRef } from 'react';

const faqData = [
  {
    question: "É realmente o Claude Code oficial?",
    answer: "Sim. Você recebe acesso à API oficial da Anthropic — os mesmos modelos (Opus 4.7, Sonnet, Haiku) e os mesmos limites do plano Max 20x. A CodeFlow é um serviço independente, não somos afiliados à Anthropic, mas o acesso é 100% via API oficial deles."
  },
  {
    question: "Como funciona? Preciso criar uma conta?",
    answer: "Não é por login. Você recebe uma API key individual, configura no Claude Code e usa normalmente. A gente manda tutorial completo por WhatsApp e, se precisar, fazemos call até funcionar."
  },
  {
    question: "A API key é compartilhada com outras pessoas?",
    answer: "Não. Cada cliente recebe uma API key individual e exclusiva. Ninguém mais usa a sua chave. É como um número de série único — se você cancelar, a key é desativada. Outros clientes não interferem no seu uso."
  },
  {
    question: "Como recebo após pagar?",
    answer: "Em até 1 hora após o pagamento você recebe a API key aqui pelo WhatsApp, junto com o tutorial de configuração. Aceitamos Pix e cartão de crédito."
  },
  {
    question: "Posso usar em várias IDEs e computadores?",
    answer: "Sim, funciona em VS Code, Cursor, Windsurf, JetBrains, App Desktop do Claude e terminal — em Windows, Mac e Linux. O acesso é individual (1 pessoa), mas você pode instalar nos seus próprios dispositivos. Não funciona diretamente no navegador."
  },
  {
    question: "Quais modelos posso usar?",
    answer: "Todos os modelos mais recentes da Anthropic: Claude Opus 4.7, Sonnet 4.6 e Haiku 4.5 — os mesmos do plano Max 20x oficial. Sempre atualizados conforme a Anthropic lança novos modelos."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, sem fidelidade. Cancele a qualquer momento e continue usando até o fim do período pago. Sem burocracia ou taxas. Além disso, tem garantia de 7 dias — se não funcionar por qualquer motivo, reembolso 100% na mesma hora."
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  const answerId = `faq-answer-${index}`;
  const buttonId = `faq-question-${index}`;

  return (
    <div
      className={[
        'rounded-2xl backdrop-blur-md transition-all duration-300 ease-out',
        'bg-gradient-to-br from-white/95 to-[#F8FAFC]/90',
        isOpen
          ? 'scale-[1.02] shadow-[0_8px_32px_rgba(46,91,255,0.20),0_0_0_2px_rgba(46,91,255,0.15)]'
          : 'shadow-[0_8px_32px_rgba(0,0,0,0.06),0_0_0_1px_rgba(46,91,255,0.08)] hover:shadow-[0_8px_32px_rgba(46,91,255,0.15),0_0_0_1px_rgba(46,91,255,0.10)]',
      ].join(' ')}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={onToggle}
          className={[
            'flex w-full items-center justify-between gap-4 text-left',
            'px-6 md:px-8 py-6 md:py-8 rounded-2xl',
            'outline-2 outline-offset-2 outline-[#2E5BFF] focus-visible:outline',
          ].join(' ')}
        >
          <span className="text-base sm:text-lg md:text-xl font-bold leading-snug tracking-tight text-[#0A2540]">
            {question}
          </span>
          <span
            aria-hidden="true"
            className={[
              'flex-shrink-0 text-2xl font-bold text-[#2E5BFF]',
              'transition-transform duration-300 ease-out',
              isOpen ? 'rotate-45' : 'rotate-0',
            ].join(' ')}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        className={[
          'grid transition-all duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        ].join(' ')}
      >
        <div className="overflow-hidden">
          <p className="px-6 md:px-8 pb-6 md:pb-8 text-sm sm:text-base leading-relaxed text-[#6B7280] m-0">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
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
      id="faq"
      className="relative flex flex-col gap-12 md:gap-16 bg-[#F8FAFC] px-5 md:px-10 lg:px-20 py-20 md:py-28"
    >
      <div
        className="flex flex-col items-center gap-4"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}
      >
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0A2540] drop-shadow-[0_2px_40px_rgba(46,91,255,0.20)] m-0">
          Perguntas Frequentes
        </h2>
        <p className="max-w-xl text-center text-base md:text-lg leading-relaxed text-[#6B7280] m-0">
          Tudo o que você precisa saber sobre o CodeFlow
        </p>
      </div>

      <div
        className="mx-auto flex w-full max-w-3xl flex-col gap-4 md:gap-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
        }}
      >
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}
