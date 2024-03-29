import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { promotions, soon } from '../../assets/games/games'

const Home = () => (
  <>
    <Banner />
    <ProductsList
      background="grey"
      sectionTitle="Promoções"
      games={promotions}
    />
    <ProductsList background="black" sectionTitle="Em breve" games={soon} />
  </>
)

export default Home
