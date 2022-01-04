# Next.js

-   SSR 특화.

---

### CREATE

-   create-next-app

### EXECUTE

-   npm run dev (개발자 모드)
-   npm run build (빌드)
-   npm start (빌드 반영)

### 주의사항

-   회사 프록시에 걸려서 실행 안될 때 있음.
    set NODE_TLS_REJECT_UNAUTHORIZED=0
    npm config set strict-ssl false

---

### getStaticProps

-   npm run build 될때 호출.
-   data의 경우 build된 파일안에 data를 저장해놓는다.
-   fetching하는 페이지가 변하지 않는다면 굉장히 효율적.
-   pages/ 에서만 사용할 수 있다.

### getServerSideProps

-   페이지가 리로드 될때마다 호출한다.

```javascript
export async function getServerSideProps(context) {
    const res = await fetch('https://api.spacexdata.com/v3/launches');
    const data = await res.json();

    console.log('getServerProps');
    return {
        props: { data },
    };
}
```

---

### 제공 Components

1. <Link href="/posts/first-post"></Link> => Code splitting and prefetching
2. <Image/> => Resizing & optimizing images (public에 image를 담아준다)
3. <Head> => MetaData <haed>

### pages/\_app.js

-   모든 파일의 공통적인 부분을 채울때 사용.
-   global 파일이다.

### Styling

-   css modules, styled-jsx, sass등 nextjs 안에서 제공하고있다.
-   global css적용은 only pages/\_app.js 에 styles/global.css를 import 해서 사용 수 있다.
-   css modules는 xxxx.module.css로 만들어야함
-   classnames library (css를 조건을 줘서 사용가능)

```javascript
import cn from 'classnames'
<div
    className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
    })}
>
```

---

### Hydration

-   브라우저에서 html DOM과 CSSOM을 만든후 Javascript엔진이 돌아가면서 페이지가 인터렉티브하게 동작할 상태가 되는 과정

### Dynamic routing

-   getStaticPaths을 통해 id를 통한 페이지를 만든다.
    ([id].js 로 만듬, [...id].js)

```javascript
export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        // paths: [{ params: { id: 'ssg-ssr' } }], // /posts/ssg-ssr
        paths,
        fallback: true,
    };
}
```

### Fallback

-   fallback이 false일 시, 404페이지 나옴
-   fallback을 true로 설정할 시 해당 id값을 가지고 getStaticProps로 들어간다.

```javascript
const router = useRouter();
if(router.isFallback)
```

### API routes

-   /pages/api/hello.js에 가상의 api를 만들어서 사용가능(데이터 모킹느낌)

```javascript
export default function handler(req, res) {
    res.status(200).json({
        id: 'kjw204',
        text: 'Hello',
    });
}
```
