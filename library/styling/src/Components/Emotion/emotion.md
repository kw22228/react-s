# Emotion

-   styled-component 라이브러리와 유사함

### React에서는..

-   npm install @emotion/react
-   /\*_ @jsxImportSource @emotion/react _/ (create-react-app으로 만들었을시)

### 기능

1. auto vendor-prefix (fallback)
2. nested slelectors (flat하게 사용가능)
3. media queries 사용 가능(반응형)

### 사용법

-   css Props를 사용한다.
-   Object Style : css={{fontSize: 12}}
-   String Style : css={css`font-size: 12px`}

```javascript
//Object style
<P
    css={{
        fontSize: 14,
        fontFamily: 'Georgia, serif',
        color: 'darkgray',
    }}
    {...props} // <- props contains the `className` prop
/>

//String style
<div
    css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
        color: ${color};
        }
    `}
>
```
