# style을 입히면서 알아낸것.

- - -
- react에서 style은 carmel case로 선언해준다.
- arguments로 ...props를 받아온다.    
ex) {...props} -> {className, style, ...rest}

```javascript
const Button = ( {className="", color="", style, ...rest} ) => {
    return (
        <button 
            className={`button ${className} ${color}`}
            style={{width:300, height:300, fontSize:50, backgroundColor:color, ...style}}
            {...rest}
        />
    );
}
```
- 기존 html css와 마찬가지로 class보다 style에 인라인으로 적어주는게 우선순위 높음.