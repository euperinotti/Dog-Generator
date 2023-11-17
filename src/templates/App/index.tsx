import { GenerateButton } from '@/components/GenerateButton'
import * as S from './styles'
import { ImageArea } from '@/components/ImageArea'

export const AppTemplate = () => {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <S.Container>
      <S.Main>
        <ImageArea src="" />
        <GenerateButton value="Generate" onClick={handleClick} />
      </S.Main>
    </S.Container>
  )
}
