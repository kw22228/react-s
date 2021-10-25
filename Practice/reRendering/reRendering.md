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