import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'
const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightgames } = useGetFightGamesQuery()

  if (actionGames && sportsGames && rpgGames && simulationGames && fightgames) {
    return (
      <>
        <ProductsList
          id="action"
          background="black"
          sectionTitle="Ação"
          games={actionGames}
        />
        <ProductsList
          id="sports"
          background="grey"
          sectionTitle="Esportes"
          games={sportsGames}
        />
        <ProductsList
          id="rpg"
          background="black"
          sectionTitle="RPG"
          games={rpgGames}
        />
        <ProductsList
          id="simulation"
          background="grey"
          sectionTitle="Simulação"
          games={simulationGames}
        />
        <ProductsList
          id="fight"
          background="black"
          sectionTitle="Luta"
          games={fightgames}
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
