const btn_toggle = document.querySelector(".fa-bars");
//slide bar event
function show(){
     document.querySelector(".slideBar").classList.toggle("active");
}

btn_toggle.addEventListener('click' , show);

//logout button
const btn_userIcon = document.querySelector(".fa-user-circle");
function showBtnBox(){
     document.querySelector(".logout-btn").classList.toggle("logout-active");
}
btn_userIcon.addEventListener("click",showBtnBox);

// show username on ui
function showUserName(){
     let userData;
     if(localStorage.getItem("userInfo") === null){
          userData = [];
     }else{
          userData = JSON.parse(localStorage.getItem("userInfo"));
     }
     const span = document.createElement('span');
     span.innerText = userData[0];
     btn_userIcon.append(span);
}
window.addEventListener('load' , showUserName);

//remove user Data
function deleUserinfo(){
     let userData;
     if(localStorage.getItem("userInfo") === null){
          userData = [];
     }else{
          userData = JSON.parse(localStorage.getItem("userInfo"));
     }
    localStorage.removeItem("userInfo");
}
//logout btn event
document.querySelector("#btn-logout").addEventListener('click' , ()=>{
     deleUserinfo();
     location.replace("login_page.html");
});
