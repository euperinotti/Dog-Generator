import api from '@/axios/axios-provider'
import { GenerateButton } from '@/components/GenerateButton'
import { ImageArea } from '@/components/ImageArea'
import { Image } from '@/models/Image'
import { useState } from 'react'
import * as S from './styles'
import { DownloadButton } from '@/components/DownloadButton'

export const AppTemplate = () => {
  const [imageInfo, setImageInfo] = useState<Image>()

  const handleClick = async () => {
    const image = await api.getDog()

    setImageInfo(image as Image)
    console.log(imageInfo)
  }

  return (
    <S.Container>
      <S.Main>
        <ImageArea imageInfo={imageInfo as Image} />
        <GenerateButton value="Generate" onClick={handleClick} />
        <DownloadButton
          value={'Baixar'}
          download="dog"
          href={imageInfo?.download as string}
        />
      </S.Main>
    </S.Container>
  )
}
