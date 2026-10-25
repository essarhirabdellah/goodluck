let span1 = document.querySelector("#itm1")
let span2 = document.querySelector("#itm2")
span1.addEventListener('click',()=>{document.querySelectorAll('.partone').forEach(el => el.style.display='block')
    document.querySelectorAll('.parttwo').forEach(el => el.style.display='none')
    
})
span2.addEventListener('click',()=>{
    document.querySelectorAll('.parttwo').forEach(el => el.style.display='block')
    document.querySelectorAll('.partone').forEach(el => el.style.display='none')
    
})
document.querySelectorAll('.back').forEach(elm => elm.addEventListener('click',()=>{document.querySelectorAll('.partone').forEach(el => el.style.display='block')
    document.querySelectorAll('.parttwo').forEach(el => el.style.display='none')}
    ))