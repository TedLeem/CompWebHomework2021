document.getElementById("form").addEventListener('submit', async (e) => {
    
    const title = e.target.input_title.value;
    const contents = e.target.input_contents.value;
    if(!title || !contents) {
        alert("제목과 내용을 모두 입력하세요!");
    } else {
        try {
            await axios.post('/post', {title, contents});
        } catch(err) {
            console.log(err)
        }
    }
})
