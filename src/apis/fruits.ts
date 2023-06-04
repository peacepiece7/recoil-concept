import { Fruit } from '../recoil/atoms/fruits'

export const addFruit = async (name: string, kind: 'cat' | 'dog') => {
  await new Promise((res) => setTimeout(res, 1000))
  return {
    name,
    age: String(Math.floor(Math.random() * 10) + 1),
    kind,
  }
}

export const getFruits = async (): Promise<Fruit[]> => {
  await new Promise((res) => setTimeout(res, 2000))
  return [
    {
      name: 'red',
      kind: 'apple',
      origin: 'korea',
    },
    {
      name: 'max',
      kind: 'apple',
      origin: 'korea',
    },
    {
      name: 'lucy',
      kind: 'banana',
      origin: 'china',
    },
  ]
}
