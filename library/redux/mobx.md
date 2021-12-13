# mobX

-   redux 와 다르게 store가 여러개이다.
-   observable과 autorun으로 state가 변경되면 자동으로 autorun에 있는 함수를 실행한다.

### 실행

Actions -> State -> Derivations / Reactions

### Action

-   Derivative를 바꾸는 유일한 수단(사실 직접 state를 바꿀순 있지만 Action을 통해 바꾸길 권장)
