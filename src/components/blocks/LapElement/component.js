import React from 'react'
import moment from 'moment'
import pt from 'prop-types'

import { ListElement, Element } from './styles'

const LapElement = ({ element, index }) => {
  return (
    <ListElement>
      <Element>{index}</Element>
      <Element>
        {moment(element).format('mm:ss')}:{moment(element).milliseconds() / 10}
      </Element>
    </ListElement>
  )
}

LapElement.propTypes = {
  element: pt.number.isRequired,
  index: pt.number.isRequired,
}

export default LapElement
