import theme from '@/styles/theme'
import styled from 'styled-components'

export const Button = styled.a`
  height: 60px;
  width: 100%;
  max-width: 300px;
  font-family: ${theme.fonts.family.default};
  font-size: 30px;
  font-weight: ${theme.fonts.weight.medium};
  color: ${theme.colors.white};
  cursor: pointer;
  background-color: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 26px;

  &:hover {
    transform: scale(1.05);
  }

  transition: ease-in-out 200ms;
`
