// script.js

const passwordBox= document.getElementById("password");
const length =13;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "absdefghijklmnopqrstuvwxyz"
const number = "1234567890"
const symbol = "!@#$%^&*()_+~{}[]-=";

const allChars = uppercase+lowercase+number+symbol;

function createpassword(){
     let password = " ";
     password+= uppercase[Math.floor(Math.random()*uppercase.length)];
     password+= lowercase[Math.floor(Math.random()*lowercase.length)];
     password+= number[Math.floor(Math.random()*number.length)];
     password+= symbol[Math.floor(Math.random()*symbol.length)];

     while(length > password.length){
     password+= allChars[Math.floor(Math.random()*allChars.length)];
     }
     passwordBox.value=password;
}

function copypassword() {
    // Get the text to copy
    var password = document.getElementById('password');
    var text = document.getElementById('text');

    
    navigator.clipboard.writeText(password.value)
      .then(() => {
        // alert('Text copied to clipboard: ' + password.value);
        // copyStatus.innerHTML = 'Text copied to clipboard: ' + password.value; 
        text.innerHTML=password.value;
      })
      .catch((err) => {
        console.error('Unable to copy text: ', err);
      });
  }  

 

