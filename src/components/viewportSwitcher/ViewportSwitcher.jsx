// lib
import { useMemo, useState, ReactNode } from 'react';

// components
import { Switcher } from './components/Switcher';

// helpers
import { getDimensions } from './helpers/getDimensions';

// constants
import { VIEWPORT_TYPE } from './constants';

const ViewportSwitcher = ({ children }) => {
  const [viewportType, setViewportType] = useState(VIEWPORT_TYPE.DESKTOP);

  const { height, width } = useMemo(
    () => getDimensions({ viewportType }),
    [viewportType]
  );

  const isDesktop = viewportType === VIEWPORT_TYPE.DESKTOP;

  if (isDesktop) {
    return (
      <div className="h-full flex justify-center gap-2 overflow-y-auto p-4">
        <div
          className="p-4 border-solid border-2 border-black rounded-xl"
          style={{
            width,
          }}
        >
          {children}
        </div>
        <div
          className="absolute top-4"
          style={{
            right: `calc(50% - (${width} / 2) - 6.4rem)`,
          }}
        >
          <Switcher onChange={setViewportType} viewportType={viewportType} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex justify-center overflow-auto">
      <div className="h-full flex-none flex gap-2 items-start p-4">
        <div
          className="flex-initial min-h-0 max-h-full border-solid border-2 border-black rounded-xl"
          style={{
            width,
            height,
          }}
        >
          <div className="overflow-y-auto h-full w-full p-4">{children}</div>
        </div>

        <div className="relative flex-none">
          <Switcher onChange={setViewportType} viewportType={viewportType} />
        </div>
      </div>
    </div>
  );
};

export { ViewportSwitcher };
