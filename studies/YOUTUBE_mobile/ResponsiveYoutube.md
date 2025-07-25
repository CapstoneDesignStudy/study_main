# Youtube Mobile Clone

## 소개

이 프로젝트는 Youtube 모바일 웹사이트를 HTML, CSS, JavaScript로 클론코딩한 결과물입니다.  
실제 Youtube 모바일 UI와 유사한 레이아웃과 인터랙션을 제공합니다.

## 주요 기능

- Youtube 스타일의 헤더, 동영상 플레이어, 정보, 채널, 추천 영상 UI
- 해시태그, 제목, 더보기 버튼, 조회수 등 메타데이터 표시
- 좋아요/싫어요/공유/저장/리포스트 버튼
- 채널 정보 및 구독 버튼
- 추천 영상(Up next) 리스트
- 반응형 레이아웃(데스크톱: info/Up next 좌우 배치, 모바일: 세로 배치)

## 폴더 구조

```
/
├── index.html
├── style.css
├── main.js
├── image/
│   └── avatar.jpg, 1.jpg, 2.jpg, ...
└── video/
    └── video.mp4
```

## 사용 기술

- HTML5
- CSS3 (Flexbox, Custom Properties, Media Query)
- JavaScript (간단한 DOM 조작)
- FontAwesome (아이콘)

## 실행 방법

1. 이 저장소를 클론합니다.
2. `index.html`을 브라우저에서 엽니다.

## 반응형 레이아웃

- **데스크톱**: 동영상 정보(info)와 추천 영상(Up next)이 좌우로 나란히 배치됩니다.
- **모바일**: info와 Up next가 세로로 쌓입니다.

## 참고

- Youtube UI/UX
- 드림코딩 by 엘리 Youtube 강의
- html 박스 구조 형성 "Wireframe"
  ![alt text](image.png)
- CSS 전처리기 형성
  ---"SASS & LESS --> React할 때는 PostCSS
  ---일단은 순수 CSS로 스타일링 하자.

:root {} <!--기본 사용할 툴>
미리 써놓고 사용할 때마다 알맞은 태그+var() 사용.
