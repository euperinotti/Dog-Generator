import { MouseEventHandler } from 'react'
import * as S from './styles'

interface DownloadButtonProps {
  value: string
  onClick: MouseEventHandler
  href: string
  download: string
  target: string
}

export const DownloadButton = ({
  value,
  onClick,
  href,
  download
}: DownloadButtonProps) => {
  return (
    <S.Button
      download={download}
      role="button"
      href={href}
      onClick={onClick}
      target="_blank"
    >
      <object data="/icons/download.svg"></object>
      {value}
    </S.Button>
  )
}
