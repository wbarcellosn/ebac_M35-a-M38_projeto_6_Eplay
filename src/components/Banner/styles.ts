import styled from 'styled-components'
import bannerImgSpider from '../../assets/images/banner-homem-aranha.png'
import { TagContainer } from '../Tag/styles'

export const BannerImage = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-image: url(${bannerImgSpider});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
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
    text-decoration: line-through;
  }
`
