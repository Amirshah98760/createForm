let signUpBtn = document.querySelector('.SignUp');
let signInBtn = document.querySelector('.signInBtn');
let nameField = document.querySelector('.nameField');
let title = document.querySelector('.title');


signInBtn.addEventListener('click',()=> {
    nameField.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');

});

signUpBtn.addEventListener('click',()=> {
    nameField.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
     
});



// function SignIn(){
//     let signUpBtn = document.querySelector('.signUp');
// let signInBtn = document.querySelector('.signInbtn');
// let nameField = document.querySelector('.nameField');
// let title = document.querySelector('.title');

// nameField.style.maxHeight = '0';
// title.innerHTML = "Sign In";
// signUpBtn.classList.add('disable');
// signInBtn.classList.remove('disable');
// }

// function signUp(){
//     let signUpBtn = document.querySelector('.SignUp');
// let signInBtn = document.querySelector('.signInBtn');
// let nameField = document.querySelector('.nameField');
// let title = document.querySelector('.title');

// nameField.style.maxHeight = '60px';
// title.innerHTML = "Sign Up";
// signUpBtn.classList.remove('disable');
// signInBtn.classList.add('disable');

// }