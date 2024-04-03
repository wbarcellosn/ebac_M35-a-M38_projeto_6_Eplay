import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const BannerImage = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding-top: 340px;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
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
export const BannerTitle = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const BannerPrices = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    display: block;
    text-decoration: line-through;
  }
`
