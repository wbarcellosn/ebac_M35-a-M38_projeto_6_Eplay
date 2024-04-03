import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])
  const [simulationGames, setSimulationGames] = useState<Game[]>([])
  const [fightgames, setFightGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulationGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))
  }, [])
  return (
    <>
      <ProductsList
        background="black"
        sectionTitle="Ação"
        games={actionGames}
      />
      <ProductsList
        background="grey"
        sectionTitle="Esportes"
        games={sportsGames}
      />
      <ProductsList background="black" sectionTitle="RPG" games={rpgGames} />
      <ProductsList
        background="grey"
        sectionTitle="Simulação"
        games={simulationGames}
      />
      <ProductsList background="black" sectionTitle="Luta" games={fightgames} />
    </>
  )
}

export default Categories
