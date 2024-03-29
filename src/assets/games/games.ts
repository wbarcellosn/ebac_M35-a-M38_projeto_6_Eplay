import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import fifa from '../../assets/images/fifa.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import street from '../../assets/images/street_fighter.png'

export const promotions: Game[] = [
  {
    id: 1,
    image: resident,
    infos: ['R$ 199,00', '-10%'],
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 2,
    image: resident,
    infos: ['R$ 199,00', '-10%'],
    title: 'Resident Evil 4 - Remake',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 3,
    image: fifa,
    infos: ['R$ 99,90', '-50%'],
    title: 'Fifa 2023',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...'
  },
  {
    id: 4,
    image: fifa,
    infos: ['R$ 99,90', '-50%'],
    title: 'Fifa 2023',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...'
  }
]

export const soon: Game[] = [
  {
    id: 5,
    image: diablo,
    infos: ['05/04'],
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.'
  },
  {
    id: 6,
    image: starwars,
    infos: ['05/04'],
    title: 'Star Wars Jedi Survivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...'
  },
  {
    id: 7,
    image: street,
    infos: ['05/04'],
    title: 'Street Fighter 6',
    category: 'Luta',
    system: 'PS5',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.'
  },
  {
    id: 8,
    image: zelda,
    infos: ['05/04'],
    title: 'The Legend of Zelda - TOK',
    category: 'RPG',
    system: 'Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...'
  }
]
