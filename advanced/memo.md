# Advanced

### useReducer

```javascript
const initialState = { count: 0, type: 'Loading...' };

function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increase':
            return { count: state.count + 1, type: 'increase' };
        case 'decrease':
            return { count: state.count - 1, type: 'decrease' };
        default:
            throw new Error();
    }
}
const [state, dispatch] = useReducer(reducer, initialState);

<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>;
```

---

### HOC(고차 컴포넌트)

-   컴포넌트를 인자로 가져와 새 컴포넌트로 반환하는 함수.
-   공통적으로 재사용이 될만한 기능을 반환해서 사용함.

```javascript
//고차컴포넌트 함수
export default function withLoading(Component) {
    const WithLoadingComponent = props => {
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        }, []);

        return loading ? <p>Loading...</p> : <Component {...props} />;
    };

    return WithLoadingComponent;
}

//함수 사용 후 랜더
const Button = () => <button>Click</button>;
export default withLoading(Button);
```

---

### Memoization(최적화)

-   메모이제이션은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는것. (캐시같은 느낌.)

#### Profiler API

-   리액트에 내장되어있는 API. 어플리케이션이 렌더링하는 것을 측정함.(REACT 공식문서 Profiler API 참고)

#### React.memo

-   컴포넌트의 props를 비교하여 Memoization함. (props가 변경되지 않았다면 메모리에 저장된 컴포넌트를 그대로씀.)
-   HOC 구조
-   export default memo(CommentItem);

#### useMemo

-   계산을 통해 만들어진 특정한 값을 Memoization하는 것

```javascript
const rate = useMemo(() => {
    //handleClick 이벤트가 일어날때 컴포넌트가 재랜더링 되면서 rate check까지 같이됨.
    //이때 useMemo 해준다.
    console.log('rate check');
    return props.likes > 10 ? 'Good' : 'Bad';
}, [props.likes]);
```

#### useCallback

-   특정한 함수(이벤트)를 Memoization 하는 것
-   주입되거나 전달 될때(props로 자식컴포넌트로 넘겼을때) Memoization

```javascript
const handleChange = useCallback(() => {
    //function memoization
    console.log('눌림');
}, []);
```

---

### Contetxt API

-   자식 컴포넌트로 Props drilling하는걸 해결

#### createContext

-   props를 저장하기위한 Context객체를 만듬

```javascript
export const ThemeContext = React.createContext(themes.dark);
```

#### Context.Provider

-   Context를 사용하는 컴포넌트에서 context의 변화를 시킴.

```javascript
<ThemeContext.Provider value={this.state.theme}></ThemeContext.Provider>
```

#### contextType

-   class내에서 this.context로 해당 context를 가져올수 있음.

```javascript
ThemedButton.contextType = ThemeContext;

let theme = this.context;
```

#### context.Consumer

-   함수 컴포넌트 안에서 context를 사용함

```javascript
<ThemeContext.Consumer>
    {theme => (
        <div
            style={{
                height: 300,
                width: '100%',
                backgroundColor: theme.background,
            }}
        />
    )}
</ThemeContext.Consumer>
```

---

### Portal

-   DOM트리로부터 벗어나서 다른 DOM트리에 컴포넌트를 삽입.
-   createPortal로 다른 DOM트리에 render시킬 수 있음.
-   다른 DOM트리에 있지만 이벤트 버블링이 일어남.

```javascript
const Portal = props => {
    return createPortal(props.children, document.getElementById('portal'));
};

<Portal>
    <ThankyouDialog />
</Portal>;
```

---

### Render props

-   props로 함수를 전달해줌.
-   props.render()로 인자를 전달 할 수 있다.

```javascript
<div>
    {this.props.render(this.state)}
</div>

//꼭 render라고 지정할 필요 x
<Mouse render={mouse => ( //mouse가 this.state를 받음.
    <Component {...this.props} mouse={mouse} />
)}/>
```

### Pure Component

-   props와 state가 변할 때, true, false를 반환해서 리렌더링 할지 말지 정의함.
-   하지만 Pure Component에 함수를 props로 보내게 될 시 계속적인 변화로 인지하여 성능 최적화에 의미가 없어진다.

---

### PropTypes

-   Props의 타입을 확인하기 위한 도구(Flow, TypeScript 같은 정적 타이핑 도구)
-   개발모드에서만 동작한다.
-   RegExp(정규식)등으로 custom할 수 있다.
-   Props의 Children 갯수 제약을 할 수 있다.
    (자세한 내용은 React 공식문서 PropTypes)

---

### Reconciliation(재조정)

-   서로 다른 타입의 두 엘리먼트는 다른 트리를 만듬(타입 다르면 트리를 파괴하고 다시 새로그림)
-   key prop을 통해 어떤 엘리먼트가 변경되지 않아야 될지 표시
-   루트부터 아래 순으로 비교 알고리즘을 돌림.

#### Virtual DOM

-   가상의 표현(Virtual DOM)을 메모리에 저장하고 실제 DOM(Real DOM)과 동기화 하는 과정 === 재조정
-   React Fiber => 기존의 스택 reconciler라는 재조정 엔진을 대체한 엔진이다.

#### Design Principles

-   개발 철학. (React docs 들어가서 한번쯤 봐보자)

---
