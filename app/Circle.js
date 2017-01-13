// @flow

import React from 'react';
import {Text, View} from 'reactors';

import Declarations from 'reactors/dist/API/StyleSheet/Declarations';

console.warn({circle: new Declarations(
  [
    {
      borderWidth: 10,
      borderColor: 'red',
      borderRadius: 200 / 2,
      height: 200,
      width: 200,
    },
    {margin: 10},
  ]
).toObject()});

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
