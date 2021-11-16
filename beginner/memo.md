# Functional component 와 Class component

### 함수형 vs 클래스형

-   rfc(functional snipet) 와 rcc(class snipet)
-   useEffect 와 componentDidMount() => 컴포넌트가 생설될때 호출함.
-   useEffect cleanup(return()) 와 componentWillUnmount() => 컴포넌트가 사라지기 직전에 호출함.
-   Hook으로 state관리 vs State LifeCycle 사용(DidMount, WillUnmount, etc..)

---

### LifeCycle(Class Component)

-   생성 될 때
    constructor(바인딩, 초기화) -> render -> (DOM 및 refs 업데이트) -> componentDidMount

-   업데이트 될 때
    render -> (DOM 및 refs 업데이트) -> componentDidUpdate

-   제거 할 때(clean up)
    componentWillUnmount

---

### 이벤트

-   버블링
    Target element부터 최상위 window까지 위로 올라면서 순차적으로 실행

-   캡쳐링
    최상위 window부터 Target element까지 아래로 순차적 실행

-   Capture -> target -> Bubble (캡처링 후 target찍고 Bubble 실행)

-   return false 하고싶다면 e.preventDefault()

---

### 조건부 렌더링

-   if else 문으로 컴포넌트를 다르게 return.
-   3항 연산자를 써서 return.
-   && 연산자로 true일때만 return. (조건에 falsy인값 주의.)

```javascript
const UserGreeting = props => {
    //props.count = 0  따라서 falsy한 값. Boolean으로 감싸서 명시적으로 나타내준다.
    return (
        <>
            <h1>{props.name && `${props.name}, `}Welcome.</h1>
            <h2>{Boolean(props.count) && `It's ${props.count} times.`}</h2>
        </>
    );
};
```

---

### List 와 key

-   반복적인 todoList안에서 명시적으로 key를 줘야한다. (key로 인해서 고유 엘리먼트를 찾을 수 있음.)
-   key를 주지않으면 default로 index로 key를 사용.(즉, map의 index로 key를 줄 시 워닝만 사라지고 똑같음.)
-   key는 props로 넘겨줄 수 없다. (key는 식별만 하기 위한 것.)

```javascript
const todoList = todos.map(todo => {
    return <Item key={todo.id} {...todo} />; //key값은 props로 받아서 쓸 수 없다.
});
```

---

### Form

-   Controlled => (input, select, textarea, ...etc)의 value를 state로 관리한다.
    (이벤트 핸들러에 모든 상태를 입력하고 연결해줘야 하기때문에 귀찮을 수 있음. 이러할 경우 대체 기술인 UnControlled Component 사용.)

-   UnControlled => form element자체의 내부 상태 활용
    (useRef를 사용하여 ref= 으로되어있는 element를 contorll함)
