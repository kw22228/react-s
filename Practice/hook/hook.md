# React Hook.

### useState
- React안에 제공되는 useState 훅
- 훅을 사용하게 될 경우 render를 다시 안해줘도 엘리먼트가 업데이트됨.

```javascript
const[keyword, setKeyword] = React.useState("");
setKeyword(1);
console.log(keyword)   // 1
```

- useState에 함수로 넣을시 lazy initialize 가능.
```javascript
const [keyword, setKeyword] = React.useState(() => {
    console.log("initialize");
    return window.localStorage.getItem("keyword");
});
```

- useState는 전에 있던 값을 받아온다. (prev)
```javascript
setShow( prev => !prev )
```
- - -
### useEffect
- 훅을 사용하여 부수적으로 자신이 원하는 조건에 함수를 실행시킬 수 있다.

```javascript
React.useEffect(() => {
    console.log("effect");
    window.localStorage.setItem("keyword", keyword);
}, [keyword]);    // (함수 , depandency array)
```
- keyword의 값(훅의 2번째 인자)이 변경이 될 때만 함수를 실행.
- depandency array가 없을 시, 모든 변화에 함수를 적용한다.
- depandency array가 [] 일 때, 처음 로드후에 한번만 적용한다.

#### useEffect Cleanup
- useEffect에 이미 등록이 되어있으면 그값을 Cleanup한 후 useEffect실행

```javascript
React.useEffect(() => {
    console.log("App useEffect, show deps")

    return () => {
        console.log("App useEffect [Cleanup], show deps")
    }
}, [show]);
```
- - - 
### customHook
- 반복되는 훅들이 있으면 함수로 모아서 만든다.

```javascript
const useLocalStorage = (itemName, value = "") => {
    const [state, setState] = React.useState(() => {
        return window.localStorage.getItem(itemName) || value;
    });

    React.useEffect(() => {
        window.localStorage.setItem(itemName, state);
    }, [state]);

    return [state, setState];
};
```

- - -
### hook flow
App Render(App useState) -> Child Render(App useState) -> Child useEffect -> App useEffect   

- useEffect
Render가 끝난뒤에 실행된다. (children이 먼저 다 실행후 App이 실행)

- update시
useEffect Cleanup 실행 후 useEffect가 실행



