import React from 'react';
import moment from 'moment';

import {ListElement, Element} from './styles';

const LapElement = ({element, index}) => {
  return (
    <ListElement>
      <Element>{index}</Element>
      <Element>
        {moment(element).format('mm:ss')}:{moment(element).milliseconds() / 10}
      </Element>
    </ListElement>
  );
};

export default LapElement;
