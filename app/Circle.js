// @flow

import React from 'react';
import {View} from 'reactors';

type $props = {
  border: number,
  color: string,
  size: number,
  style: Object | number,
};

export default function Circle({border, color, size, style}: $props) {
  return (
    <View
      style={[
        {
          borderWidth: border,
          borderColor: color,
          borderRadius: size / 2,
          height: size,
          width: size,
        },
        style,
      ]}
      />
  );
}
