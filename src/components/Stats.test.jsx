import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Stats from './Stats';

describe('Stats', () => {
  it('renders the 3 statistics with their labels', () => {
    render(<Stats />);
    expect(screen.getByText('Clientes Ativos')).toBeInTheDocument();
    expect(screen.getByText('Projetos Criados')).toBeInTheDocument();
    expect(screen.getByText('Satisfação')).toBeInTheDocument();
  });

  it('shows the eyebrow text', () => {
    render(<Stats />);
    expect(
      screen.getByText(/Confiado por desenvolvedores em todo Brasil/i),
    ).toBeInTheDocument();
  });

  it('exposes the section landmark with id="stats"', () => {
    const { container } = render(<Stats />);
    const section = container.querySelector('section#stats');
    expect(section).toBeTruthy();
  });
});
