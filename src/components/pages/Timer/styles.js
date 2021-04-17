import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import {
  BUTTONS_CONTAINER_COLOR,
  TIMER_CONTAINER_COLOR,
  WHITE_COLOR,
  TRIPLE_UNIT,
  EIGHT_UNIT,
} from '@/themes'

export const PageContainer = styled(LinearGradient)`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  background: ${BUTTONS_CONTAINER_COLOR};
`

export const TimerContainer = styled.Text`
  text-align: center;
  width: 100%;
  padding-top: ${TRIPLE_UNIT};
  padding-bottom: ${TRIPLE_UNIT};
  background: ${TIMER_CONTAINER_COLOR};
`

export const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${EIGHT_UNIT};
  color: ${WHITE_COLOR};
  width: 100%;
`
