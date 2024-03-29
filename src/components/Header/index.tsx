import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <S.HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="Eplay" />
      </Link>
      <nav>
        <S.Links>
          <S.LinkItem>
            <Link to={'/categories'}>Categorias</Link>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">Novidades</a>
          </S.LinkItem>
          <S.LinkItem>
            <a href="#">Promoções</a>
          </S.LinkItem>
        </S.Links>
      </nav>
    </div>
    <S.CartLink href="#">
      <span>0 - produto(s)</span>
      <img src={carrinho} alt="ícone de carrinho de compras" />
    </S.CartLink>
  </S.HeaderBar>
)

export default Header
