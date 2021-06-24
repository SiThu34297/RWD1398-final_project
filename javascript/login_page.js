const user_input = document.getElementById("username");
const password_input = document.getElementById("password");
const form_valid = document.getElementById("form-valid");
 
//get data from json data
async function getData(){
     const response = await fetch('data/user.json');
     const data = await response.json();
     return data;
}
//clear Field
function inputValueRefresh(){
     user_input.value = "";
     password_input.value = "";
}
//set data to localStorage
function storeLocalStorage(username , password){
          let userData;
          if(localStorage.getItem("userInfo") === null){
               userData = [];
          }else{
               userData = JSON.parse(localStorage.getItem("userInfo"));
          }
          userData.push(username);
          userData.push(password);
          localStorage.setItem("userInfo" , JSON.stringify(userData));
}

//valid login user
async function login(){
     const user = await getData();
          for(let i = 0 ; i < user.length ; i++){
               if(user[i].name === user_input.value && user[i].password === password_input.value){
                    alert("login successful")
                    location.replace("user_info.html");
                    storeLocalStorage(user_input.value , password_input.value);
                    inputValueRefresh();
                    return;
                    }
              }
              alert("incorrect username or password");
              inputValueRefresh();
         }
//form submit event
form_valid.addEventListener('submit' , (e) => {
     e.preventDefault();
     login();
});