const header = document.getElementById("header");
const headerLogo = document.getElementById("logo");

header.style.backgroundColor = "white";
headerLogo.innerHTML = "Välkommen till oss, vänligen logga in!";

const loginBtn = document.getElementById("loginBtn");
loginBtn.innerHTML = "Logga in!"; 

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
    if(usernameinput===username&&passwordinput===password){
        console.log("Du är inloggad");
        localStorage.setItem("inloggad", true);        //sparar till LS när uppgifterna är rätt
        localStorage.getItem("inloggad");

       //vid fel uppgifter:     
    }else{                                                                   
        console.log("Sorry, fel användarnamn eller lösenord, försök igen! ");
    }
}
