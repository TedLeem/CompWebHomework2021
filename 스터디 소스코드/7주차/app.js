const fs = require("fs");
const express = require("express");
const path = require("path");
const mysql = require("mysql");

const app = express();

const databaseInfo = fs.readFileSync('./databaseInfo.json');
const config = JSON.parse(databaseInfo);

app.set('port', process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//db 연결
const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database
})
connection.connect();

//메인 페이지 불러오기
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/list.html'))
})

//글쓰기 페이지 불러오기
app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, './client/post.html'))
})

//글 작성 후 db에 저장 요청
app.post('/post', (req, res) => {
    console.log(req.body);
    connection.query(
        `insert into comp3.posting (title, contents) value ('${req.body.title}', '${req.body.contents}')`
    )
})




app.listen(app.get('port'), () => {
    console.log("Express 서버 실행 중");
})
