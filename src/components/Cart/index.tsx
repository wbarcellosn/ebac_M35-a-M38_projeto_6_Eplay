import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, removeFromCart } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/formatPrice'
import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import Tag from '../Tag'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.prices.current!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleCloseCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => handleRemoveItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{`${items.length} jogo(s) no carrinho`}</Quantity>
        <Prices>
          {`Total de: ${formatPrice(getTotalPrice())}`}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
