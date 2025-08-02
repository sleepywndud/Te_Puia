const navigation = document.querySelector('.parent'); 
window.addEventListener('scroll', () => { 
    if (window.scrollY > 150) { 
        navigation.classList.add('scrolled'); 
    } 
    else { 
        navigation.classList.remove('scrolled'); 
    } 
});