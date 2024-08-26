// constants
import { VIEWPORT_TYPE, VIEWPORT_TYPE_VS_LABELS } from '../constants';

const VIEWPORT_ORDER = [VIEWPORT_TYPE.DESKTOP, VIEWPORT_TYPE.MOBILE];

export const Switcher = ({ viewportType, onChange }) => {
  return (
    <div className="border-solid border-2 border-black rounded-xl flex flex-col gap-2 p-2">
      {VIEWPORT_ORDER.map((viewportItemType) => (
        <button
          key={viewportItemType}
          data-testid={`viewportSwitcher${viewportItemType}`}
          onClick={() => onChange(viewportItemType)}
          className={`border-solid border-2 border-black hover:border-sky-400 hover:bg-gray-300 rounded-xl p-1 ${
            viewportType === viewportItemType ? 'border-sky-500' : ''
          }`}
        >
          {VIEWPORT_TYPE_VS_LABELS[viewportItemType]}
        </button>
      ))}
    </div>
  );
};
