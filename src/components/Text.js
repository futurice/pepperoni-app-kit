import styled from 'styled-components/native';

export const Text = styled.Text`color: #4b5c5d;`;
export const Bold = Text.extend`font-weight: bold;`;

export const Title = Bold.extend`
  font-size: 28;
  text-align: center;
  padding: 16px;
`;

export const Description = Title.extend`
  font-size: 24;
  font-weight: normal;
`;

export const CenteredText = Bold.extend`text-align: center;`;
