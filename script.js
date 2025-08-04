const navigation = document.querySelector('.navbar'); 
window.addEventListener('scroll', () => { 
    if (window.scrollY > 100) { 
        navigation.classList.add('scrolled'); 
    } 
    else { 
        navigation.classList.remove('scrolled'); 
    } 
});