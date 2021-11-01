# React Error
- - -

- react error는 React.component를 상속시켜서 핸들링한다.
- error class를 만든후 만들어진 class Component를 에러예상 자리에 덮어준다.
ex) <ErrorBoundry><Child /></ErrorBoundry>

```javascript
class ErrorBoundry extends React.Component { //에러를 핸들링하는 함수
    state = { error: null }

    static getDerivedStateFromError(error) {
        return { error }
    }

    render() {
        const {error} = this.state;
        if(error) return <p>There is some error!!</p>;

        return this.props.children;
    }
}
```

- - -
### Fallback
- fallback 컴포넌트를 만들어서 사용한다.

```javascript
<ErrorBoundry fallback={Fallback}>   
    <Child />   
</ErrorBoundry>

const Fallback = ({error}) => { //error component.
    console.log(error)
    return <p>{error.message}</p>;
}

class ErrorBoundry extends React.Component {
    state = { error: null }
    static getDerivedStateFromError(error) { //에러를 핸들링하는 함수
        return { error }
    }

    render() {
        const {error} = this.state;
        if(error) {
            return <this.props.fallback error={error}/>;
        }

        return this.props.children;
    }
}
```
- error class return에 컴포넌트로 리턴해주기 때문에 <ErrorBoundry fallback={Fallback}> 는 함수로 표현.