const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordOne = document.getElementById("password-el-one")
const passwordTwo = document.getElementById("password-el-two")
const passwordBtn = document.getElementById("password-btn")

passwordBtn.addEventListener("click" , function(){
    generatePasswords()
})

function generatePasswords(){
    passwordOne.textContent = ""
    for(let i = 0; i<=14; i++){
        let randomPassword = characters[Math.floor(Math.random()* characters.length)]
        passwordOne.textContent += randomPassword
    }
    
    passwordTwo.textContent = ""
    for(let i = 0; i<=14; i++){
        let randomPassword = characters[Math.floor(Math.random()* characters.length)]
        passwordTwo.textContent += randomPassword
    }
}   









