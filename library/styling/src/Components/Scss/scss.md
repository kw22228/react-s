# Scss

-   CSS를 확장하는 preprocessing (CSS 전처리기) 중 하나. (CSS의 확장)

### Install

-   npm install sass

### 기능

1. Variables -> 변수를 사용가능
2. Nesting -> 네스팅 기법으로 사용하면 자식으로 취급
3. Modules -> use './\_base' 모듈 import가능. (@use)
4. Mixins -> 변수를 받아서 활용가능 (함수 느낌) (@mixin)
5. Extend/Inheritance -> 선언한 스타일을 그대로 가져올 수 있음.(@extend)
6. Operators -> 연산자를 사용가능.

7. if or for -> @mixin으로 @if @else 또는 @for문도 사용가능.

### interpolatoin

-   #{$value} $value값을 변수 처럼 사용가능. (`${value}` 와 비슷)

sass는 하나의 언어기때문에 자유도가 높다. 공식문서 보면서 해야할듯
