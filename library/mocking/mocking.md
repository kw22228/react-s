# MSW (data mocking library)

-   npm install msw

### data mocking 이란?

-   데이터 패칭을 할때 가져올 API가 없을 경우 모킹 라이브러리를 사용하여 임의의 데이터를 가져온다.

### 기능

-   Rest API && GraphQL 을 지원함.

### server / worker

-   worker는 브라우저에 탑재된 service worker라는 api를 사용. (BROWSER)
-   server는 node환경에서 사용하는 node용 셋업을 함 (TEST용)

### public

-   npx msw init public/ 해주면 public폴더에 mockServiceWorker.js파일이 만들어짐

### initail

-   index.js에 코드 삽입

```javascript
//mocking start
if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
}
```

### etc (query, patching, error)

-   query : queryParams를 받아서 사용할 수 있다.(const id = req.url.searchParams.get('id');)
-   patching : 실제 url에있는 API데이터를 가져와서 사용 가능

```javascript
const originalResponse = await ctx.fetch(req);
const originalResponseData = await originalResponse.json();
```

-   error : error을 status별로 세팅 가능.
