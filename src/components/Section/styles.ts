import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'
import { Card } from '../Product/styles'

export const SectionContainer = styled.section<Omit<Props, 'title'>>`
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.grey};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.grey : colors.black};
  }

  p {
    max-width: 640px;
    font-size: 14px;
    line-height: 22px;
  }
`
export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
