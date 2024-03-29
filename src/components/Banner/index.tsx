import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

const Banner = () => (
  <S.BannerImage>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <S.BannerTitle>
          Marvel&apos;s Spider Man: Miles Morales PS4 & PS5
        </S.BannerTitle>
        <S.BannerPrices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,00
        </S.BannerPrices>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </S.BannerImage>
)

export default Banner
