const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

const submit=document.getElementById("submit-button")

submit.addEventListener("click",()=>{
    form.reset()
})