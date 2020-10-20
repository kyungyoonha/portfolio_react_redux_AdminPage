### search

https://www.npmjs.com/package/google-maps-react
https://simplehanlab.github.io/react/google-map-react/
https://futurists.tistory.com/90

https://serversideup.net/uploading-files-vuejs-axios/#:~:text=Implement%20submitFiles()%20method&text=We%20are%20now%20ready%20to,%2Ddata'%20%7D%20%7D%20).
https://stackoverflow.com/questions/49478991/post-file-along-with-form-data-vue-axios

## 업로드

##

https://www.zerocho.com/category/NodeJS/post/5950a6c4f7934c001894ea83
node js form fields and files at the same time
https://stackoverflow.com/questions/48732027/how-to-send-fields-and-files-in-the-same-form-submit-in-nodejs-multer
https://stackoverflow.com/questions/63232403/upload-file-image-and-data-at-the-same-time-with-react-and-node

## 파일 업로드 처리

### 잘못 업로드 된 파일 삭제

-   https://bin-repository.tistory.com/127
-   첨부 파일만 등록하고 게시물을 등록하지 않았을 때
-   데이터 베이스에서는 파일이 삭제되었지만 실제 폴더에는 남아있는 경우
-   https://stackoverflow.com/questions/59014876/how-can-i-make-multer-parse-a-client-request-sent-with-form-data-properly

```jsx
const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();

    myHeaders.append("Authorization", localStorage.getItem("kakao-token"));

    const formdata = new FormData();
    formdata.append("file", files[0].uploadedFile);
    formdata.append("text", text);
    formdata.append("hotel", hotel);
    formdata.append("title", title);
    formdata.append("stars", "5");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
    };

    fetch(`${hotelListUrl}/review`, requestOptions);
};
```
