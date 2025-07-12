const signUpButton=document.getElementById('signUpButton');
const logInButton=document.getElementById('logInButton');
const logInForm=document.getElementById('logIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click', function(){
    logInForm.style.display="none";
    signUpForm.style.display="block";
});

logInButton.addEventListener('click', function(){
    signUpForm.style.display="none";
    logInForm.style.display="block";
});