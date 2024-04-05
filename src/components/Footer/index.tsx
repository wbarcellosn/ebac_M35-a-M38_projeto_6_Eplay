import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.FooterTitle>Categorias</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.Link to="/categories#rpg">RPG</S.Link>
          </li>
          <li>
            <S.Link to="/categories#action">Ação</S.Link>
          </li>
          <li>
            <S.Link to="/categories#sports">Esportes</S.Link>
          </li>
          <li>
            <S.Link to="/categories#simulation">Simulação</S.Link>
          </li>
          <li>
            <S.Link to="/categories#fight">Luta</S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <S.FooterSection>
        <S.FooterTitle>Acesso rápido</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.Link to="/#on-sales">Promoções</S.Link>
          </li>
          <li>
            <S.Link to="/#soon">Em Breve</S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.FooterContainer>
)

export default Footer
