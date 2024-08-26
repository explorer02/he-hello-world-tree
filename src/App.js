import React from 'react';

// components
import { ButtonCounter } from './components/ButtonCounter';
import { ViewportSwitcher } from './components/viewportSwitcher';

export default function App() {
  return (
    <div className="h-full w-full overflow-hidden">
      <ViewportSwitcher>
        <ButtonCounter />
      </ViewportSwitcher>
    </div>
  );
}
