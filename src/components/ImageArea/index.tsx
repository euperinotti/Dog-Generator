import { Image } from '@/models/Image'
import * as S from './styles'

interface ImageAreaProps {
  imageInfo: Image
}

export const ImageArea = ({ imageInfo }: ImageAreaProps) => {
  if (imageInfo && imageInfo.url) {
    return (
      <>
        <S.Container>
          <S.Image src={imageInfo.display} alt={imageInfo.alt} />
        </S.Container>
        <S.Span>
          {imageInfo.alt} by{' '}
          <S.Link
            href={'https://instagram.com/' + imageInfo.user.instagram}
            target="_blank"
          >
            {imageInfo.user.name}
          </S.Link>
        </S.Span>
      </>
    )
  }

  return (
    <S.Dashed>
      <S.Paragraph>Your image will display here.</S.Paragraph>
    </S.Dashed>
  )
}
