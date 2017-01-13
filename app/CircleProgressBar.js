// @flow

import React from 'react';
import {Text, View} from 'reactors';
import {Row} from 'reactors-grid';
import Circle from './Circle';
import styles from './style';

type $props = {
  border: number,
  color: string,
  percent: number,
  size: number,
};

export default function CircleProgressBar({
  border,
  color,
  percent,
  size,
  }: $props) {
  const sizeToPercent = size / 100;

  let
    lower,
    lowerHeight = 0,
    missing,
    upperHeight = 0
    ;

  if (percent < 50) {
    missing = 50 - percent;
    lower = (sizeToPercent * missing) * 2;
    lowerHeight = size - lower;
  } else {
    missing = 100 - percent;
    lower = (sizeToPercent * missing) * 2;
    upperHeight = size - lower;
    lowerHeight = size;
  }

  return (
    <Row center-x down style={{height: size + 20, width: size}}>
      <View style={{height: size + 10, width: size / 2}}>
        <View style={[styles.left, {height: lowerHeight + 10, width: size / 2}]}>
          <Circle border={border} color={color} size={size}/>
        </View>
      </View>

      <View
        style={[
          styles.right,
          {height: upperHeight + 10, width: size / 2},
          {opacity: percent > 50 ? 1 : 0},
        ]}
        >
        <Circle border={border} color={color} size={size} />
      </View>
    </Row>
  );
}
