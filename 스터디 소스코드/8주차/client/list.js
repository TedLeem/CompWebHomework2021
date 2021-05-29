//리스트 페이지는 접속하자마자 함수가 실행되야하므로 document.querySelector ~~~ 쓰지 않고, 함수를 만든 후 실행하는 방식으로 구현

async function getPost() {      //아래에서 await을 써야하므로 async 함수로 만듦. 
    try {
        const response = await axios.get("/post-data");     //app.js에서 구현한 라우터로 게시글 목록 불러오는 요청. 여기서 비동기 형식이라 
        const postList = response.data;                     //DB에서 받아온 데이터를 저장. 배열 형태로 있음.
        console.log(response.data);                         //postList를 콘솔로 찍어보자~!
        
        const list = document.querySelector('#post-list');  //html에서 게시글 리스트가 들어갈 태그를 찾아놓은 것.
    
        postList.map((data) => {    //map()이라는 함수는 배열에 사용. map()으로 DB에서 받아온 정보들을 하나씩 가공하는 것. ()안에 콜백 함수를 넣어 어떤 동작을 할지 지정
                                    //data가 postList에 들어있는 게시글 정보 하나를 의미

            //게시글 하나(제목 + 작성일)을 담는 태그 생성
            const postDiv = document.createElement('div');  //createElement는 js로 html 태그를 만드는 함수.
            postDiv.className = "post";                     //.className으로 태그의 클래스명을 지정할 수 있음.


            //게시글을 클릭하면 상세페이지로 가도록 링크를 넣어줌
            const linkToDetail = document.createElement('a');
            linkToDetail.className = "title";
            linkToDetail.href = `./detail/${data.id}`;      //.href로 링크를 넣어줄 수 있음.


            //제목 넣을 태그 생성 및 제목 넣기
            const titleSpan = document.createElement('span');
            titleSpan.textContent = data.title;

            //작성일 넣을 태그 생성 및 작성일 넣기
            const dateSpan = document.createElement('span');
            const dateTimeBefore = data.posted_date;
            //dayjs는 저번시간에 html에 cdn방식으로 추가한 외부 모듈
            //날짜 데이터를 입력하면 원하는 포멧으로 변경해줌.
            dateSpan.textContent = dayjs(dateTimeBefore).format('YYYY년 MM월 DD일 HH시 mm분');
            

            //appendChild()로 태그를 다른 태그 속에 넣을 수 있음.
            linkToDetail.appendChild(titleSpan);    //제목을 게시글 상세페이지의 링크에 넣음 <a><span>제목</span></a> 이렇게 되는 거!
            postDiv.appendChild(linkToDetail);      //제목 + 링크를 상위 div에 담음.
            postDiv.appendChild(dateSpan);          //작성일을 상위 div에 담음.
            list.appendChild(postDiv);              //게시글 한세트를 담은 상위 div를 list에 담음.

        })
    } catch(err) {
        console.log(err);   //에러 발생 시 에러메시지를 보여줌.
    }
}

//위에서 만든 함수를 실행. 즉, list를 실행하면 기본적으로 위 함수가 실행되는 것.
getPost();
