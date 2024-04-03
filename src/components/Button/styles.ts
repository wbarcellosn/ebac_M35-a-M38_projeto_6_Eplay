import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import styled from 'styled-components'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  padding: 8px 16px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
`
