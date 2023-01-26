let scrolling = document.querySelector(".scroll");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll" , () => {
    let scroltop = document.documentElement.scrollTop
    scrolling.style.width = `${parseInt((scroltop / height) * 100)}%`
})