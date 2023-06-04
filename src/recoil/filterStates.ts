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
/**
 * 아래 예시처럼 selector를 사용해서 비동기적으로 데이터를 받아올 수 이습니다.
 * @example
 *  const fruitsState = atom<Fruit[]>({
 *  key: 'fruits' + v1(),
 *  default: selector({
 *    key: 'fruits/default' + v1(),
 *    get: async () => await getFruits(),
 *  }),
 * })
 */

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
