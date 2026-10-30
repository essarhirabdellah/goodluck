
function min_and_plus(){
 const allonelmbtn = document.querySelectorAll(".globalbtn")
 for(let i = 0;i < allonelmbtn.length;i++){
     let count = allonelmbtn[i].querySelector(`.count${i}`)
     let plus = allonelmbtn[i].querySelector(`.plus${i}`)
     let newcnt = Number(count.textContent)
    //  console.log(count)
    //  console.log(plus)
     plus.addEventListener("click",()=>{
        count.innerHTML = ++newcnt
     })
     let min = allonelmbtn[i].querySelector(`.min${i}`)
     min.addEventListener("click",()=>{
        if (newcnt > 0) {
            count.innerHTML = --newcnt
        }
     })
     
 }
}
document.addEventListener("click",min_and_plus)
// let op = 0;
// document.querySelector(".plus0").addEventListener('click',()=>{
//     op++
//     document.querySelector('.count0').textContent = op})
// document.querySelector(".min0").addEventListener('click',()=>{
//     if(op > 0){
//     op--
//     document.querySelector('.count0').textContent = op}})
// let op1 = 0;
// document.querySelector(".plus1").addEventListener('click',()=>{
//     op1++
//     document.querySelector('.count1').textContent = op1})
// document.querySelector(".min1").addEventListener('click',()=>{
//     if(op1 > 0){
//     op1--
//     document.querySelector('.count1').textContent = op1}})
// let op2 = 0;
// document.querySelector(".plus2").addEventListener('click',()=>{
//     op2++
//     document.querySelector('.count2').textContent = op2})
// document.querySelector(".min2").addEventListener('click',()=>{
//     if(op2 > 0){
//     op2--
//     document.querySelector('.count2').textContent = op2}})