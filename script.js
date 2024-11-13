document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
    anchor.addEventListener (`click`,function(e) {
        e.preventDefualt();

        document.querySelector(this.getAttribute(`href`)).scrollIntoview({
            behavior: `smooth`
        });
    });
});