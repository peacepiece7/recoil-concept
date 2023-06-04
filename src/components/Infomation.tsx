import React from 'react'
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil'
import '../App.css'
import { infomationState } from '../recoil/states'

export default function Infomation() {
  const [info, setInfo] = useRecoilState(infomationState)
  const onlySetInfo = useSetRecoilState(infomationState)
  const resetInfoState = useResetRecoilState(infomationState)

  const handleInfomationForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEl = e.target as HTMLFormElement
    const name = (formEl[0] as HTMLInputElement).value
    const age = (formEl[1] as HTMLInputElement).value
    setInfo((prev) => {
      return { ...prev, name, age }
    })
  }

  const fixAgeToHundred = () => {
    onlySetInfo((prev) => ({
      ...prev,
      age: '100',
    }))
  }
  const resetInfo = () => {
    resetInfoState()
  }

  return (
    <section>
      <h1>Infomation</h1>
      <p>{`your name : ${info.name ? info.name : 'not yet'}`}</p>
      <p>{`your age : ${info.age ? info.age : 'not yet'}`}</p>
      <p>{`your location : ${info.address ? info.address : 'not yet'}`}</p>
      <form onSubmit={handleInfomationForm}>
        <input type='text' placeholder='Enter your name' />
        <input type='text' placeholder='enter your age' />
        <input type='submit' defaultValue='submit' />
      </form>
      <button onClick={fixAgeToHundred}>
        이 버튼을 누르면 나이를 100살로 변경합니다.(useSetRecoilState)
      </button>
      <button onClick={resetInfo}>
        이 버튼을 누르면 infomation을 초기화합니다. (useResetRecoilState)
      </button>
    </section>
  )
}
