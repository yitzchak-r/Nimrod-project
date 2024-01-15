import { render } from '@testing-library/react';

import MainComponent from './MainComponent';

describe('MainComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainComponent />);
    expect(baseElement).toBeTruthy();
  });
});
