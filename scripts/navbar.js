const menu = document.querySelector('.menu');
const cross = document.querySelector('.cross');
const navigation = document.querySelector('.navigation');

const showMenu = () =>{
    navigation.classList.add('show');    
}

const closeMenu = () =>{
    navigation.classList.remove('show')
}



menu.addEventListener('click', showMenu)
cross.addEventListener('click', closeMenu)