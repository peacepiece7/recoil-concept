import { useRecoilValue, useRecoilState } from 'recoil'
import {
  animalFilterState,
  animalState,
  filterAnimalState,
} from '../recoil/filterStates'

export default function FilterAnimals() {
  const animals = useRecoilValue(animalState) // === const [aniamlsState, setAnimalsState] = useRecoilState(animalState)
  const filteredAnimals = useRecoilValue(filterAnimalState)

  const [filter, setFilter] = useRecoilState(animalFilterState)

  const updateFilter = (e: any) => {
    setFilter(e.target.value as 'all' | 'dog' | 'cat')
  }

  return (
    <section>
      <h1>Filter Animals</h1>
      <div>
        <p>Filters :</p>
        <select value={filter} onChange={updateFilter}>
          <option value='all'>all</option>
          <option value='dog'>dog</option>
          <option value='cat'>cat</option>
        </select>
      </div>
      <h2>모든 목록</h2>
      {animals.map((animal, index) => (
        <div key={`${animal.name + animal.age + index}`}>
          <span>{`name : ${animal.name} `}</span>
          <span>{`age : ${animal.age} `}</span>
          <span>{`kind : ${animal.kind} `}</span>
        </div>
      ))}
      <h2>필터링 된 목록</h2>
      {filteredAnimals.map((animal, index) => (
        <div key={`${animal.name + animal.age + index}`}>
          <span>{`name : ${animal.name} `}</span>
          <span>{`age : ${animal.age} `}</span>
          <span>{`kind : ${animal.kind} `}</span>
        </div>
      ))}
    </section>
  )
}
