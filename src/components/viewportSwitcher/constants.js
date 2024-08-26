export const VIEWPORT_TYPE = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
};

export const VIEWPORT_TYPE_VS_LABELS = {
  [VIEWPORT_TYPE.DESKTOP]: 'Desktop',
  [VIEWPORT_TYPE.MOBILE]: 'Mobile',
};

export const VIEW_TO_DIMENSIONS_MAP = {
  [VIEWPORT_TYPE.DESKTOP]: {
    height: 1000,
    width: 960,
  },
  [VIEWPORT_TYPE.MOBILE]: {
    height: 650,
    width: 400,
  },
};
