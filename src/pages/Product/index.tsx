import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Galery'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section background="black" title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section background="grey" title="Mais detalhes">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor(a):</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          {game.details.languages.join(', ')}entre outros. As opções de áudio e
          legendas podem ser ajustadas nas configurações do jogo.
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        gameName={game.name}
        galleryItems={game.media.gallery}
      />
    </>
  )
}

export default Product
