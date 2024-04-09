import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { getTotalPrice, parseToBrl } from '../../utils'
import { RootReducer } from '../../store'
import { closeCart, removeFromCart } from '../../store/reducers/Cart'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //Functions
  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    handleCloseCart()
  }
  //

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={handleCloseCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{`${items.length} jogo(s) no carrinho`}</S.Quantity>
            <S.Prices>
              {`Total de: ${parseToBrl(getTotalPrice(items))}`}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              title="Clique aqui para continuar com a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">O seu carrinho está vazio</p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
