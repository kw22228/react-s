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

### 기능

1. <Link href="/posts/first-post"></Link> => Code splitting and prefetching
