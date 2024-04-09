import { useState } from 'react'

import Section from '../Section'

import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

import * as S from './styles'

//Types
interface ModalState extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  gameName: string
  galleryItems: GalleryItem[]
}

const Gallery = ({ defaultCover, gameName, galleryItems }: Props) => {
  //States
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  //Functions
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const openModal = (media: GalleryItem) => {
    setModal({ isVisible: true, type: media.type, url: media.url })
  }

  const closeModal = () => {
    setModal({ isVisible: false, type: 'image', url: '' })
  }

  //Component Return
  return (
    <>
      <Section background="black" title="Galeria">
        <S.Items>
          {galleryItems.map((media, index) => (
            <S.Item key={index} onClick={() => openModal(media)}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${gameName}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{gameName}</h4>
            <img src={closeIcon} alt="ícone de fechar" onClick={closeModal} />
          </header>

          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url}></iframe>
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
