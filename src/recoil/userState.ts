import { v1 } from 'uuid'
import { atom, selector } from 'recoil'

export const currentUserIdState = atom({
  key: 'currentUserIdState' + v1(),
  default: 1,
})

export const currentUserNameQuery = selector({
  key: 'currentUserNameQuery' + v1(),
  get: async ({ get }) => {
    await new Promise((res) => setTimeout(res, 1000)) // api 보냈다고 가정
    const currentUserId = get(currentUserIdState)
    if (currentUserId === 1) {
      return 'hector'
    } else if (currentUserId === 2) {
      return 'vector'
    } else if (currentUserId === 3) {
      return 'sector'
    }
    return 'unknown'
  },
})
