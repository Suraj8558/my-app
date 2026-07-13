import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InteractiveCounter from './InteractiveCounter';
import { describe, it, expect } from 'vitest';

describe('InteractiveCounter', () => {
  it('should render initial state and increase count on button click', async () => {
    const user = userEvent.setup();
    
    render(<InteractiveCounter />);
    
    // Check elements are rendered correctly
    const header = screen.getByRole('heading', { name: /Client Component/i });
    expect(header).toBeInTheDocument();
    
    const button = screen.getByRole('button', { name: /Clicked 0 times/i });
    expect(button).toBeInTheDocument();

    // Click button to increment counter
    await user.click(button);

    // Verify counter is incremented
    expect(button).toHaveTextContent('Clicked 1 times');
  });
});
