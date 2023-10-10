import { render } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

type Options = {
  initialEntries?: string[];
};

function withRouter(component: React.ReactElement, initialEntries: string[]) {
  return (
    <MemoryRouter initialEntries={ initialEntries }>
      { component }
    </MemoryRouter>
  );
}

// export function renderWithRouter(
//   component: React.ReactElement,
//   {
//     initialEntries = ['/'],
//   }: Options = {},
// ) {
//   return render(withRouter(component, initialEntries));
// }
export const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, '', route);

  return {

    user: userEvent.setup(),

    ...render(ui, { wrapper: BrowserRouter }),

  };
};
