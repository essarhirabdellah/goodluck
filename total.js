// creat a checked obj
let chack = {
    base: 18,
    taille: 4,
    lait: 4,
    supplements:3,
}
let nameo = {
    base: "Espresso",
    taille: "nameo",
    lait: "nameo",
    supplements:"nameo",
}
let total;
function counttotal(loction,objloction,objkey,objname){
    // console.log(objloction);
 total = 0
 let num = loction.querySelector(".price").textContent
 let no_name = loction.querySelector(".type").textContent
 let newnum = num.match(/\d+/)
 let val = Number(newnum[0])
 objloction[objkey] = val
 objname[objkey] = no_name
 for(let key in chack){
   total = total + chack[key] 
 }
//  console.log(total)

 document.querySelector(".totale").textContent = total
}
//base part
let lable1 = document.querySelector(".coffe-type1")
lable1.addEventListener("click",()=>{counttotal(lable1,chack,"base",nameo)})
let lable2 = document.querySelector(".coffe-type2")
lable2.addEventListener("click",()=>{counttotal(lable2,chack,"base",nameo)})


//taille part
let lable3 = document.querySelector(".coffe-type3")
lable3.addEventListener("click",()=>{counttotal(lable3,chack,"taille",nameo)})
let lable4 = document.querySelector(".coffe-type4")
lable4.addEventListener("click",()=>{counttotal(lable4,chack,"taille",nameo)})
let lable5 = document.querySelector(".coffe-type5")
lable5.addEventListener("click",()=>{counttotal(lable5,chack,"taille",nameo)})
//lait part
let lable6 = document.querySelector(".coffe-type6")
lable6.addEventListener("click",()=>{counttotal(lable6,chack,"lait",nameo)})
let lable7 = document.querySelector(".coffe-type7")
lable7.addEventListener("click",()=>{counttotal(lable7,chack,"lait",nameo)})
let lable8 = document.querySelector(".coffe-type8")
lable8.addEventListener("click",()=>{counttotal(lable8,chack,"lait",nameo)})

// chack.supplements = 0

// document.querySelector(".last").addEventListener('click',()=> {document.querySelectorAll(`input[nameo="my-coffee-choose3i"]:checked`).forEach(el => {
//         x = el.parentNode.querySelector(".price").textContent
//         let newx = x.match(/\d+/)
//         let makex = Number(newx[0])
//         chack.supplements =+ makex
//         console.log(chack)
//         total =+ chack.supplements
//         console.log(total)  
//         document.querySelector(".totale").textContent = total
//     })})






document.querySelector(".buybtn").addEventListener('click', () => {

        //change element of the taible
        for (let elm in chack) {
            document.querySelector(`#${elm}`).textContent = chack[elm] + "HD"
            document.querySelector(`#${elm}name`).textContent = nameo[elm]


        }
        document.querySelector('.onthego').textContent = `${nameo.base} ${nameo.lait} ${nameo.taille}`
        let total = 0
        for(let key in chack){
            total = total + chack[key] 
          }
        document.querySelector(".total").textContent = total
        document.querySelectorAll(".partone").forEach(el => el.style.display = "none")
        document.querySelectorAll(".parttwo").forEach(el1 => el1.style.display = "block")
    })



//  let num = Number(lable2.querySelector(".price").matche(/\d+/)[0])
//  console.log(num)
//  chack.base = num
//  for(let key in chack){
//    total =+ chack[key] 
//  }
//  document.querySelector(".totale").innerHTML = total
// })
// document.querySelector(".buybtn").addEventListener('click', () => {
//         let total = 0;
//         let hope = []
//         //check the card and change the next page
//         let all_lable = document.querySelectorAll(".check lable")
//         for(let lable of all_lable){
//             lable.addEventListener('click',()=>{
//                let select = lable.querySelector(".price").matche(/\d+/)
//                let newselect = Number(select[0])
//                hope.add(newselect)  

//             })
//         let each = 0
//         for(let key in chack){
//             chack[key] = hope[each]
//             total =+ hope[each]
//             each++
//         }
//         }
       
//         //change element of the taible
//         for (let elm in chack) {
//             document.querySelector(`#${elm}`).textContent = chack[elm] + "HD"
//         }
//         document.querySelector("#total").textContent = total + "DH"
//         // loop on the books and  get those prices
//         //sswitch between the pages()
//         document.querySelectorAll(".partone").forEach(el => el.style.display = "none")
//         document.querySelectorAll(".parttwo").forEach(el1 => el1.style.display = "block")
//         clearInterval(stop)
//     })
// let i = 0;
// let total = 0;
// //get all the card
// //  let all_check = document.querySelectorAll('.choose-card')

// let stop = setInterval(() => {
//     let i = 0;
//     for (let key in chack) {
//         //cheack the crad has been slected
//         let act = document.querySelector(`input[nameo="my-coffee-choose${i}"]:checked`)
//         // console.log(act)
//         let newact = act.parentNode.querySelector(".price").textContent
//         // console.log(newact)
//         let num = newact.match(/\d+/)
//         // console.log(num)
//         chack[key] = Number(num[0])
//         total = total + chack[key]


//         // console.log(chack)

//         i++
//     }
//     let forobj = 0;
//     //creat the last elm for the obj
//     //get the last elm 
//     document.querySelectorAll(`input[nameo="my-coffee-choose3i"]:checked`).forEach(el => {
//         x = el.parentNode.querySelector(".price").textContent
//         let newx = x.match(/\d+/)
//         let makex = Number(newx[0])
//         forobj = forobj + makex

//     })
//     document.querySelector(".totale").textContent = total + forobj + "DH"


//     //event
//     document.querySelector(".buybtn").addEventListener('click', () => {
//         // empty elm to add to my obj


//         chack.supplements = forobj

//         //change element of the taible
//         for (let elm in chack) {
//             document.querySelector("#${elm}").textContent = chack[elm] + "HD"
//         }
//         document.querySelector("#total").textContent = total + forobj + "DH"
//         // loop on the books and  get those prices
//         //sswitch between the pages()
//         document.querySelectorAll(".partone").forEach(el => el.style.display = "none")
//         document.querySelectorAll(".parttwo").forEach(el1 => el1.style.display = "block")
//         clearInterval(stop)
//     })
//     total = 0
//     // //acces to each card
//     // let act = document.querySelector(`.${card}`)
//     // //
//     //     inputs.addEventListener('click',function count(){

//     //         let addin = card.querySelector('.price').textContent
//     //         console.log(addin)
//     //         let num = addin.match(/\d+/)
//     //         console.log(num[0])
//     //         total = Number(num[0])+total
//     //         console.log(total)
//     //     }
// }, 1000)
