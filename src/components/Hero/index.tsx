import { useDispatch } from 'react-redux'
import { addToCart, openCart } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/formatPrice'
import { Game } from '../../pages/Home'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import Button from '../Button'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(game))
    dispatch(openCart())
  }
  return (
    <Banner style={{ backgroundImage: `URL(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variant="primary"
              title="Clique para adicionar o jogo ao carrinho"
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
