import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { openCart } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

import * as S from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenCart = () => {
    dispatch(openCart())
  }
  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to={'/'}>
            <h1>
              <img src={logo} alt="Eplay" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique paga acessar a página de categorias"
                  to={'/categories'}
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique paga acessar a secão 'em breve'"
                  to="/#soon"
                >
                  Em Breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique paga acessar a secão de promoções"
                  to="/#on-sales"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={handleOpenCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="ícone de carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="Clique paga acessar a página de categorias"
              to={'/categories'}
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique paga acessar a secão 'em breve'"
              to="/#soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em Breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique paga acessar a secão de promoções"
              to="/#on-sales"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
