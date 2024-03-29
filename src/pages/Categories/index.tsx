import ProductsList from '../../components/ProductsList'
import { promotions, soon } from '../../assets/games/games'

const Categories = () => (
  <>
    <ProductsList background="grey" sectionTitle="RPG" games={promotions} />
    <ProductsList background="black" sectionTitle="Ação" games={soon} />
    <ProductsList
      background="grey"
      sectionTitle="Aventura"
      games={promotions}
    />
    <ProductsList background="black" sectionTitle="FPS" games={soon} />
  </>
)

export default Categories
