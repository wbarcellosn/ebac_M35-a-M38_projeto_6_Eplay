import { parseToBrl } from '../../utils'
import Loader from '../Loader'

import Product from '../Product'

import * as S from './styles'

export type Props = {
  sectionTitle: string
  background: 'grey' | 'black'
  games?: Game[]
  id: string
  isLoading: boolean
}

const ProductsList = ({
  id,
  background,
  sectionTitle,
  games,
  isLoading
}: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{sectionTitle}</S.Title>
        <S.List>
          {games &&
            games.map((game) => (
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
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductsList
