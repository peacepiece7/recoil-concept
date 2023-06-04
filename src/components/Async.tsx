import { useRecoilValue, useSetRecoilState } from 'recoil'
import { currentUserIdState, currentUserNameQuery } from '../recoil/userState'
import UserInfo from './UserInfo'

export default function AsyncUser() {
  const setUserId = useSetRecoilState(currentUserIdState)
  const userName = useRecoilValue(currentUserNameQuery)

  function changeUserInfo() {
    setUserId((prev) => {
      if (prev == 1) return 2
      else if (prev == 2) return 3
      return 1
    })
  }
  return (
    <section>
      <h1>Async User Data</h1>
      <UserInfo name={userName} />
      <button onClick={changeUserInfo}>change User Info</button>
    </section>
  )
}
