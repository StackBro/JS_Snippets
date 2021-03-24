let checkPass = () => {
    if(document.querySelector('.hidden')===undefined){
        let newElement = document.createElement('div');
        newElement.style.width = '100%';
        newElement.style.height = '100vh';
        newElement.style.position = 'fixed';
        newElement.style.display = 'block';let checkPass = () => {
    if(document.querySelector('.hidden')===undefined){
        let newElement = document.createElement('div');
        newElement.style.width = '100%';
        newElement.style.height = '100vh';
        newElement.style.position = 'fixed';
        newElement.style.display = 'block';
        newElement.style.zIndex = '99999';
        newElement.style.top = '0';
        newElement.style.left = '0';
        newElement.style.backgroundColor = "#ffffff66";
        newElement.style.filter = "blur(6px)";
        newElement.classList.add('hidden');
        document.querySelector('body').appendChild(newElement);
    }
    window.localStorage.password = 'rewq';
    if(window.localStorage.enteredPass === window.localStorage.password){
        hide();
    }
    else{
        window.localStorage.enteredPass = prompt('Enter password');
        checkPass();
    }
};
function hide(){
    document.querySelector('.hidden').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', checkPass);
        newElement.style.zIndex = '99999';
        newElement.style.top = '0';
        newElement.style.left = '0';
        newElement.style.backgroundColor = "#ffffff66";
        newElement.style.filter = "blur(6px)";
        newElement.classList.add('hidden');
        document.querySelector('body').appendChild(newElement);
    }
    window.localStorage.password = 'rewq';
    if(window.localStorage.enteredPass === window.localStorage.password){
        hide();
    }
    else{
        window.localStorage.enteredPass = prompt('Enter password');
        checkPass();
    }
};
function hide(){
    document.querySelector('.hidden').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', checkPass);