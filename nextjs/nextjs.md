# Next.js

-   SSR 특화.
-   프레임워크
-   API가 꽤나 많음

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

받는 인자값 : params, preview, previewData, locale, locales, defaultLocale
return 해주는값 : props, revalidate, notFound

### getServerSideProps

-   페이지가 리로드 될때마다 호출한다.

받는 인자값 : params, req, res, query, preview, previewData, locale, locales, defaultLocale
return 해주는값 : props, notFound

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
-   [[...id]].js -> ...id의 값이 비었다면 포함x
-   router.query 로 key와 value를 꺼낼 수 있다.
-   (주의사항) page matching은 정적인 페이지부터 된다.
-   (주의사항) router.query는 처음엔 빈객체로 들어오고 hydration된 후에 채워진다.

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
-   fallback을 'blocking' 할 시 잠시 멈췄다가 해당 id값을 가지고 실행됨.

```javascript
const router = useRouter();
if (router.isFallback) {
}

//<Link href="/about"></Link>와 동일
<button type="button" onClick={() => router.push('/about')}>
    Click Me
</button>;
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

### Layouts

-   여러 페이지에서 공통된 Layout을 사용할 때 사용.(ex: navigation)
-   페이지 특정 Layout도 사용가능(Page.getLayout)

---

### Production

1. caching
2. JS code 최소화 / js bundle 로드 타이밍 최적화
3. 로깅 / 오류처리 / 404, 500 페이지 커스텀
4. Lighthouse로 성능 측정 / 지원 브라우저 및 기능 검토 (webpack analyzer)

### Deployment

-   vercel을 통한 배포(git repository)
-   git에 PR을 올리면 Vercel이 알아서 preview를 만들어줌
-   Merge를 하면 알아서 재배포도 해준다.

### Testing

-   cypress(E2E test), jest(Unit test) 등을 이용해서 테스팅.
-   integration에 원하는 테스팅을 만든후 실행

---

### Preview

-   res.setPreviewData({});
-   token으로 보안 강화
-   매개변수를 통해 원하는 데이터를 가져와 getStaticProps에 전달 가능
-   context.preview / context.preivewData

### Dynamic Import

-   js file 또는 react components를 dynamic하게 import 가능
-   options : loading, ssr, suspense

### jsconfig.json

-   모듈의 경로의 alias 설정 가능.

### AMP

-   next에서 amp를 지원하고있음.
-   (주의사항)amp 컴포넌트는 inline으로 css를 적용해야한다.
-   amp tag가 따로있음. ex) <amp-timeage></amp-timeago>
-   export const config = {amp : true} 로 amp페이지 hybrid가능
-   script는 무조건 비동기로 진행한다.

### Customizing Target Browser list

-   package.json 에서 browser target을 적어줌
    ex) "browserslist": [">0.3%", "not ie 11", "not dead", "not op_mini all"]
-   .browserslistrc 파일을 만들어서 set 할 수 도있다.

### src Directory

-   /pages 디렉토리 -> /src/pages 로 변경가능 (그밖에 components, lib, styles 도 넣음)
-   (주의사항) /public 디렉토리는 반드시 root에 있어야함

---

### Debugging

-   /.vscode/launch.json

### next.config.js

-   여러가지 설정을 할 수 있음. (nextjs docs)
