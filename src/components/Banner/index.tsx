import Button from '../Button'
import Tag from '../Tag'
import Loader from '../Loader'
import { parseToBrl } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'
import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.BannerImage style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.BannerTitle>{game.name}</S.BannerTitle>
          <S.BannerPrices>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            Por apenas {parseToBrl(game.prices.current)}
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
