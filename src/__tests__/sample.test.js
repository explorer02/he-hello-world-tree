import { ButtonCounterTwo } from '../components/ButtonCounterTwo';
import { ViewportSwitcher } from '../components/viewportSwitcher';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const getClickCounterValue = () =>
  screen.getByTestId('buttonClickedCount').textContent.split(': ')[1];

const getViewportButtons = () => ({
  desktopViewportButton: screen.getByTestId('viewportSwitcherDESKTOP'),
  mobileViewportButton: screen.getByTestId('viewportSwitcherMOBILE'),
});

export const renderApp = () =>
  render(
    <ViewportSwitcher>
      {/* ButtonCounterTwo contains the exact same code as ButtonCounter (if you did not make any changes to this) */}
      <ButtonCounterTwo />
    </ViewportSwitcher>
  );

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  console.log.mockRestore();
});

beforeEach(() => {
  jest.clearAllMocks();
});

test('When the user switches between viewport types, ButtonCounter state should not get reset #1', async () => {
  renderApp();

  const { desktopViewportButton, mobileViewportButton } = getViewportButtons();

  userEvent.click(desktopViewportButton);

  userEvent.click(screen.getByTestId('incrementClickedCountButton'));

  expect(getClickCounterValue()).toBe('1');

  userEvent.click(mobileViewportButton);

  expect(console.log).not.toHaveBeenCalled();

  expect(getClickCounterValue()).toBe('1');
});
