# Date Library (momentjs, datejs, date-fns)

https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md

### momentjs

-   date에 관련된 라이브러리
-   크기가 무겁다.

1. npm install moment
2. npm intall momnet-timezome
3. import moment from 'moment' or 'moment-timezone'
4. 한국어 기준으로 하고싶으면 import 'moment/locale/ko' 추가;

### mutable

```javascript
const momentDate = moment();
const newMomentDate = momentDate.add(1, 'week'); //mometDate의 값도 변함

const cloneNewMomentDate = newMomentDate.clone().add(1, 'week'); // clone을 만들어서 immutable 시켜줌
```

### 주의사항

-   모멘트가 많이 이용되긴하지만 나온지 오래되었고, 최근 트렌드에 맞추지 못하고 있음. (사이즈가 큼)

---

# dayjs

-   크기가 매우 작음 2KB
-   immutable 제공.
-   가볍지만 tree shaking이 안된다.

1. npm install dayjs
2. moment와 비슷한 문법
3. locale 필요시 import

```javascript
'dayjs/locale/ko';
dayjs.locale('ko');
```

4. timezone을 사용하기 위해서

```javascript
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);
```

5. timezone의 날짜 계산법이 moment랑 차이점이있음.

---

### date-fns

-   가장 포괄적이다.
-   tree-shaking을 지원한다.
-   functional 프로그래밍이기 때문에 함수별 import가능.
-   사용법은 공식문서를 보면서 해야할듯.
