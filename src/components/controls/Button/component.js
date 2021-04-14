import React from 'react';

import {ButtonContainer, ButtonText} from './styles';

const CustomButton = ({onPress, bgColor, title}) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);

export default CustomButton;
