import {
  moderateScale as mdscl,
  scale as sc,
  verticalScale as vtscl,
} from 'react-native-size-matters';

export {default as colors} from './colors';
export {default as radius} from './radius';
export {default as spacings} from './spacings';

export const moderateScale = (value: number): string => `${mdscl(value)}px`;
export const verticalScale = (value: number): string => `${vtscl(value)}px`;
export const scale = (value: number): string => `${sc(value)}px`;
