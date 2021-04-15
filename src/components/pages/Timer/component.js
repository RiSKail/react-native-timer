import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import moment from 'moment';

import Button from '@/components/controls/Button';
import LapElement from '@/components/blocks/LapElement';
import CircularProgress from '@/components/blocks/CircularProgress';

import {
  PageContainer,
  ButtonsContainer,
  TimerContainer,
  ListContainer,
} from './styles';

const Timer = () => {
  const [timerLap, setTimerLap] = useState([]);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const onStartHandler = () => {
    setIsActive(!isActive);
  };

  const onStopHandler = () => {
    setTime(0);
    setIsActive(!isActive);
  };

  const onLapHandler = () => {
    if (isActive) {
      setTimerLap(previousTimerLap => [...previousTimerLap, time]);
    }
  };

  const onClearHandler = () => {
    setTimerLap([]);
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevtime => prevtime + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <PageContainer colors={['#97ABFF', '#3b5998', '#123597']}>
      <ScrollView>
        <SafeAreaView>
          <TimerContainer>
            <CircularProgress value={moment(time).format('mm')} text="min" />
            <CircularProgress value={moment(time).format('ss')} text="sec" />
            <CircularProgress
              value={moment(time).milliseconds() / 10}
              text="msec"
            />
          </TimerContainer>
          <ButtonsContainer>
            {!isActive ? (
              <Button
                title="Start"
                bgColor="#2196f3"
                onPress={onStartHandler}
              />
            ) : (
              <Button title="Stop" bgColor="red" onPress={onStopHandler} />
            )}
            <Button title="Lap" bgColor="#2196f3" onPress={onLapHandler} />
            <Button title="Clear" bgColor="#2196f3" onPress={onClearHandler} />
          </ButtonsContainer>
          <ListContainer>
            {timerLap.map((element, index) => (
              <LapElement
                element={element}
                index={index}
                key={index + element}
              />
            ))}
          </ListContainer>
        </SafeAreaView>
      </ScrollView>
    </PageContainer>
  );
};

export default Timer;
