import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  padding: 15px 25px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
`;
