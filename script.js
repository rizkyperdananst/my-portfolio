function home(){
    let home = document.getElementById('home');
    let skills = document.getElementById('skills');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact')
    home.style.backgroundColor = 'rgb(0, 204, 255)';
    skills.style.backgroundColor = 'rgb(33, 79, 150)';
    about.style.backgroundColor = 'rgb(33, 79, 150)';
    contact.style.backgroundColor = 'rgb(33, 79, 150)';
}

function skills(){
    let home = document.getElementById('home');
    let skills = document.getElementById('skills');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact')
    home.style.backgroundColor = 'rgb(33, 79, 150)';
    skills.style.backgroundColor = 'rgb(0, 204, 255)';
    about.style.backgroundColor = 'rgb(33, 79, 150)';
    contact.style.backgroundColor = 'rgb(33, 79, 150)';
}

function about(){
    let home = document.getElementById('home');
    let skills = document.getElementById('skills');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact')
    home.style.backgroundColor = 'rgb(33, 79, 150)';
    skills.style.backgroundColor = 'rgb(33, 79, 150)';
    about.style.backgroundColor = 'rgb(0, 204, 255)';
    contact.style.backgroundColor = 'rgb(33, 79, 150)';
}

function contact(){
    let home = document.getElementById('home');
    let skills = document.getElementById('skills');
    let about = document.getElementById('about');
    let contact = document.getElementById('contact')
    home.style.backgroundColor = 'rgb(33, 79, 150)';
    skills.style.backgroundColor = 'rgb(33, 79, 150)';
    about.style.backgroundColor = 'rgb(33, 79, 150)';
    contact.style.backgroundColor = 'rgb(0, 204, 255)';
}

function myName(){
    let name = document.getElementById('myName').innerHTML = '<h1>Rizky Perdana Nst</h1>'
}

setInterval(myName, 1000);

function status(){
    let status = document.getElementById('status').innerHTML = "<h1>I'm student in Budi Darma University</h1>";
}

setTimeout(status, 2000);