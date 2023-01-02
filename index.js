const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("generatedPasswordOne")
let passwordTwo = document.getElementById("generatedPasswordTwo")


function generatePasswords() {
    let firstPassword = ""
    let secondPassword = ""
    for (let i = 0; i < 15; i++) {
        firstPassword += characters[Math.floor(Math.random() * characters.length)]
        secondPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    return [firstPassword, secondPassword]
}

function showPasswords() {
    let arrayResult = generatePasswords()

    passwordOne.textContent = arrayResult[0]
    passwordTwo.textContent = arrayResult[1] 
 }

console.log(arrayResult)




