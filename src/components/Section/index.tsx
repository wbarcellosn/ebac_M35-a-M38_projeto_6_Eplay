import * as S from './styles'

export type Props = {
  title: string
  background: 'black' | 'grey'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <S.SectionContainer background={background}>
      <div className="container">
        <S.SectionTitle>{title}</S.SectionTitle>
        {children}
      </div>
    </S.SectionContainer>
  )
}

export default Section
