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

test('App should initially start with click counter value as 0', async () => {
  render(<App />);

  expect(getClickCounterValue()).toBe(0);
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

test('When the user switches between viewport types, ButtonCounter state should not get reset #2', async () => {
  render(<App />);

  const { desktopViewportButton, mobileViewportButton } = getViewportButtons();

  userEvent.click(desktopViewportButton);

  userEvent.click(screen.getByTestId('incrementClickedCountButton'));

  userEvent.click(mobileViewportButton);

  expect(getClickCounterValue()).toBe('1');

  userEvent.click(screen.getByTestId('incrementClickedCountButton'));
  userEvent.click(screen.getByTestId('incrementClickedCountButton'));
  userEvent.click(screen.getByTestId('incrementClickedCountButton'));

  userEvent.click(desktopViewportButton);

  expect(getClickCounterValue()).toBe('4');
});
