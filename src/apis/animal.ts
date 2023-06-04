import { Animal } from '../recoil/states'

export async function getAnimalInfo(
  name: Animal['name'],
  kind: Animal['kind']
): Promise<Animal> {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  if (!kind) throw new Error('kind is not defined')
  return {
    name: name,
    age: `${Math.floor(Math.random() * 10) + 1}`,
    kind: kind,
  }
}
