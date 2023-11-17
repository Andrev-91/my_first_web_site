const cart = Array.from(document.querySelectorAll(".cart"));
const cardsContainer = document.querySelector("#cart1");

cartContent1.addEventListener("mousemove",(e) => {
    for(const cart of cart1 ){
        const rect = cart-getBoundingClientRect();
        x = e.clientx - rect.left;
        y = e.clienty- rect.top;

        cart.style.setPropety("--mouse-x",  `${x}px`);
        cart.style.setPropety("--mouse-y",  `${y}px`);
    }
});