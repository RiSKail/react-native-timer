import styled from 'styled-components/native'

import { NORMAL_FONT, BIG_FONT, WHITE_COLOR } from '@/themes'

export const ListElement = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${WHITE_COLOR};
  font-size: ${BIG_FONT};
`

export const Element = styled.Text`
  font-size: ${NORMAL_FONT};
  color: ${WHITE_COLOR};
`
