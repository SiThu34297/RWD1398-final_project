const btn_next = document.querySelector("#btnNext");
function nextPage(){
     location.replace("home.html");
}
btn_next.addEventListener('click' , nextPage);

const table = document.querySelector(".users");
function showUserTable(){
          let userData;
          if(localStorage.getItem("userInfo") === null){
               userData = [];
          }else{
               userData = JSON.parse(localStorage.getItem("userInfo"));
          }
          let tr = document.createElement('tr');
          let tdUser = document.createElement('td');
          let tdPw = document.createElement('td');
          tdUser.innerText = userData[0];
          tdPw.innerText = userData[1];
          tr.append(tdUser , tdPw);
          table.append(tr);
}
window.addEventListener('load' , showUserTable)