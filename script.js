const header = document.getElementById("header");
const headerLogo = document.getElementById("logo");

header.style.backgroundColor = "white";
headerLogo.innerHTML = "Välkommen till oss, vänligen logga in!";

//för logga in

const loginBtn = document.getElementById("loginBtn");
loginBtn.innerHTML = "Logga in!"; 

//För logga ut

const logoutBtn = document.getElementById("logoutBtn")

const loginsection = document.querySelector("#Inloggad")
//const logoutBtn = localStorage.clear()

footer.style.backgroundColor = "white";
footer.innerHTML = "Ha det gött - häjjj!";

//här är de sanna inloggningsuppgifterna: 

let username= "janne";
let password = "test";
let inloggad=localStorage.getItem("inloggad");

//kollar om dessa stämmer och om det är true skriver den ut "kul att..."

if(inloggad==="true"){
    console.log("Kul att se dig igen, du är nu inloggad!");
}
loginBtn.addEventListener("click", logincheck);


function logincheck(){
    let usernameinput=document.getElementById("username").value; 
    let passwordinput=document.getElementById("Password").value;
    if(usernameinput === username && passwordinput === password){
        //console.log("Du är inloggad");
        localStorage.setItem("inloggad", "true");        //sparar till LS när uppgifterna är rätt
        localStorage.getItem("inloggad");
        loginsection.innerHTML="Välkommen du är nu inloggad!";
        loginBtn.classList.add("hide");
        logoutBtn.style.display="block";
        
        //inloggad()
        
       //vid fel uppgifter:     
    }else{                                                                   
        
         let wrong = document.createElement("inloggad");
        wrong.innerHTML="oj, något gick fel - försök igen!"
        loginsection.append(wrong);
    }
}
//  logOutBtn.addEventListener("click", () => {
//     localStorage.clear();
//      location.reload();
//  }
 
