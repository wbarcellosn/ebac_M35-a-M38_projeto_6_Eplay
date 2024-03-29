import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.FooterTitle>Categorias</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.Link>RPG</S.Link>
          </li>
          <li>
            <S.Link>Ação</S.Link>
          </li>
          <li>
            <S.Link>Aventura</S.Link>
          </li>
          <li>
            <S.Link>Esportes</S.Link>
          </li>
          <li>
            <S.Link>Simulação</S.Link>
          </li>
          <li>
            <S.Link>Estratégia</S.Link>
          </li>
          <li>
            <S.Link>FPS</S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <S.FooterSection>
        <S.FooterTitle>Acesso rápido</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.Link>Novidades</S.Link>
          </li>
          <li>
            <S.Link>Promoções</S.Link>
          </li>
          <li>
            <S.Link>Em Breve</S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.FooterContainer>
)

export default Footer
