import { SectionContainer, SectionTitle } from './styles'

export type Props = {
  title: string
  background: 'black' | 'grey'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <SectionContainer background={background}>
      <div className="container">
        <SectionTitle>{title}</SectionTitle>
        {children}
      </div>
    </SectionContainer>
  )
}

export default Section
