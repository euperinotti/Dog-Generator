import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Dashed = styled(Container)`
  border: 4px dashed ${theme.colors.darkGrey};
`

export const Paragraph = styled.p`
  font-weight: ${theme.fonts.weight.bold};
  font-size: 26px;
  color: ${theme.colors.darkGrey};
  width: 80%;
  text-align: center;
`

export const Image = styled.img`
  object-fit: contain;
`

export const Span = styled.span`
  font-weight: ${theme.fonts.weight.bold};
  font-size: 26px;
  color: ${theme.colors.darkGrey};
  width: 80%;
  text-align: center;
`

export const Link = styled.a``
