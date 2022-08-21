import axios from 'axios'

const axiosPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const PokemonAPI = {
  read(id: string | number) {
    const url = `/${id}`
    return axiosPokemon.get(url)
  },
}
