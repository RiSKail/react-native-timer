import React from 'react';
import {Dimensions} from 'react-native';

import Button from '../../controls/Button';

import {
  PageContainer,
  ButtonsContainer,
  TimerContainer,
  ListContainer,
  ListElement,
  Element,
} from './styles';

const Timer = () => {
  const ScreenHeight = Dimensions.get('window').height;

  return (
    <PageContainer
      colors={['#97ABFF', '#3b5998', '#123597']}
      ScreenHeight={ScreenHeight}>
      <TimerContainer>12:00:00</TimerContainer>
      <ButtonsContainer>
        <Button title="Start" bgColor="#2196f3" onPress={() => true} />
        <Button title="Lap" bgColor="#2196f3" onPress={() => true} />
      </ButtonsContainer>
      <ListContainer>
        <ListElement>
          <Element>Test</Element>
          <Element>00:00:00</Element>
        </ListElement>
      </ListContainer>
    </PageContainer>
  );
};

export default Timer;
