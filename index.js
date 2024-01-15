let pass1El = document.getElementById("password-option-1")
let pass2El = document.getElementById("password-option-2")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generate(){
    pass1El.textContent = ""
    pass2El.textContent = ""
    document.getElementById("error").textContent = ""
    length = document.getElementById("pass-length").value
    if(length < 15){
        length = 15
        document.getElementById("error").textContent = "Passwords are recommended to have a minimum of 15 characters."
    }
    else if (length > 25){
        length = 25
        document.getElementById("error").textContent = "Passwords are recommended to have a maximum of 25 characters."
    }
    for (i = 0; i < length; i++)
    {   
        rnd1 = Math.floor(Math.random() * characters.length)
        rnd2 = Math.floor(Math.random() * characters.length)
        pass1El.textContent += characters[rnd1]
        pass2El.textContent += characters[rnd2]
    }
}

function copy1(){
    let copyText = document.getElementById("password-option-1");
    let range = document.createRange(copyText);
    range.selectNode(copyText)
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied to clipboard");
}

function copy2(){
    let copyText = document.getElementById("password-option-2");
    let range = document.createRange(copyText);
    range.selectNode(copyText)
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert("Copied to clipboard");
}

