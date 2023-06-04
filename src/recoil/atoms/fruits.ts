import { atom, selector } from 'recoil'
import { v1 } from 'uuid'
import { getFruits } from '../../apis/Fruits'

export type Fruit = {
  name: string
  kind: 'apple' | 'banana'
  origin: 'korea' | 'china'
}

// 로드시 서버에서 fruits를 받아 옴
const fruitsState = atom<Fruit[]>({
  key: 'fruits' + v1(),
  default: selector({
    key: 'fruits/default' + v1(),
    get: async () => await getFruits(),
  }),
})

// 1.
// [fruits, setFruits = useRecoilState(fruitsState)
// setFruits((prev) => [newFruits, ...prev])한 다음 addFruits([newFruits])

// 2.
// fruts = useRecoilValue(fruitsState)
// setFruits = useSetRecoilState(addFrutiQuery?)
