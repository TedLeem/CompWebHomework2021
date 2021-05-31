//url로부터 어떤 게시글에 대한 요청인지를 알기위해 게시글 id를 parsing하는 동작 (post.js 것과 동일)
const path = window.location.pathname;
const split = path.split("/");
const id = split[split.length - 1];

//여기도 마찬가지로 상세 페이지에 들어가는 순간 바로 게시글 정보를 받아와서 화면에 보여줘야 하므로 함수로 만들고 실행합니다!
async function getPostDetail() {
    try {
        const response = await axios.get(`/detail-data/${id}`);  //게시글 하나의 정보 불러오기
        console.log(response);
        console.log(response.data);
        console.log(response.data[0]);
        //받아온 데이터를 콘솔에 여러 방식으로 찍어보자~!

        
        const post = response.data[0];  //특정 게시글의 정보를 변수에 저장

        if (post === undefined) {   //만약 게시글 정보를 불러올 수 없는 경우. 예를 들면 삭제된 게시글을 요청하는 경우에
            location.href = "/";    //메인 페이지(목록 페이지)로 이동시킴.
        }

        //수정 버튼을 클릭하는 경우. 글쓰기 페이지로 이동하는 동작 구현
        document.querySelector("#update").addEventListener("click", () => {
            location.href = `/update/${id}`;
        });

        //html의 태그에 데이터를 넣기 위해 가져옴.
        const title = document.querySelector("#title");
        const dateTime = document.querySelector("#posted-date-time");
        const contents = document.querySelector("#contents");
        
        //태그에 제목 넣기
        title.textContent = post.title;
        
        //태그에 작성일 정보 넣기. list.js에서 한 것과 동일
        const dateTimeBefore = post.posted_date;
        dateTime.textContent = dayjs(dateTimeBefore).format('YYYY년 MM월 DD일 HH시 mm분');
        
        //태그에 내용 넣기
        contents.innerHTML = post.contents.replaceAll('\n', '</br>');
        //innerHTML을 쓰는 이유는 스터디에서 설명합니다~! 어쨌든 태그안에 내용을 넣는 것은 textContent와 유사!

    } catch(err) {
        console.log(err)
    }
}


//게시글 삭제 버튼
document.querySelector("#delete").addEventListener("click", async () => {
    //confirm함수는 확인, 취소(예, 아니오)가 가능한 창이 뜸. 확인누르면 true, 취소누르면 false가 됨.
    if(confirm("정말 삭제하시겠습니까? 삭제하면 다시 복구할 수 없습니다.")) {
        try {
            await axios.delete(`/${id}`);
            alert("삭제 되었습니다.")
            location.href = "/"     //삭제 후 메인 페이지로 이동
        } catch(err) {
            alert("삭제에 실패했습니다.");
            console.log(err);
        }
    }
})

//위에서 만든 함수 실행.
getPostDetail();
