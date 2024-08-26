import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

test('When the user switches between viewport types, ButtonCounter state should not get reset', async () => {
  render(<App />);

  const desktopViewportButton = screen.getByTestId('viewportSwitcherDESKTOP');
  const mobileViewportButton = screen.getByTestId('viewportSwitcherMOBILE');

  userEvent.click(desktopViewportButton);

  userEvent.click(screen.getByTestId('incrementClickedCountButton'));

  userEvent.click(mobileViewportButton);

  expect(
    screen.getByTestId('buttonClickedCount').textContent.split(': ')[1]
  ).toBe('1');

  userEvent.click(screen.getByTestId('incrementClickedCountButton'));
  userEvent.click(screen.getByTestId('incrementClickedCountButton'));
  userEvent.click(screen.getByTestId('incrementClickedCountButton'));

  userEvent.click(desktopViewportButton);

  expect(
    screen.getByTestId('buttonClickedCount').textContent.split(': ')[1]
  ).toBe('4');
});
