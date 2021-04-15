import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {TimeText} from './styles';

const CircularProgress = ({value, text}) => {
  return (
    <AnimatedCircularProgress
      padding={10}
      size={100}
      width={4}
      fill={Number(value) * 1.66}
      tintColor="#2196f3"
      backgroundColor="#79bbef">
      {_ => <TimeText>{`${Math.trunc(value)} ${text}`}</TimeText>}
    </AnimatedCircularProgress>
  );
};

export default CircularProgress;
