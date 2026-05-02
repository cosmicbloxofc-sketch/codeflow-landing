import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FinalCta from './FinalCta';

describe('FinalCta', () => {
  it('renders the h2 and description', () => {
    render(<FinalCta onStartClick={() => {}} />);
    expect(
      screen.getByRole('heading', { level: 2, name: /Pronto para transformar/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Junte-se a centenas de pessoas/i),
    ).toBeInTheDocument();
  });

  it('uses a native <button type="button"> for the CTA', () => {
    render(<FinalCta onStartClick={() => {}} />);
    const button = screen.getByRole('button', { name: /Começar Agora/i });
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('calls onStartClick when the CTA is clicked', async () => {
    const onStartClick = vi.fn();
    const user = userEvent.setup();
    render(<FinalCta onStartClick={onStartClick} />);
    await user.click(screen.getByRole('button', { name: /Começar Agora/i }));
    expect(onStartClick).toHaveBeenCalledTimes(1);
  });
});
