import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 800px;
  height: 550px;
`

export const Dashed = styled(Container)`
  border: 4px dashed ${theme.colors.darkGrey};
`
