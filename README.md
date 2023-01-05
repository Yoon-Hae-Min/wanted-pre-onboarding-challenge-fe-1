## Project

[명세서](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)

## 개발기간

2022/12/15~2022/01/05 (약 1주반)

## 리펙토링 기간

2022/01/05~진행중

## 기술 스택
<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">
<img src="https://img.shields.io/badge/react-query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
</div>




### 게시글 작성

![게시글 작성](https://user-images.githubusercontent.com/49224104/210787633-38307ba9-576a-4cb1-88d4-1e8012784c5d.gif)

- 제목과 본문으로 구성되어있음
- 작성이 완료되면 자동으로 todo list에 추가됨

### 게시글 수정

![게시글 수정](https://user-images.githubusercontent.com/49224104/210787703-85629c6c-8bf4-4d58-870d-2e8e720a536c.gif)

- 본문 게시글을 수정할수 있음
- 기존데이터가 input창에 불러와짐
- 수정시 수정된 내용이 즉시 적용됨

### 게시글 삭제

![게시글 삭제](https://user-images.githubusercontent.com/49224104/210787728-75b7951c-7c73-4a11-a1da-eca42bd5697a.gif)

### 회원가입

![회원가입](https://user-images.githubusercontent.com/49224104/210787771-f24065a1-7120-4594-b501-9b96c1b3629c.gif)

### 회원가입 에러 처리

![회원가입_에러](https://user-images.githubusercontent.com/49224104/210787853-ade3501a-f051-4163-9f7b-0c44d247a8ba.gif)

- `@`와 `.` 이 있는 이메일 형식만 입력됨
- 비밀번호는 숫자 문자가 각각 하나 이상 입력이 필요하고 총 8자리이상 입력해야함
- 비밀번호 입력값이 서로 같아야함

### 로그인

![로그인](https://user-images.githubusercontent.com/49224104/210787880-87e5bdba-b990-4d06-a666-e48b36f69fb5.gif)

### 로그인 에러 처리

![로그인_에러](https://user-images.githubusercontent.com/49224104/210787900-1eaa2944-a055-4396-99a4-ea141738d6e3.gif)

- `@`와 `.` 이 있는 이메일 형식만 입력됨
- 비밀번호는 숫자 문자가 각각 하나 이상 입력이 필요하고 총 8자리이상 입력해야함

## 프로젝트 기능

- todoList CRUD구현
- 게시글 삭제,수정,작성시 react-query의 optimistic update를 사용
- 이메일 및 비밀번호 유효성 검사
- 로그인 되지 않았을시(localstorage에 token이 없을시) 로그인 창으로 이동
- 로그인 되었을시 로그인 및 회원가입창 접근 불가
- todo list부분의 제목 클릭시 상세 todo 접근 가능
- 뒤로가기 클릭시 접속한 todo 순서대로 뒤로가기가 처리됨

## 추가 구현이 필요한것(욕심 내보는것)

- 반응형 디자인
- 로그아웃기능
- 타입스크립트 타입의 구조화
- 애니메이션 추가

## 파일구조

```tsx
├─api
├─assets
│  └─svg
├─components
│  ├─Common
│  │  ├─Board
│  │  ├─Button
│  │  ├─CheckBox
│  │  ├─Fab
│  │  ├─Input
│  │  ├─Layout
│  │  └─Line
│  └─Main
│      ├─Modal
│      ├─PostModal
│      └─TextArea
├─constants
├─hooks
│  ├─Main
│  ├─SignIn
│  └─SignUp
├─pages
│  ├─Main
│  ├─SignIn
│  └─SignUp
├─routers
├─styles
├─types
└─utils
```
