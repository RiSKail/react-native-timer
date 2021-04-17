import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import moment from 'moment'

import Button from '@/components/controls/Button'
import LapElement from '@/components/blocks/LapElement'
import CircularProgress from '@/components/blocks/CircularProgress'

import internalization from '@/internalization'

import { BUTTON_COLOR, BUTTON_ENABLED_COLOR, BG_GRADIENT_COLOR } from '@/themes'
import { PageContainer, ButtonsContainer, TimerContainer, ListContainer } from './styles'

const Timer = () => {
  const [timerLap, setTimerLap] = useState([])
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const onStartHandler = () => {
    setIsActive(!isActive)
  }

  const onStopHandler = () => {
    setTime(0)
    setIsActive(!isActive)
  }

  const onLapHandler = () => {
    if (isActive) {
      setTimerLap(previousTimerLap => [...previousTimerLap, time])
    }
  }

  const onClearHandler = () => {
    setTimerLap([])
  }

  useEffect(() => {
    let interval = null

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevtime => prevtime + 100)
      }, 100)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <PageContainer colors={BG_GRADIENT_COLOR}>
      <TimerContainer>
        <CircularProgress value={moment(time).format('mm')} text={internalization.circular_min} />
        <CircularProgress value={moment(time).format('ss')} text={internalization.circular_sec} />
        <CircularProgress
          value={moment(time).milliseconds() / 10}
          text={internalization.circular_msec}
        />
      </TimerContainer>
      <ButtonsContainer>
        {!isActive ? (
          <Button
            title={internalization.button_start}
            bgColor={BUTTON_COLOR}
            onPress={onStartHandler}
          />
        ) : (
          <Button
            title={internalization.button_stop}
            bgColor={BUTTON_ENABLED_COLOR}
            onPress={onStopHandler}
          />
        )}
        <Button
          title={internalization.button_lap}
          bgColor={BUTTON_COLOR}
          onPress={onLapHandler}
          disabled={!isActive}
        />
        <Button
          title={internalization.button_clear}
          bgColor={BUTTON_COLOR}
          onPress={onClearHandler}
        />
      </ButtonsContainer>
      <ScrollView>
        <ListContainer>
          {timerLap.map((element, index) => (
            <LapElement element={element} index={index} key={index + element} />
          ))}
        </ListContainer>
      </ScrollView>
    </PageContainer>
  )
}

export default Timer
