# state liftingup
- 컴포넌트의 상태를 제일 가까운 부모에게로 올린다.(형제 컴포넌트의 상태가 필요할 때.)
- 과도한 lifting은 Props drilling을 야기한다.
(부모로 받은 props를 자식의 자식의 자식에게 넘겨야되는 상황.)

```javascript
const Id = ({handleIdChange}) => {
    return (
        <>
            <label>ID: </label>
            <input onChange={handleIdChange} />
        </>
    )
}
const Pw = ({handlePwChange}) => {
    return (
        <>
            <label>PW: </label>
            <input type="password" onChange={handlePwChange}/>
        </>
    )
}    
const App = () => {
    const [id, setId] = React.useState("");
    const [pw, setPw] = React.useState("");

    const handlePwChange = (e) => {
        setPw(e.target.value)
    }
    const handleIdChange = (e) => {
        setId(e.target.value)
    }
    const handleLoginClick = (e) => {
        e.preventDefault();
        alert(`id: ${id}\npw: ${pw}`)
    }
    return (
        <>
            <Id handleIdChange={handleIdChange}/> 
            <br />
            <Pw handlePwChange={handlePwChange}/>
            <br />
            <button disabled={id.length === 0 || pw.length === 0} onClick={handleLoginClick}>Login</button>
        </>
    );
}
```