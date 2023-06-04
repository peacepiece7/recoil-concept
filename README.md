# Recoil Concept

# Initialize

`npm create vite@latest recoil-concept -- --template react-ts`

# concept

- Props drilling문제를 해결해 줍니다.
- 코드 분할이 가능하고, 랜더링 성능을 최적화 해줍니다.
- React답게 상태 관리가 가능한 라이브러리 입니다.
- Shared state가 Local state처럼 간단한 get/set 인터페이스로 접근할 수 있고, reducers 등 캡슐화 할 수 있습니다.
- React Official에서 만든 라이브러리는 아니지만 Facebook sw엔지니어가 만들었습니다.

## Atoms

- 상태의 단위입니다.
- 상태을 describe하고, update할 수 있습니다.

```js
// recoil_state.ts
const fontSizeState = atom({
  key: 'font/size',
  default: 14,
})

// FontButton.tsx
const [fontSize, setFontSize] = useRecoilState(fontSizeState)
```

## Selectors

- atoms, selectors를 입력으로 받는 순수 함수 입니다.
- 기본적으로 상태를 describe하고 계산된 값을 반환합니다.
- 상태가 여려 atom을 구독하고 있을 때 writable하게 만들 수 있습니다.

```js
const fontSizeLabelState = selector({
  key: 'font/size',
  get: ({ get }) => {
    const fontSize = get(fontSizeState)
    const uit = 'px'
    return `${fontSize}${unit}}`
  },
})

const fontSizeLabel = useRecoilValue(fontSizeLabelState)
```

### Selector, atom의 차이

selectors와 atoms는 동인할 인터페이스를 가지기 떄문에 대체 가능합니다.

# Recoil ESLint 추천 설정

https://recoiljs.org/ko/docs/introduction/installation
