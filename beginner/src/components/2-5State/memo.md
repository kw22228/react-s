# Functional component 와 Class component

### 함수형 vs 클래스형
- rfc(functional snipet) 와 rcc(class snipet)
- useEffect 와 componentDidMount() => 컴포넌트가 생설될때 호출함.
- useEffect cleanup(return()) 와 componentWillUnmount() => 컴포넌트가 사라지기 직전에 호출함.
- Hook으로 state관리 vs State LifeCycle 사용(DidMount, WillUnmount, etc..)