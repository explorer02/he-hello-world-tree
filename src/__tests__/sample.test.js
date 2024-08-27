import App from '../App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const getClickCounterValue = () =>
  screen.getByTestId('buttonClickedCount').textContent.split(': ')[1];

const getViewportButtons = () => ({
  desktopViewportButton: screen.getByTestId('viewportSwitcherDESKTOP'),
  mobileViewportButton: screen.getByTestId('viewportSwitcherMOBILE'),
});

test('When the user switches between viewport types, ButtonCounter state should not get reset #1', async () => {
  render(<App />);

  const { desktopViewportButton, mobileViewportButton } = getViewportButtons();

  userEvent.click(desktopViewportButton);

  userEvent.click(screen.getByTestId('incrementClickedCountButton'));

  expect(getClickCounterValue()).toBe('1');

  userEvent.click(mobileViewportButton);

  expect(getClickCounterValue()).toBe('1');
});
