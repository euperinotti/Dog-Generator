import api from '@/axios/axios-provider'
import * as S from './styles'

interface DownloadButtonProps {
  value: string
  href: string
  download: string
}

export const DownloadButton = ({ value, href }: DownloadButtonProps) => {
  return (
    <S.Button
      download={'dog-image'}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={async () => {
        await api.downloadImage(href)
      }}
    >
      <button>
        <object data="/icons/download.svg"></object>
        {value}
      </button>
    </S.Button>
  )
}
