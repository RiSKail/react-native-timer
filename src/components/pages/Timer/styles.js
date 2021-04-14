import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const PageContainer = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  height: ${props => props.ScreenHeight};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #79bbef;
`;

export const TimerContainer = styled.Text`
  width: 100%;
  padding: 50px;
  font-size: 47px;
  font-weight: bold;
  background: #fd6e6a;
  color: #ffffff;
  text-align: center;
`;

export const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 50px;
  color: #ffffff;
  width: 100%;
`;

export const ListElement = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  font-size: 32px;
`;

export const Element = styled.Text`
  font-size: 23px;
  color: #ffffff;
`;
