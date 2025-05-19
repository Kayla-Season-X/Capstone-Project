
function greetUser(){
    const username = prompt("What is your name?");
    if (username === document.cookie.includes(`${username}`)){
        document.cookie = `visitedBefore = true`;
        const expireDate = new Date();
        expireDate.setDate(expireDate.getDate()+7);
        document.cookie = `visitedBefore = true; expires=${expireDate.toUTCString()}; path=/`;
        alert("👋Welcome back. we have missed you!!");
    }else{
            alert("Hello!! Welcome to Character Explorer 👋");
            document.cookie = `${username}`;
            const expireName = new Date();
            expireName.setDate(expireName.getDate()+30);
            document.cookie = `${username}; expires=${expireName.toUTCString()}; path=/`;
    }
    }
greetUser();

const themeBtn = document.getElementById('theme');

if(localStorage.getItem('theme') === "dark"){
    document.body.classList.add('dark')
}

themeBtn.addEventListener('click', toggleTheme)

function toggleTheme(){
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
        localStorage.setItem('theme', 'dark')
        // body.classList.remove('light-theme');
        // body.classList.add('dark-theme');
    }else{
        // body.classList.remove('dark-theme');
        // body.classList.add('light-theme');
        localStorage.setItem('theme', 'light')
    }
}