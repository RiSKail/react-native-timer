import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import pt from 'prop-types'

import { CIRCULAR_TINT_COLOR, CIRCULAR_BG_COLOR } from '@/themes'
import { TimeText } from './styles'

const CircularProgress = ({ value, text }) => {
  return (
    <AnimatedCircularProgress
      padding={10}
      size={110}
      width={4}
      fill={Number(value) * 1.66}
      tintColor={CIRCULAR_TINT_COLOR}
      backgroundColor={CIRCULAR_BG_COLOR}>
      {_ => <TimeText>{`${Math.trunc(value)} ${text}`}</TimeText>}
    </AnimatedCircularProgress>
  )
}

CircularProgress.propTypes = {
  value: pt.any.isRequired,
  text: pt.string,
}

CircularProgress.defaultProps = {
  text: '',
}

export default CircularProgress
