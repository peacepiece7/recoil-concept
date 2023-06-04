import { atom, selector, selectorFamily } from 'recoil'
// 개발 모드에서 key가 재선언되는 문제를 해결하기 위해 uuid를 사용
import { v1 } from 'uuid'

// * 기본 사용 방법
export const hectorCounterState = atom({
  key: `counter/hector/${v1()}`,
  default: 0,
})

export const sectorCounterState = atom({
  key: `counter/sector/${v1()}`,
  default: 0,
})

export const hectorCounterLabelState = selector({
  key: `counter/hector/label/${v1()}`,
  get: ({ get }) => {
    const label = get(hectorCounterState)
    return `Hector: ${label}`
  },
})

export const sectorCounterLabelState = selector({
  key: `counter/sector/label/${v1()}`,
  get: ({ get }) => {
    const label = get(sectorCounterState)
    return `Sector: ${label}`
  },
})

// * atom이 객체일 경우
export type Info = {
  name: string
  age: string | null
  address: string
}
export const infomationState = atom<Info>({
  key: `info/${v1()}`,
  default: {
    name: '',
    age: null,
    address: 'Somewhere in Cosmos',
  },
})
