import { v1 } from 'uuid'
import { atom, selector } from 'recoil'

type Animal = {
  name: string
  age: string
  kind: string
}

export const animalState = atom<Animal[]>({
  key: 'animal' + v1(),
  default: [
    { name: 'hector', age: '1', kind: 'dog' },
    { name: 'nabi', age: '3', kind: 'cat' },
  ],
})

type AnimalFilter = 'all' | 'dog' | 'cat'
export const animalFilterState = atom<AnimalFilter>({
  key: 'aninal/filter' + v1(),
  default: 'all',
})

export const filterAnimalState = selector({
  key: 'fileter/animal' + v1(),
  get({ get }) {
    const filter = get(animalFilterState)
    const animals = get(animalState)
    switch (filter) {
      case 'all':
        return animals
      case 'dog':
        return animals.filter((animal) => animal.kind === 'dog')
      case 'cat':
        return animals.filter((animal) => animal.kind === 'cat')
      default:
        return animals
    }
  },
})
