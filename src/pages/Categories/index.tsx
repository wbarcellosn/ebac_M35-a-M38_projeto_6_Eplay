import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetFightGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightgames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()

  return (
    <>
      <ProductsList
        id="action"
        background="black"
        sectionTitle="Ação"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sports"
        background="grey"
        sectionTitle="Esportes"
        games={sportsGames}
        isLoading={isLoadingSports}
      />
      <ProductsList
        id="rpg"
        background="black"
        sectionTitle="RPG"
        games={rpgGames}
        isLoading={isLoadingRpg}
      />
      <ProductsList
        id="simulation"
        background="grey"
        sectionTitle="Simulação"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fight"
        background="black"
        sectionTitle="Luta"
        games={fightgames}
        isLoading={isLoadingFight}
      />
    </>
  )
}

export default Categories
