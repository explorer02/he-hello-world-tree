// constants
import { VIEWPORT_TYPE, VIEW_TO_DIMENSIONS_MAP } from '../constants';

export const getDimensions = ({ viewportType }) => {
  switch (viewportType) {
    case VIEWPORT_TYPE.DESKTOP: {
      return {
        height: 'auto',
        width: `${VIEW_TO_DIMENSIONS_MAP[viewportType].width}px`,
      };
    }

    default: {
      return {
        height: `${VIEW_TO_DIMENSIONS_MAP[viewportType].height}px`,
        width: `${VIEW_TO_DIMENSIONS_MAP[viewportType].width}px`,
      };
    }
  }
};
