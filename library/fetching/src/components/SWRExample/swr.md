# SWR

-   React Hook을 사용하는 Data Fetching 라이브러리.
-   가볍고, interval을 줘서 폴링도 가능.(실시간기능)
-   cache된 data를 먼저 return 하고, fetch(revalidate)후 data를 update한다.

### 사용법

-   const { data, error } = useSWR(`/api/user/${id}`, fetcher, options...);
-   fecher가 필수적으로 필요 (axios등 promise기반의 fetcher)

### 기능

-   key가 같으면 요청이 자동으로 합쳐진다 (캐싱)
-   중복제거, 캐시, 공유가능
-   사용자의 포커스나 네트워크 재연결 시 갱신된다.

### Options

-   refreshInterval
-   revalidateStale
-   revalidateOnFocus
-   revalidateOnReconnect
-   useSWRImmutable

### SWRConfig(전역 설정)

-   캐싱된 데이터를 확인할 수 있다.
-   useSWR에 option들을 전역으로 설정 가능.

### Cache

-   Cache Provider
-   mutate -> 실제 데이터를 update하기전에 미리 사용자의 UI에 데이터를 보여줌.
-   cache
-   Persistant Cache
