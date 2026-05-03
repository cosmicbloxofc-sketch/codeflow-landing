# CodeFlow — Resumo do Projeto, Progresso e Plano

---

## 1. O que é o projeto

Landing page de vendas do **CodeFlow** — serviço que oferece acesso ao Claude Code (Anthropic) pelo plano Max 20x por R$249/mês, até 78% mais barato que o plano oficial. O site é em React + Vite + Tailwind, hospedado no Cloudflare Pages, com pixel do Facebook e PostHog configurados.

---

## 2. O que foi feito nessa sessão

### Hero
- Animação de entrada escalonada (fade-up) em todos os elementos
- Título alterado para **"Plano Max 20x"** com gradiente azul→verde em **"Até 78% Mais Barato"**
- Badge removido (estava genérico)
- Prova social adicionada: avatares + "+100 clientes usando agora"
- Scroll indicator animado no rodapé da seção

### Header
- Nav links adicionados: **Como Funciona**, **Planos**, **FAQ**
- Links posicionados ao lado do logo (esquerda), CTA isolado à direita
- Hover com cor azul nos links

### Features (Avaliações)
- Cards convertidos para **marquee infinito** — row1 para esquerda, row2 para direita
- Fade nas bordas laterais (120px)
- Hover pausa a animação
- Todos os 10 cards agora exibem **fotos reais** (av1–av8) ocupando o card inteiro
- Animação de hover no botão do Instagram (translateY + sombra + rotação do ícone)
- Stroke/brilho dos cards reduzido

### Stats
- Números alinhados com o Hero: **100+ Clientes Ativos**, **78% de Economia**, **98% Satisfação**
- Animação de entrada por scroll adicionada (igual aos outros componentes)
- Removido "10.000+ Projetos Criados" (pouco crível)

### Footer
- Instagram e WhatsApp adicionados com ícones
- Hover animado em todos os links (translateY + opacidade)

### Projects (Claude Code em Ação)
- GIFs substituídos pelos reais: `CLI.gif`, `app.gif`, `VSCODE.gif`
- Título do card central alterado para **"Claude Code Desktop"**

### Pixel Meta (Facebook)
- `ViewContent` adicionado — dispara quando a seção de planos entra na tela
- `InitiateCheckout` conectado ao botão "Começar Agora"
- Funil completo: `PageView` → `ViewContent` → `InitiateCheckout` → `Purchase` (checkout)

### Deploy
- Repositório principal: https://github.com/cosmicbloxofc-sketch/lpclaudinho
- Repositório de deploy: https://github.com/cosmicbloxofc-sketch/codeflow-landing
- Cloudflare Pages configurado com `wrangler.jsonc` + SPA routing (`not_found_handling`)
- `.gitignore` corrigido para incluir imagens PNG da pasta public

---

## 3. Funil de rastreamento atual

| Evento | Onde | Status |
|---|---|---|
| PageView | Landing page | ✅ |
| ViewContent | Seção de planos | ✅ |
| InitiateCheckout | Botão "Começar Agora" | ✅ |
| Purchase | Checkout separado | ✅ |

---

## 4. O que ainda precisa ser feito

### Prioridade Alta
- [ ] **Avatares da prova social no Hero** — ainda usando `pravatar.cc` (placeholders). Trocar por fotos reais.
- [ ] **Loop do marquee sem bug** — o scroll infinito ainda tem um salto no reset. Precisa recalcular o `totalWidth` corretamente.
- [ ] **Páginas de Termos e Privacidade** — `/termos.html` e `/privacidade.html` existem mas precisam ter conteúdo real para não prejudicar credibilidade.
- [ ] **OG Image** — `og-image.png` referenciado no `index.html` mas não existe na pasta public. Afeta preview ao compartilhar o link.

### Prioridade Média
- [ ] **Logo real** — o ícone "C" é genérico. Criar uma identidade visual própria para o CodeFlow.
- [ ] **WhatsApp flutuante** — botão fixo no canto inferior direito. Padrão para produtos brasileiros, converte bem.
- [ ] **Contador real de clientes** — usar o componente `CountUp` já existente no Hero com número real.
- [ ] **Unificar FAQ** — existem dois componentes de perguntas (`HowItWorks` e `FAQ`). Conteúdo duplicado, melhor unificar.
- [ ] **Plano isca** — adicionar um segundo plano mais barato/limitado para ancorar o preço do MAX 20x.

### Prioridade Baixa
- [ ] **Animação de entrada no Stats** — já tem, mas o CountUp não reseta quando a seção entra na tela pela primeira vez em alguns casos.
- [ ] **Botão pulse no FinalCta** — animação muito agressiva, substituir por glow suave.
- [ ] **Texto vazio no FinalCta** — há um `<p>` vazio que poderia ter "Garantia de 7 dias • Sem fidelidade • Suporte em português".

---

## 5. Plano de próximas sprints

### Sprint 1 — Credibilidade (esta semana)
1. Trocar avatares do Hero por fotos reais
2. Criar OG Image (1200x630px) para preview de link
3. Adicionar conteúdo real nas páginas de Termos e Privacidade
4. Corrigir bug do loop no marquee

### Sprint 2 — Conversão
1. Adicionar botão flutuante do WhatsApp
2. Criar segundo plano para ancoragem de preço
3. Preencher texto vazio no FinalCta com garantias
4. Substituir animação pulse por glow no botão

### Sprint 3 — Identidade
1. Criar logo real para o CodeFlow
2. Unificar os dois componentes de FAQ
3. Revisar consistência visual em todo o site

---

## 6. Onboarding — Como trabalhar nesse projeto

### Estrutura
```
src/
  components/    → todos os componentes da landing page
  utils/         → analytics.js (pixel Meta + PostHog)
  hooks/         → useScrollAnimation.js
  pages/         → DemoPage, Tutorial
public/
  fotos/         → avatares (av1–av8)
  videos/        → GIFs e vídeos dos demos
```

### Comandos
```bash
npm run dev      # rodar local em localhost:5173
npm run build    # build de produção
git push         # envia para lpclaudinho (origin)
git push neworigin master  # envia para codeflow-landing (Cloudflare)
```

### Deploy
- Qualquer push no `codeflow-landing` trigga o build automático no Cloudflare Pages
- Build command: `npm run build`
- Output: `dist/`
- SPA routing configurado via `wrangler.jsonc`

### Pixel Meta
- ID: `842160194958479`
- Eventos na landing: `PageView`, `ViewContent`, `InitiateCheckout`
- Evento no checkout: `Purchase`
- Funções em `src/utils/analytics.js`

### Identidade visual
- Azul principal: `#2E5BFF`
- Azul escuro: `#0A2540`
- Verde: `#00D4AA`
- Cinza texto: `#6B7280`
- Fonte: Inter
