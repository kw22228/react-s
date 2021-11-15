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
