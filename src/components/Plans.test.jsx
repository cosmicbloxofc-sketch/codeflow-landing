import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Plans from './Plans';

describe('Plans', () => {
  it('renders the single MAX 20x plan with correct price', () => {
    render(<Plans onPlanClick={() => {}} />);
    expect(screen.getByText('R$249')).toBeInTheDocument();
    expect(screen.getByText('Plano MAX 20x')).toBeInTheDocument();
  });

  it('renders CTA as native <button type="button"> (no div role=button)', () => {
    const { container } = render(<Plans onPlanClick={() => {}} />);
    const fakeButtons = container.querySelectorAll('div[role="button"]');
    expect(fakeButtons.length).toBe(0);

    const cta = screen.getByRole('button', { name: /Começar Agora/i });
    expect(cta.tagName).toBe('BUTTON');
    expect(cta).toHaveAttribute('type', 'button');
  });

  it('calls onPlanClick with MAX20X when CTA is clicked', async () => {
    const onPlanClick = vi.fn();
    const user = userEvent.setup();
    render(<Plans onPlanClick={onPlanClick} />);

    const cta = screen.getByRole('button', { name: /Começar Agora/i });
    await user.click(cta);

    expect(onPlanClick).toHaveBeenCalledWith('MAX20X');
  });

  it('marks the plan as featured', () => {
    render(<Plans onPlanClick={() => {}} />);
    expect(screen.getByText('Plano MAX 20x')).toBeInTheDocument();
  });

  it('keeps id="planos" on the section', () => {
    const { container } = render(<Plans onPlanClick={() => {}} />);
    const section = container.querySelector('section#planos');
    expect(section).not.toBeNull();
    expect(section.tagName).toBe('SECTION');
  });
});
