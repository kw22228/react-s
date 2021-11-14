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
