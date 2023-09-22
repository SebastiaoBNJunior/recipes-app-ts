import { render } from '@testing-library/react';
import { RecipeProvider } from '../context/search-results-context';

export default function renderWithContext(children:React.ReactNode) {
  return render(<RecipeProvider>{children}</RecipeProvider>);
}
