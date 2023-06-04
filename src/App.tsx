import { Suspense } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import {
  hectorCounterState,
  sectorCounterState,
  hectorCounterLabelState,
  sectorCounterLabelState,
} from './recoil/states'

import Infomation from './components/Infomation'
import FilterAnimals from './components/FilterAnimals'
import AsyncUser from './components/Async'

function App() {
  // 기본 사용법
  const [hectorCount, setHectorCount] = useRecoilState(hectorCounterState)
  const [sectorCount, setSectorCount] = useRecoilState(sectorCounterState)
  const hectorCountLabel = useRecoilValue(hectorCounterLabelState)
  const sectorCountLabel = useRecoilValue(sectorCounterLabelState)

  const increaseHectorCount = () => {
    setHectorCount(hectorCount + 1)
  }
  const decreaseHectorCount = () => {
    setHectorCount(hectorCount - 1)
  }

  const increaseSectorCount = () => {
    setSectorCount(sectorCount + 1)
  }
  const decreaseSectorCount = () => {
    setSectorCount(sectorCount - 1)
  }
  return (
    <div>
      <div>
        <h2>{hectorCountLabel}</h2>
        <div>{hectorCount}</div>
        <button onClick={increaseHectorCount}>+</button>
        <button onClick={decreaseHectorCount}>-</button>
      </div>
      <div style={{ marginTop: '50px' }}>
        <h2>{sectorCountLabel}</h2>
        <div>{sectorCount}</div>
        <button onClick={increaseSectorCount}>+</button>
        <button onClick={decreaseSectorCount}>-</button>
      </div>
      <Infomation></Infomation>
      <FilterAnimals></FilterAnimals>

      <Suspense fallback={<h2>loading...</h2>}>
        <AsyncUser></AsyncUser>
      </Suspense>
    </div>
  )
}

export default App
