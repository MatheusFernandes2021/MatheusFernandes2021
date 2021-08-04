const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function(){
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
})