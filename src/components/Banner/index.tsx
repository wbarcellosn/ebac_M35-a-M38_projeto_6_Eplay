import { useEffect, useState } from 'react'
import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
import { formatPrice } from '../../utils/formatPrice'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.BannerImage style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.BannerTitle>{game.name}</S.BannerTitle>
          <S.BannerPrices>
            {game.prices.discount && (
              <span>De {formatPrice(game.prices.old)}</span>
            )}
            Por apenas {formatPrice(game.prices.current)}
          </S.BannerPrices>
        </div>
        <Button
          type="link"
          to={`product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.BannerImage>
  )
}

export default Banner
