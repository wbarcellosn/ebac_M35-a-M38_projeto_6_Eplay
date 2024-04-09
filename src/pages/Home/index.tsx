import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sales"
        background="grey"
        sectionTitle="Promoções"
        games={onSaleGames}
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        id="soon"
        background="black"
        sectionTitle="Em breve"
        games={soonGames}
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
