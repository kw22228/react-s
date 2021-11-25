# styled-components

-   CSS in JS를 제공해주는 라이브러리

### CSS in JS

-   css의 문제점을 보완하기 위한 문법.
    https://speakerdeck.com/vjeux/react-css-in-js

### css의 문제점 (React를 쓰면서)

1. Global Namespace : 글로벌 변수를 지양해야하는 JS와 대치
2. Dependencies: css간의 의존 관리 어려움.
3. Dead Code Elimination: 안쓰는 css인지 어려움.
4. Minification: 클래스 이름 최소화 어려움.(이미 만들어져있는 이름을 수정하기)
5. Sharing Constants: JS의 코드와 값을 공유하기 어려움.
6. Non-deterministic Resolution: css 파일 로드 타이밍 이슈.
7. Isolation: 컴포넌트에 대한 스타일을 따로 격리 시키기 어려움

---

### styled-compoentns를 쓰면 유용한 점

1. Automatic critical CSS: 자동 style injects & 코드 스플릿 해줌(성능향상)
2. No class name bugs: 유니크하게 만들고, 오버랩 없게하고, 오타체크 알아서 해줌
3. Easier deletion of CSS: 안쓰는 css를 지우기 쉽게 해줌.
4. Simple dynamic styling: props를 전달하고, global 테마를 만듬.
5. Painless maintenance: 관리하기 용이하다.(component와 styling을 한곳에서 봄)
6. Automatic vendor prefixing: vendor 알아서 넣어주니 standard만 넣어라.

### 사용법(Template literals)

styled.{element}``

```javascript
const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;
```

### 기능

1. pseudoselectors (가상 셀렉터) : & 로 표기 (this같은 느낌, 컴포넌트 자신)

2. attrs 로 style을 넘어선 attribute 수정가능.

```javascript
const PasswordInput = styled(Input).attrs({
    type: 'password',
})`
    border: 2px solid aqua;
`;
```

3. Global Style을 줄 수 있다.

```javascript
const GlobalStyle = createGlobalStyle`
  button{
      background-color: pink;
  }
`;

//Green 버튼과 Other버튼 둘다 GlobalStyle이 먹음.
<>
    <div>
        <GlobalStyle />
        <button onClick={() => setTheme(greenTheme)}>Green</button>
    </div>
    <div>
        <button>Other</button>
    </div>
</>;
```

4. Animation - keyframes
5. ThemeProvider
