import { moderateScale } from '~/utils';

export default {
  sceneSpacing: `${moderateScale(24)}px`,
  minimumSpacing: `${moderateScale(4)}px`,
  smallSpacing: `${moderateScale(10)}px`,
  mediumSpacing: `${moderateScale(20)}px`,
  largeSpacing: `${moderateScale(30)}px`,
  giantSpacing: `${moderateScale(50)}px`,
  buttonSpacing: `${moderateScale(5)}px`,
  cardSpacing: `${moderateScale(5)}px`,
} as SpacingsType;
