import api from '@/axios/axios-provider'
import { GenerateButton } from '@/components/GenerateButton'
import { ImageArea } from '@/components/ImageArea'
import { Image } from '@/models/Image'
import { useState } from 'react'
import * as S from './styles'

export const AppTemplate = () => {
  const [imageInfo, setImageInfo] = useState<Image>()

  const handleClick = async () => {
    const image = await api.getDog()

    setImageInfo(image as Image)
  }

  return (
    <S.Container>
      <S.Main>
        <ImageArea imageInfo={imageInfo as Image} />
        <GenerateButton value="Generate" onClick={handleClick} />
      </S.Main>
    </S.Container>
  )
}
