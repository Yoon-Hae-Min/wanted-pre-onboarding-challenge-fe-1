## :memo: 노션 페이지
https://www.notion.so/yoonhaemin/5e26d84c13cf4b6aa93b106c59ac6527

## :pushpin: 기술 스택

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">
<img src="https://img.shields.io/badge/react-query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
</div>
<br/>

## 스텍 선정 이유

- react-query


  - 상태를 서버 상태와 클라이언트 상태로 관심사를 분리를 도와주는 라이브러리로 api 통신을 용이하게 사용할수 있는 기능을 제공해 단순한 코드만으로 다양한 기능을 제공해주어 선택하였다.

- styled-components


  - CSS in JS로 css의 재사용성, 유지보수, 추상화 정도 높여줄수 있었기 때문에 선택하였다.


- typescript

  
  - 컴파일 단계에서 오류를 발견할수 있고 IDE의 타입 추론 기능을 통해서 가독성 및 생산성을 높일수 있어서 선택하였다.
  
  
- eslint

  
  - js 환경에서 발생되는 소스 코드의 문법문제, 스타일 오류, 구조 오류를 코드작성시에 알려주어 선택하였다.
  
  
 
 - docker
 
 
   -  ec2배포를 위해 사용, 컨테이너를 만듬으로써 하나의 컨터에너 환경에 쉽고 안정적으로 서버를 띄울수 있어서 선택하였다.



## :sparkles: 개발기간

2022/12/15~2022/01/05 (개발기간)

2022/01/05~2022/01/16  (리펙토링 기간)

<br/>

## :sparkles: 프로젝트 구현 기능

### 로그인 및 회원가입 페이지
- [x] 이메일 및 비밀번호 유효성 검사
  - [x] 이메일 형식(`@`,`.`)이 포함되어 있어야함
  - [x] 비밀번호 형식 (8자리 이상 문자 숫자 각 하나이상씩 포함)이 포함되어 있어야함
  
### Todo List 페이지
- [x] todoList CRUD구현
- [x] 게시글 삭제,수정,작성시 react-query의 optimistic update를 사용
- [x] 로그인 되었을시 로그인 및 회원가입창 접근 불가
- [x] 뒤로가기 클릭시 접속한 todo 순서대로 뒤로가기가 처리됨
- [x] todo list부분의 제목 클릭시 상세 todo 접근 가능
- [x] 로그인 되지 않았을시(localstorage에 token이 없을시) 로그인 창으로 이동
  - [x] 로그아웃시 토큰을 지우고 로그인창으로 이동


<br/>


## :open_file_folder: 파일구조

- 대분류) 기능 (api, constant page등)

- 중분류) 페이지 경로 (Main, SignUp, SignIn)

- 소분류) 기타

```tsx
├─api               // api fetch 폴더
├─assets
│  └─svg
├─components
│  ├─Common         // 공통적으로 사용하는 컴포넌트 폴더
│  │  ├─Board
│  │  ├─Button
│  │  ├─CheckBox
│  │  ├─Fab
│  │  ├─Input
│  │  ├─Layout
│  │  └─Line
│  └─Main           // Main 페이지에서 사용하는 컴포넌트 폴더
│      ├─Modal
│      ├─NavigationBar
│      ├─PostModal
│      └─TextArea
├─constants
├─hooks
│  ├─Common         // 공통적으로 사용하는 hook 폴더
│  ├─Main           // Main 페이지에서 사용하는 hook 폴더
│  │  ├─mutations
│  │  └─queries
│  ├─SignIn         // SignIn 페이지에서 사용하는 hook 폴더
│  │  └─mutations
│  └─SignUp         // SignUp 페이지에서 사용하는 hook 폴더
│      └─mutations
├─pages         
│  ├─Main
│  ├─SignIn
│  └─SignUp
├─routers
├─styles
├─types
└─util          
```

<br/>

## :page_facing_up: 페이지

### 게시글 작성


<img width=600px src="https://user-images.githubusercontent.com/49224104/212609740-7d7b225b-ff8f-4983-a22c-158f307fd64f.gif"/>

<br/>

### 게시글 수정
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610175-9cf8f851-e183-4669-9865-6e0d9bb38e1b.gif"/>

<br/>

### 게시글 삭제
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610223-782393ca-0eb2-4e46-8529-783cdcbb9074.gif"/>

<br/>

### 회원가입
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610247-8895587c-fe2d-436e-a946-251e41d80fc0.gif"/>

<br/>

### 로그인
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610311-c3b0ff89-a639-4beb-afe9-4649735ffd47.gif"/>

<br/>


## 고민한 부분들
- 폴더 구조화
  - 기존에 기능(component, hooks)안에 정보들은 모든 페이지에서 사용하는 공통 기능으로 분류하고 나머지 페이지마다 쓰는 기능은 pages폴더 안에 기능을 분류해서 넣었었는데 이 점은 pages 폴더가 점점 비대화 된다는 점이 단점으로 다가왔다 
  - 이에 이번에는 반대로 기능폴더에 페이지별로 나눠보는것을 시도하였다. 
  - component안에 페이지별로 폴더를 만들어서 적용을 하였다. 
  - 프로젝트가 커짐에 따라서 pages폴더가 비대화되는 점은 막을수 있지만 파일의 응집도가 떨어지면서 파일경로와 파일을 찾는데 들어가는 depth가 많아졌다는 단점이 생기게 되었다.
  - 다음 방법으로는 폴더가 많아지는 주 원인인 component폴더와 pages볼더만 페이지로 구분하고 나머지 폴더는 기존처럼 pages폴더에 분류하는게 좋을것 같다고 생각했다.



- 세로선: 
  - css에서는 세로로 선을 그을수가 없어서 2가지 방법을 생각해야 했다 
  - 첫번째로는 hr의 width를 선의 두깨로 지정하고 height을 늘리는 방법이 있었다.
  - 두번째로는 div박스의 width를 얇게 한후 border left를 주어서 세로선 처럼 보이게 하는것이다. 
  - 나는 hr태그가 좀더 '선'에 맞는 표현이라 생각하였고 첫번째 방법을 선택해서 사용하였다.



- 로그인, 회원가입시 에러메세지 처리: 
  - input태그 밑에 에러메세지를 띄우게 되면 element의 크기가 바뀌어서 화면의 레이아웃이 바뀌게 된다.
  - 이를 레이아웃이 변경하도록 둘지 말지 고민을 하였는데 레이아웃이 큰 웹페이지에서는 사용자가 에러가 났다는 인식을 주려면 변화로인해 사용자에게 자극이 되는 것이 맞다고 생각하여 레이아웃이 바뀌도록 하였다.


- 공통 컴포넌트:
  - Modal, Board 같은 부분은 컴포넌트 패턴을 사용하였다. 
  - Modal Board같이 명확하게 Header Body Footer로 나눌수 있는 컴포넌트는 개발자가 직접 해당 부분을 필요할때 쓸수 있게 끔 구역을 나눠서 사용했다.





## :notebook: 과제1
[간단한 정리](https://www.notion.so/yoonhaemin/1-6689cbfd0db24c24ac3b8879020b0b88)

