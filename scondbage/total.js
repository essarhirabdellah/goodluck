// import min_and_plus from './min_and_plus'
 
function total() {
    let totalprice = 0;
    const all_elm = document.querySelectorAll(".global")
    const all_elmbtn = document.querySelectorAll(".globalbtn")
    console.log(all_elm.length)
    for(let i=0; i < all_elm.length;i++){
          let prcv = all_elm[i].querySelector('.price').textContent
          let cntv = all_elmbtn[i].querySelector(`.count${i}`).textContent
          console.log(prcv)
          console.log(cntv)
          console.log(i)
        //   console.log(prcv*cntv)
          totalprice+=prcv*cntv

    } 
    // console.log(totalprice)
    document.querySelector("#total").textContent = `total : ${totalprice}`
}
document.addEventListener("click",()=>{
  total()
})
// document.addEventListener("click",min_and_plus)