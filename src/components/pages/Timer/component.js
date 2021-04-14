import React, {useState, useEffect} from 'react';
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
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function formatSeconds(seconds) {
    var date = new Date(1970, 0, 1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  }

  const onStartHandler = () => {
    setIsActive(!isActive);
  };

  const onStopHandler = () => {
    setTime(0);
    setIsActive(!isActive);
  };

  const onLapHandler = () => {};

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevtime => prevtime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <PageContainer
      colors={['#97ABFF', '#3b5998', '#123597']}
      ScreenHeight={ScreenHeight}>
      <TimerContainer>{formatSeconds(time)}</TimerContainer>
      <ButtonsContainer>
        {!isActive ? (
          <Button title="Start" bgColor="#2196f3" onPress={onStartHandler} />
        ) : (
          <Button title="Stop" bgColor="red" onPress={onStopHandler} />
        )}
        <Button title="Lap" bgColor="#2196f3" onPress={onLapHandler} />
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
