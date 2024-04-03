import { useState } from 'react'
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import howgwarts from '../../assets/images/fundo_hogwarts.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import closebtn from '../../assets/images/fechar.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'

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
        <Items>
          {galleryItems.map((media, index) => (
            <Item key={index} onClick={() => openModal(media)}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${gameName}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{gameName}</h4>
            <img
              src={closebtn}
              alt="ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>

          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url}></iframe>
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
