import { render } from '@testing-library/react';

import NavbarNotLogin from './NavbarNotLogin';

describe('NavbarNotLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarNotLogin />);
    expect(baseElement).toBeTruthy();
  });
});
