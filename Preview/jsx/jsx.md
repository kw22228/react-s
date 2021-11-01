# jsx&babel

- Babel? 
기존 JS에서 JSX문법을 컴파일 하기 위해선 Babel이란게 필요함.(https://babeljs.io/)

<script type="text/babel"></script> 로 작성.

- - -
- React Fregment
태그를 정해주지않고 감싸주기만 하면서 나타내지않음.
<React.Fregment>  ===  <>

```javascript
const Paint = ( {title, description, children} ) => (
	<>
	    <h1>{title}</h1>
	    <h3>{description}</h3>
	    {children}
	</>
);
```

{title, description, children} ==> const customH1 = <h1 {...props} />;
두개의 구조가 같다. 즉, props를 다시 받아주는것.

- - -
- Interpolation이란?
jsx와 js를 병행해서 같이 쓸수있다. (이미 html에서 js와 css를 섞어서 쓰고있엇음.)