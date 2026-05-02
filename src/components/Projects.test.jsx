import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', () => {
  it('renders exactly 3 project articles', () => {
    const { container } = render(<Projects />);
    expect(container.querySelectorAll('article').length).toBe(3);
  });

  it('marks the featured card with the Destaque badge', () => {
    render(<Projects />);
    expect(screen.getByText(/Destaque/)).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<Projects />);
    expect(screen.getByText(/Claude Code em Ação/i)).toBeInTheDocument();
  });

  it('renders all three project titles', () => {
    render(<Projects />);
    expect(screen.getByAltText(/Claude Code na CLI/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Claude Code na IDE/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Claude Code no VS Code/i)).toBeInTheDocument();
  });
});
