import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import closeIcon from '../../assets/images/fechar.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartItem = styled.li`
  padding: 8px 0;
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  position: relative;

  img {
    margin-right: 24px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${closeIcon});
    background-color: transparent;
    height: 16px;
    width: 16px;
    border: none;
    position: absolute;
    top: 8;
    right: 0;
    cursor: pointer;
  }
`
export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;
  background-color: ${colors.grey};
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`
export const Quantity = styled.p`
  margin: 32px 0 16px 0;
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
`
export const Prices = styled.p`
  margin-bottom: 24px;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};

  span {
    display: block;
    font-size: 12px;
    color: ${colors.lightGray};
  }
`
