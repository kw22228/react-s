# Moment Library (momentjs)

-   date에 관련된 라이브러리

1. npm install moment
2. npm intall momnet-timezome
3. import moment from 'moment' or 'moment-timezone'
4. 한국어 기준으로 하고싶으면 import 'moment/locale/ko' 추가;

---

### mutable

```javascript
const momentDate = moment();
const newMomentDate = momentDate.add(1, 'week'); //mometDate의 값도 변함

const cloneNewMomentDate = newMomentDate.clone().add(1, 'week'); // clone을 만들어서 immutable 시켜줌
```

---

### 주의사항

-   모멘트가 많이 이용되긴하지만 나온지 오래되었고, 최근 트렌드에 맞추지 못하고 있음.
