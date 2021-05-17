const express = require('express');     //뭔가 추가적인 패키지, 모듈을 쓰고 싶을 때는 require로 불러와서 사용해야 함!
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);      //set()  키, 값 형태로 데이터를 저장하는 함수


//모든 요청에 대해 실행하고자 하는 것들
app.use(express.json())                                   //클라이언트가 json보낼 때 파싱해서 req.body에 담아줌
app.use(express.urlencoded({extended: true}))             //form 데이터를 파싱. extended에서 true는 qs, false는 노드 내장 모듈 query_string. 이미지는 처리 못함
app.use(express.static(path.join(__dirname, 'client')))   //정적 파일(이미지, css, js 파일 등)을 쉽게 가져올 수 있음. client 폴더에 있는 정적 파일을 가져오는 미들웨어

app.use((req, res, next) => {
    console.log("모든 요청에서 실행하고 싶어요.");
    next();                           //이렇게 next를 해줘야 뒤에 실행이 이어짐. //next() 안에 error 인자가 있으면( next(error) <- 이렇게 ) 바로 에러 미들웨어로 넘어감.
}, (req, res, next) => {              //이어서 더 실행할 수도 있음. 한 라우터에 두 개의 미들웨어를 넣을 수 있음.
    // throw new Error("에러 발생!!");
    console.log("이어서 한 번 실행");
    next();
})

app.get('/', (req, res) => {           // "/"요청을 보내면 그 뒤의 함수가 실행됨. req = request (요청), res = response (응답). 이름은 아무거나 써도 됨. req, res로 쓰는게 일반적이긴 함.
    res.sendFile(path.join(__dirname, './index.html')); //path는 폴더나 파일의 경로를 다루는 것.  
});

app.get('/about/:name', (req, res) => {     //라우트 매개변수. 이거는 최대한 밑에 쓰는 것이 좋음(에러 처리 미들웨어 바로 위쯤).
    res.send(`hello ${req.params.name}`);   //.send앞에 .status(200)이 생략된 거. 다른 값을 넣으면 사용자에게 다른 값을 보여줄 수 있음.
                                            //참고로 status(상태코드)는 클라이언트, 서버 통신의 상태를 알려주는 것. (참고 https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C)
});
app.get('/about/kmh', (req, res) => {
    res.send("hi kmh");   //위랑 아래 중 위가 실행되기 때문에 라우트 매개변수 쪽이 실행. 위에서부터 아래로 실행하기 때문.
});

app.get('/about', (req, res) => {
    res.send('hello about');
});

app.use((req, res) => {
    res.status(404).send("404 ERROR NOT FOUND");  //에러 미들웨어랑 기본 미들웨어 사이에 넣어서 404에러 처리.
})

app.use((err, req, res, next) => {                //에러가 나도 express가 기본적으로 처리를 해주긴하지만 보안 상 좋지 않음. 따로 만들어주자. 에러 미들웨어는 반드시 인자 4개.
    console.error(err);
    res.status(500).send("서버 터졌어요!");
})

app.listen(app.get('port'), ()=> {             //위에서 set으로 저장했던 "port"를 get으로 불러옴.
    console.log("익스프레스 서버 실행 중...");  //listen은 이제 클라이언트가 서버에 요청할 수 있도록 서버를 요청 대기 상태로 만듦.
})

//한 라우터에서 send 요청(send, sendFile, json, render 등...)을 두 개 이상 쓰면 에러 발생함.
//요청 한번에 응답을 하고 끝내기 때문. send = writeHead + end
//Cannot set headers after they are sent to the client.
