import { Link } from 'react-router-dom'
import { openCart } from '../../store/reducers/Cart'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { RootReducer } from '../../store'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const handleOpenCart = () => {
    dispatch(openCart())
  }
  return (
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
      <S.CartButton onClick={handleOpenCart}>
        <span>{`${items.length} - produto(s)`}</span>
        <img src={carrinho} alt="ícone de carrinho de compras" />
      </S.CartButton>
    </S.HeaderBar>
  )
}

export default Header
