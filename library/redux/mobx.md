# mobX

-   redux 와 다르게 store가 여러개이다.
-   observable과 autorun으로 state가 변경되면 자동으로 autorun에 있는 함수를 실행한다.

### 실행

Actions -> State -> Derivations / Reactions

### Action

-   Derivative를 바꾸는 유일한 수단(사실 직접 state를 바꿀순 있지만 Action을 통해 바꾸길 권장)

### runInAction

-   함수즉시실행문을 안줘도 action이 동작함.

### makeObservable

-   makeObservable(target, annotations?, options?)
-   getter => computed
-   function => action
-   value => observable
-   비동기동작 => flow

```javascript
makeObservable(this, {
    todos: observable,
    pendingRequests: observable,
    completedTodosCount: computed,
    report: computed,
    addTodo: action,
    fetchData: flow,
});
```

### makeAutoObservable

-   makeAutoObservable(this);
-   알아서 observable, computed, action을 맞춰준다.
