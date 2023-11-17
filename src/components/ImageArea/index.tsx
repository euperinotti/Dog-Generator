import * as S from './styles'

interface ImageAreaProps {
  src: string
}

export const ImageArea = ({ src }: ImageAreaProps) => {
  if (src) {
    return <S.Container></S.Container>
  }

  return <S.Dashed></S.Dashed>
}
