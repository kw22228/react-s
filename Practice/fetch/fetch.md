# 데이터 패치하기.

- js와 마찬가지로 여러가지 패치api를 사용해서 데이터 통신을 할 수 있음.
- Ajax, Axios, fetch ...
- fetch중 로딩 핸들링도 가능. (data도 error도 없을 시..)
- fetch후에 error 핸들링도 가능. (errorBoundry를 만들어서 컴포넌트 핸들링도 가능.)

```javascript
const App = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect( () => {
        fetch("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json2")
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            setData(jsonData.data)
        })
        .catch((error) => {
            setError(error.message);
        });
    }, [])
    if(error !== null){
        return <p>{`Error: ${error}`}</p>
    }
    if(data === null){
         return <p>Loading...</p>
    }

    return (
        <>
            <p>People</p>
            {
                data.people.map( (e, i) => {
                    return (
                        <div key={e.name}>
                            <span>{`${i+1} Name: ${e.name}, Age: ${e.age}`}</span>
                        </div>
                    );
                })
            }
        </>
    );
}
```