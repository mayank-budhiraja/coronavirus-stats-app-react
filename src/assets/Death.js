import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgDeath(props) {
  return (
    <Svg viewBox="0 0 608 553" {...props}>
      <Path fill="none" d="M487 178l70.71-70.71" />
      <Path
        d="M502.97 171.84h-94.2V77.69c0-33.94-27.74-61.69-61.66-61.69H260.3c-33.92 0-61.69 27.75-61.69 61.69v94.15h-94.17c-33.92 0-61.66 27.75-61.66 61.69v86.81c0 33.91 27.74 61.67 61.66 61.67h94.17v94.17c0 33.92 27.77 61.67 61.69 61.67h86.81c33.92 0 61.66-27.75 61.66-61.67v-94.17h94.2c33.89 0 61.66-27.77 61.66-61.67v-86.81c-.01-33.94-27.77-61.69-61.66-61.69z"
        fill="#f99191"
      />
    </Svg>
  );
}

export default SvgDeath;
