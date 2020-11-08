## ※ 관리자 페이지 [React + Redux]

### 프로졕트 목적

-   프로토타입의 초기 기획서로 Admin 페이지 구현

### 설치 및 실행

```js
$ git clone https://github.com/kyungyoonha/portfolio_react_redux_AdminPage.git
$ git install
$ cd portfolio_react_redux_AdminPage
$ npm start

// [.env] 루트에 파일 필요
// <YOUR_CLOUD_PRESET> => Cloudinary 홈페이지 > 설정 > upload > Unsigned -> enabled
REACT_APP_API_KEY=<GOOGLE MAP API>
REACT_APP_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/<YOUR_CLOUD_NAME>
REACT_APP_CLOUDINARY_PRESET=<YOUR_CLOUD_PRESET>

```

-   [파일 업로드]
-   Cloudinary 이용하여 이미지, 오디오, 텍스트 파일 저장

### 프로젝트 기능

-   대쉬보드 페이지
    -   Google Map API
    -   @nivo
-   이미지, 오디오, 텍스트 파일 업로드
-   실제 db 구조

#

#### Front-End

-   Custom CSS for styling
-   API (Movie list)
-   LNB & GNB 3 depth MENU
-   Board CRUD
-   Slider & Carousel
-   Responsive Page for desktop and tablet

#### Back-End

-   NodeJS
-   Bcrypt
-   JWT
-   Facebook Social Login
-   pagination
-   MongoDB

#### Next Step

-   styled-components
-   fullpage scroll
-   MySQL

### 파일 업로드

https://jamong-icetea.tistory.com/243
https://right-hot.tistory.com/entry/nodeJS-multer%EB%A5%BC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C
https://okky.kr/article/580517

## pagination

-   limit, page (현재 위치), search값만 변경해주면된다.
-   pageCount 전체 페이지 수는 서버에서 날라옴
-   state로 관리해줄 필요없이 queryString으로 변경해준다.
