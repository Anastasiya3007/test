const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

let nastya = 'Nastya, why are you gay?'

console.log (nastya);

$(function() {
    let navbtn = $("#nav__btn");
    let nav = $("#nav");
    
    $("#nav__btn").on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
});

let header = document.querySelector ('.header');

window.addEventListener('scroll', function() {
    let showMeScroll = window.scrollY;

    if (showMeScroll > 850) {
        header.classList.add ('shadow');
    } else {
        header.classList.remove ('shadow');
    }

    console.log (showMeScroll);
});

console.log (header);
