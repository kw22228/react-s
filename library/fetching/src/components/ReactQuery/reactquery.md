# React-Query

### install

-   npm install react-query

### devtool

1. import { ReactQueryDevtools } from 'react-query/devtools';
2. <ReactQueryDevtools /> (QueryClientProvider 컴포넌트 아래쪽에)

### default

-   staleTime
-   refetchOnMount => 새로운 key값으로 쿼리가 마운트 되었을때
-   refetchOnWindowFocus => navigator offline에서 online으로 바뀔때
-   refetchOnReconnect => 네트워크가 끊겼다가 재연결 되었을때
-   refetchInterval => Interval 시킬 때
-   cacheTime(5 min)
-   retry(3 times)
-   retryDelay
