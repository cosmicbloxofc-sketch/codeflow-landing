import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
  it('renders <section id="como-funciona"> landmark with heading', () => {
    const { container } = render(<HowItWorks />);
    const section = container.querySelector('section#como-funciona');
    expect(section).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Como funciona/i })).toBeInTheDocument();
  });

  it('renders 3 numbered steps with <h3>', () => {
    render(<HowItWorks />);
    ['1', '2', '3'].forEach((n) => expect(screen.getByText(n)).toBeInTheDocument());
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.length).toBe(3);
    const titles = headings.map((h) => h.textContent);
    expect(titles).toEqual(['Escolha seu plano', 'Receba acesso', 'Comece a criar']);
  });
});
