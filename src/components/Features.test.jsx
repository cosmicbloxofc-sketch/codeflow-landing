import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from './Features';

describe('Features', () => {
  it('renders <section id="recursos"> landmark with heading', () => {
    const { container } = render(<Features />);
    const section = container.querySelector('section#recursos');
    expect(section).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Por que escolher CodeFlow/i })).toBeInTheDocument();
  });

  it('renders 6 feature cards, each with an <h3>', () => {
    const { container } = render(<Features />);
    const articles = container.querySelectorAll('article');
    expect(articles.length).toBe(6);
    const h3s = container.querySelectorAll('article h3');
    expect(h3s.length).toBe(6);
  });

  it('includes the 6 expected feature titles', () => {
    render(<Features />);
    const titles = [
      'Velocidade Extrema',
      'Use todos os Modelos',
      'Use em Todos os Lugares',
      'Preço Justo',
      'Seguro e Confiável',
      'Suporte Personalizado',
    ];
    for (const t of titles) {
      expect(screen.getByRole('heading', { level: 3, name: t })).toBeInTheDocument();
    }
  });
});
