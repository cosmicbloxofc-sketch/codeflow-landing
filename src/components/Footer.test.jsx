import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('exposes a contentinfo landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('legal links point to the real pages (not WhatsApp)', () => {
    render(<Footer />);
    const termos = screen.getByRole('link', { name: /Termos de Uso/i });
    const priv = screen.getByRole('link', { name: /Política de Privacidade/i });
    expect(termos).toHaveAttribute('href', '/termos.html');
    expect(priv).toHaveAttribute('href', '/privacidade.html');
  });

  it('Contato link opens WhatsApp in a new tab', () => {
    render(<Footer />);
    const contato = screen.getByRole('link', { name: /Contato/i });
    expect(contato).toHaveAttribute('href', expect.stringContaining('wa.me'));
    expect(contato).toHaveAttribute('target', '_blank');
    expect(contato).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('shows the current year in the copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`©\\s*${year}\\s*CodeFlow`)),
    ).toBeInTheDocument();
  });
});
