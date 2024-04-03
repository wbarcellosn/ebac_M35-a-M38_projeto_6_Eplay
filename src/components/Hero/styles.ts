import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  padding-top: 16px;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    position: relative;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.56);
    content: '';
  }
`

export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${colors.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    margin: 16px 0;
    font-size: 18px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
