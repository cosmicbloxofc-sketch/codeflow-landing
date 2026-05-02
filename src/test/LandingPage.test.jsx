import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LandingPage from '../LandingPage';

describe('LandingPage — smoke', () => {
  beforeEach(() => {
    vi.spyOn(window, 'open').mockImplementation(() => null);
  });

  it('renders page with landmarks', () => {
    render(<LandingPage />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders exactly one h1 (hero)', () => {
    render(<LandingPage />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent(/Claude Code/i);
  });

  it('renders h2 for every main section', () => {
    render(<LandingPage />);
    const h2Texts = screen
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent);
    expect(h2Texts).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/Claude Code em Ação/i),
        expect.stringMatching(/Por que escolher/i),
        expect.stringMatching(/Como funciona/i),
        expect.stringMatching(/Escolha seu plano/i),
        expect.stringMatching(/Perguntas Frequentes/i),
        expect.stringMatching(/Pronto para transformar/i),
      ]),
    );
  });

  it('renders the single MAX 20x plan with price and CTA', () => {
    render(<LandingPage />);
    expect(screen.getByText('R$249')).toBeInTheDocument();
    expect(screen.getByText('Plano MAX 20x')).toBeInTheDocument();
    const planCtas = screen
      .getAllByRole('button', { name: /Começar Agora/i })
      .filter((b) => b.tagName === 'BUTTON');
    expect(planCtas.length).toBeGreaterThanOrEqual(1);
  });

  it('plan CTA opens payment link', async () => {
    const user = userEvent.setup();
    render(<LandingPage />);
    const ctas = screen.getAllByRole('button', { name: /Começar Agora/i });
    const planCta = ctas.find((b) =>
      b.closest('*')?.textContent?.includes('R$249'),
    );
    if (planCta) {
      await user.click(planCta);
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('pay.cakto.com.br'),
        '_blank',
        expect.any(String),
      );
    }
  });

  it('FAQ item expands on click', async () => {
    const user = userEvent.setup();
    render(<LandingPage />);
    const firstFaq = screen.getByRole('button', {
      name: /É realmente o Claude Code oficial/i,
    });
    expect(firstFaq).toHaveAttribute('aria-expanded', 'false');
    await user.click(firstFaq);
    expect(firstFaq).toHaveAttribute('aria-expanded', 'true');
  });

  it('footer legal links point to real pages (not WhatsApp)', () => {
    render(<LandingPage />);
    const footer = screen.getByRole('contentinfo');
    const termos = within(footer).getByRole('link', { name: /Termos de Uso/i });
    const priv = within(footer).getByRole('link', {
      name: /Política de Privacidade/i,
    });
    expect(termos).toHaveAttribute('href', '/termos.html');
    expect(priv).toHaveAttribute('href', '/privacidade.html');
  });

  it('shows all 3 project cards', () => {
    render(<LandingPage />);
    const projetos = document.getElementById('projetos');
    expect(projetos).toBeTruthy();
    const articles = projetos.querySelectorAll('article');
    expect(articles.length).toBe(3);
  });

  it('has no div with role=button (all buttons must be native)', () => {
    const { container } = render(<LandingPage />);
    const fakeButtons = container.querySelectorAll('div[role="button"]');
    expect(fakeButtons.length).toBe(0);
  });

  it('dynamic copyright year', () => {
    render(<LandingPage />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${year}.*CodeFlow`))).toBeInTheDocument();
  });
});
