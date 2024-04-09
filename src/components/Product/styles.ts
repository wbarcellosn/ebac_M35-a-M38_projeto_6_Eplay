import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  height: 100%;
  display: block;
  padding: 8px;
  background-color: ${colors.grey};
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const ProductTitle = styled.h3`
  display: block;
  margin: 16px 0 8px 0;
  font-size: 16px;
  font-weight: bold;
`
export const ProductDescription = styled.p`
  display: block;
  margin-top: 16px;
  font-size: 14px;
  line-height: 22px;
`
