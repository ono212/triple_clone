# 트리플 클론

## 프로젝트 실행 방법

```
npm install
npm run start
```
Cancel changes
## 사용한 기술과 선택한 이유

- `styled-component`: CSS파일로 작성해서 사용하면, 스타일의 적용 범위가 전역이라서 사이드 이펙트가 발생할 확률이 높아집니다.
  styled-component를 사용하면, 해당 컴포넌트에 대해서만 스타일만 정의하고, 적용 범위도 한정적이라서 사이드 이펙트를 발생할 확률이 적어집니다.
  또한 한번 정의하면, 쉽게 접근하여 필요할 때마다 사용할 수 있답니다!
- `css keyframes`: 각 컴포넌트마다 영역별로 등장하는 시점과 간격을 직접 제어해야 하기 때문입니다.
