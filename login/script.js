let wrapper=document.querySelector('.wrapper');
let login_link=document.querySelector('.login-link');
let register_link=document.querySelector('.register-link');
let login=document.querySelector('.btnLogin-popup');
let clos=document.querySelector('.icon-close');
register_link.addEventListener('click',function(){
    wrapper.classList.add('active');
})
login_link.addEventListener('click',function(){
    wrapper.classList.remove('active');
})
login.addEventListener('click',function(){
    wrapper.classList.add('active-popup');
})
clos.addEventListener('click',function(){
    wrapper.classList.remove('active-popup');
})

clos.addEventListener