import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App', () => {
    render(<App />);

    expect(1).toBe(1);
  });
});
