let story1 = document.querySelector("#story1")
let story2 = document.querySelector("#story2")
let story3 = document.querySelector("#story3")
let story4 = document.querySelector("#story4")
let story5 = document.querySelector("#story5")
let fullscreen = document.querySelector(".full-screen")

story1.addEventListener('click',function (){
    fullscreen.style.display = "block"
    fullscreen.style.backgroundImage = "url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

    setTimeout(function(){
        fullscreen.style.display = "none"
    },3000)
})


story2.addEventListener('click',function(){
    fullscreen.style.display = "block"
     fullscreen.style.backgroundImage = "url('https://media.istockphoto.com/id/612262390/photo/body-building-workout.jpg?s=1024x1024&w=is&k=20&c=gYq-ZEVRcKQREgUdNJEOfEEFy_UTMNC-nmKLz_Ad1xs=')"

     setTimeout(function(){
        fullscreen.style.display = "none"
    },3000)
})



story3.addEventListener('click',function(){
    fullscreen.style.display = "block"
     fullscreen.style.backgroundImage = "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

     setTimeout(function(){
        fullscreen.style.display = "none"
    },3000)
})



story4.addEventListener('click',function(){
    fullscreen.style.display = "block"
     fullscreen.style.backgroundImage = "url('https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
     fullscreen.style.backgroundPosition = "top center"

     setTimeout(function(){
        fullscreen.style.display = "none"
    },3000)
})



story5.addEventListener('click',function(){
    fullscreen.style.display = "block"
     fullscreen.style.backgroundImage = "url('https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"

     setTimeout(function(){
        fullscreen.style.display = "none"
    },3000)
})



