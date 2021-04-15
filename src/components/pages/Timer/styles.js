import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const PageContainer = styled(LinearGradient)`
  display: flex;
  flex: 1;
  flex-direction: column;
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
  text-align: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #fd6e6a;
`;

export const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 50px;
  color: #ffffff;
  width: 100%;
`;
