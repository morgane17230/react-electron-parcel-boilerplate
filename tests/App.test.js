import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import App from '../src/App';

test('render app', () => {
  const { getByText } = render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  expect(getByText('React-Electron-Boilerplate')).toBeInTheDocument();
});
