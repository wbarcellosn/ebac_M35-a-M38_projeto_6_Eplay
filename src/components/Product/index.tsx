import Tag from '../Tag'
import * as S from './styles'

type Props = {
  gameId: number
  gameImage: string
  gameTitle: string
  gameCategory: string
  gameSystem: string
  gameDescription: string
  infos: string[]
}

const Product = ({
  gameId,
  gameImage,
  gameTitle,
  gameCategory,
  gameSystem,
  gameDescription,
  infos
}: Props) => (
  <S.Card>
    <img src={gameImage} alt={gameTitle} />
    <S.Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </S.Infos>
    <S.ProductTitle>{gameTitle}</S.ProductTitle>
    <Tag>{gameCategory}</Tag>
    <Tag>{gameSystem}</Tag>
    <S.ProductDescription>{gameDescription}</S.ProductDescription>
  </S.Card>
)

export default Product