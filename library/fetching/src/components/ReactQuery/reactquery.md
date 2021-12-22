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

### Queries

-   unique key -> 데이터들은 unique한 키를 가져야한다.(key가 같은값은 데이터를 서로 공유함.)

-   isLoading, isError, isSuccess, isIdle, error, data, isFetching

### Query Keys

-   useQuery에서 첫번째 인자로 준 값이 query key.
-   뭘넣던 배열로 인지됨. (useQuery('todo', func) //['todo'])

### Query functions

-   promise 객체로 return 해야한다.
-   Query Keys가 params로 넘어온다.
-   params대신 객체로 넘길 수 있다.

### Parallel Queries

-   병렬로 처리하는 방법.

```javascript
const usersQuery = useQuery('users', fetchUsers);
const teamsQuery = useQuery('teams', fetchUsers);
const projectsQuery = useQuery('projects', fetchUsers);
```

병렬로 처리 가능하다.
하지만 suspense mode일때는 동작하지 않음.

-   이럴때 useQueries를 사용한다.

```javascript
const useQueries = useQueries(
    users.map(user => {
        return {
            queryKey: ['user', user.id],
            queryFn: () => fetchUserById(user.id),
        };
    })
);
```

### Background Fetching Indicators

-   background fetching ? 포커싱이 되거나 다른 invalidate를 통해 다시 호출될때

-   isFetching -> background fetching이 될때.
-   useIsFetching -> query중 어떤것이라도 background fetching 되고있다면 값을 반환

---

### Paginated

-   페이징 할때 사용.
-   query key 값으로 page 인자를 같이 넘겨준다.
-   isPreviousData, keepPreviousData

### Infinite Queries

-   무한 스크롤 할때 사용.
