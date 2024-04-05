import { Game } from '../../pages/Home'
import { formatPrice } from '../../utils/formatPrice'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  sectionTitle: string
  background: 'grey' | 'black'
  games: Game[]
  id: string
}

const ProductsList = ({ id, background, sectionTitle, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  return (
    <S.ProductsSection id={id} background={background}>
      <div className="container">
        <S.SectionTitle>{sectionTitle}</S.SectionTitle>
        <S.ProductsList>
          {games?.map((game) => (
            <li key={game.id}>
              <Product
                gameId={game.id}
                gameCategory={game.details.category}
                gameImage={game.media.thumbnail}
                gameSystem={game.details.system}
                gameTitle={game.name}
                gameDescription={game.description}
                infos={getGameTags(game)}
              />
            </li>
          ))}
        </S.ProductsList>
      </div>
    </S.ProductsSection>
  )
}
export default ProductsList
