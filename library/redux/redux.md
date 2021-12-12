# Redux

-   상태를 관리해주는 라이브러리

### flux pattern

-   model -> action -> dispatcher -> store -> model (rerendering)

### Terminology

-   acition{type, paylod}
-   reducer(state, action) => newState
-   store(state lives) created by passing reducer
-   dispatch only way to update state(pass in an action object) => dispatcher를 통해서만 state를 업데이트 할 수 있다. (단반향 플로우)
-   selectors extract specific pieces of information from a store state => (특정한 state의 값을 꺼내오는 것. selector)

### initial setup

-   store created by using reducer function (reducer 함수를 사용하여 store를 만듬)
-   store calls root reducer once save initial state (store가 root reducer를 한번 콜하여 initial 값을 set함)
-   UI first rendered (UI는 selector로 store를 가져와 dispatch가 한번도 일어나지 않았을때 initial 값을 렌더링함)

### Updates

-   Somthing happend / dispatch action (어떤 action이 일어나면, dispatch가 시작됨)
-   store run reducer with prev state & current action save new state (store가 이전 state와 최신 action을 조합하여 새로운 state를 만든다.)
-   notifies all parts store has been updated / Each UI check update (update를 useSelector로 인지하고, UI를 업데이트 해야되는지 아닌건지 체크한다.)
-   need to changed UI rerender (그래서 update가 되었다면 UI를 rerender한다)

### Redux library

-   immer / saga/ thunk / reslsect => 이것을 합쳐서 redux toolkit으로 만듬(RTK)

---

### 사용법

1. store set

-   store.js에 configureStore를 만들어준다 (reducer func 필요)

2. Provider set

-   index.js에 <App />을 <Provider store={store}>로 감싸준다. (store는 store.js import)

### 기능

-   Provider를 통해서 서로 관련이없는 component간의 state를 공유한다.
