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
}: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 92) {
      return text.slice(0, 92) + '...'
    }

    return text
  }
  return (
    <S.Card
      to={`/product/${gameId}`}
      title={`Clique aqui para ver mais detalhes do jogo ${gameTitle}`}
    >
      <img src={gameImage} alt={gameTitle} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.ProductTitle>{gameTitle}</S.ProductTitle>
      <Tag>{gameCategory}</Tag>
      <Tag>{gameSystem}</Tag>
      <S.ProductDescription>
        {getDescription(gameDescription)}
      </S.ProductDescription>
    </S.Card>
  )
}

export default Product
