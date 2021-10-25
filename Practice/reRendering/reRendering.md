# 리액트 리랜더링..

- javascript 와 React의 차이점    
javascript : 변경으로 인해 리페인트 할 시, element를 계속 다시 그림.
React : javascript와 다르게 변경된 element만 다시 그림.

- React의 element는 불변객체이다.      
(변경사항이 일어날 시 새로운 element를 만들어서 ReactDOM.render()로 전달)

- 리액트는 비교알고리즘을 가지고있음(Reconciliation)       
virtual DOM 이라는 가상 DOM으로 변경 전 DOM과 변경 후 DOM을 비교한다.

- - -
### Key & Value

- react에서도 JSON, Object 등.. key와 value를 사용한다.
- 데이터의 유일한 key값을 넣어줄 시 key값으로 기존 트리와 이후트리를 비교하여 변경된 작업만 수행하기 때문에 효율적.(재사용성)
- key를 인덱스로 사용할 수 있음.(중복x, 재배율x 일때만)
하지만, element가 재배치 될 때에는 비효율적이다.

ex)
1. key가 없을 시 종속 트리를 유지하면서 모든 element를 변경함(비효율)
2. key가 있을 시 element 식별자를 가지고있는 것은 이동만 함.
```javascript
items.map( (e, i) => {// map의 i를 key로 쓰면 유일함이 없음.
    return (
        <div key={e.id}>
            <button onClick={() => handleDoneClick(e)}>{e.value}</button>
        </div>
    );
})
```