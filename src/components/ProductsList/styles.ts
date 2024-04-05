import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Props } from '.'
import { Card } from '../Product/styles'

export const ProductsSection = styled.section<
  Omit<Props, 'sectionTitle' | 'games'>
>`
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.grey : colors.black};
  }
`
export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
export const ProductsList = styled.ul`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
