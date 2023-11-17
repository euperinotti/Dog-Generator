import { MouseEventHandler } from 'react'
import * as S from './styles'

interface GenerateButtonProps {
  value: string,
  onClick: MouseEventHandler
}

export const GenerateButton = ({ value, onClick }: GenerateButtonProps) => {
  return <S.Button onClick={onClick}>{value}</S.Button>
}
