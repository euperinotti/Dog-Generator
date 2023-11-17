import { Image } from '@/models/Image'
import * as S from './styles'

interface ImageAreaProps {
  imageInfo: Image
}

export const ImageArea = ({ imageInfo }: ImageAreaProps) => {
  if (imageInfo.url) {
    return (
      <S.Container>
        <S.Image src={imageInfo.url} />
        <S.Span>
          {imageInfo.alt} by{' '}
          <S.Link href={'https://instagram.com/' + imageInfo.user.instagram}>
            {imageInfo.user.name}
          </S.Link>
        </S.Span>
      </S.Container>
    )
  }

  return (
    <S.Dashed>
      <S.Paragraph>Your image will display here.</S.Paragraph>
    </S.Dashed>
  )
}
