
'use strict';

const account1 = {
    email: "omeikeseth@gmail.com",
    password: "password",
};

const arr = new Array();

let header = document.getElementById("pick");
function enterNewPage() {
    // This hides all the current element on the locked screen
    signup.classList.add('hidden');
    login.classList.add('hidden');
    document.getElementById("username--field").classList.add('hidden');
    document.getElementById("password--field").classList.add('hidden');
    document.querySelector(".welcome").classList.add('hidden');
    document.querySelector(".enter").classList.add('hidden');
    document.querySelector(".padlock").classList.add('hidden');
    // This unlocks the screen
    document.body.style.backgroundImage = "url(image_of_seth_cut.png)";
    document.body.style.backgroundSize = 'cover';
    
    // This adds the info
    document.querySelector(".unlocked").classList.remove("hidden2");
}



document.querySelector(".logout--button").addEventListener('click', function () {
    document.body.style.backgroundImage = "initial";
    exitNewPage();
})

function exitNewPage() {
        // This does the opposite 
        signup.classList.remove('hidden');
        login.classList.remove('hidden');
        document.getElementById("username--field").classList.remove('hidden');
        document.getElementById("password--field").classList.remove('hidden');
        document.querySelector(".welcome").classList.remove('hidden');
        document.querySelector(".enter").classList.remove('hidden');
        document.querySelector(".padlock").classList.remove('hidden');
        // This locks the screen
        document.querySelector(".logout--button").addEventListener('click', function () {
    document.body.style.backgroundImage = "initial"
    document.body.style.backgroundColor = "#f3f3f3";
})
        
        
        // This does the opposite
        document.querySelector(".unlocked").classList.add("hidden2");
}



// Login Page Entrance 
const login = document.querySelector(".login--button");
const signup = document.querySelector(".signup--button");
login.addEventListener("click", function() {
    const input = document.getElementById("username--field").value;
    const password = document.getElementById("password--field").value;

    // Check if array contains login 
    if ( input && password) {
        for (const i of arr) {
            if (i[0] === input && i[1]=== password) {
                // Swap the page 
                enterNewPage();
                break;
            }
        }        
    }
})
const signupPage = document.querySelector(".signup--field");
signup.addEventListener('click', function() {
    signupPage.classList.toggle('hidden');
})

// Signup Page Entrance 

const signIn = document.querySelector(".create--button");
signIn.addEventListener('click', function () {
    const signup_mail = document.getElementById("mail").value;
    const signup_password = document.getElementById("password").value;
    if (signup_mail && signup_password) {
        // Save them to array
        arr.push([signup_mail, signup_password]);
        console.log(arr);
        // Swap the Page
        signupPage.classList.toggle('hidden');
        enterNewPage();
    }
})
