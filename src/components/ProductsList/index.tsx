import Game from '../../models/Game'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  sectionTitle: string
  background: 'grey' | 'black'
  games: Game[]
}

const ProductsList = ({ background, sectionTitle, games }: Props) => (
  <S.ProductsSection background={background}>
    <div className="container">
      <S.SectionTitle>{sectionTitle}</S.SectionTitle>
      <S.ProductsList>
        {games.map((game) => (
          <Product
            key={game.id}
            gameId={game.id}
            gameCategory={game.category}
            gameImage={game.image}
            gameSystem={game.system}
            gameTitle={game.title}
            gameDescription={game.description}
            infos={game.infos}
          />
        ))}
      </S.ProductsList>
    </div>
  </S.ProductsSection>
)

export default ProductsList
