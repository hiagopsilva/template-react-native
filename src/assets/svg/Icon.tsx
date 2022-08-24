/* eslint-disable */
/* tslint:disable */
import React, { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
  width?: number | string;
  height?: number | string;
};

const Icon: FC<Props> = ({ width = 300, height = 150 }) => (
  <Svg width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
         x="3" y="3" width="7" height="7" rx="1" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"
      />
      <Path
         x="3" y="3" width="7" height="7" rx="1" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"
      />
      <Path
         x="3" y="3" width="7" height="7" rx="1" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"
      />
      <Path
          x="3" y="3" width="7" height="7" rx="1" stroke="#CCD2E3" stroke-width="2" stroke-linecap="round"
      />
  </Svg>
);


export default Icon;
