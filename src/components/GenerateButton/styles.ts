import theme from '@/styles/theme'
import styled from 'styled-components'

export const Button = styled.button`
  font-family: ${theme.fonts.family.default};
  height: 60px;
  width: 100%;
  max-width: 300px;
  border-radius: 30px;
  font-size: 30px;
  font-weight: ${theme.fonts.weight.bold};
  background-image: linear-gradient(
    to right,
    ${theme.colors.red},
    ${theme.colors.orange}
  );
  color: ${theme.colors.white};
  box-shadow: 0px 15px 37px #000;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  transition: ease-in-out 200ms;
`
