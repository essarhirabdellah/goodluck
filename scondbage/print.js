
// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
  { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
  { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
  { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
  { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
  { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
  { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
  { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
  { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
  { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappuccino.jpg" },
  { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
  { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }
];



let allofcont = document.querySelectorAll(".centent")
for(let i = 0;i < coffeeCart.length ;i++){
     allofcont[i].innerHTML = `<h3 class="content">Name : ${coffeeCart[i].name} price :  <span class="price"> ${coffeeCart[i].price}</span>DH</h3>`
}
// for(let i = 0;i < newlist.length;i++){
//      let newone = document.createElement('div')
//      newone.className = 'centent'
//      newone.innerHTML = `<h3 class="content">Name : ${coffeeCart[i].name} price : ${coffeeCart[i].price} DH</h3>`
// }


let scrolcontex = document.querySelector(".yscrol")
let num = 0;
// let srchlist = []
let yop = 3;
for(let elm of  coffeeProducts){
  //  let obj = {} 
   let inside = document.createElement('div')
   inside.innerHTML = `<p>Name : ${elm.name} price: ${elm.price} DH</p>`
   inside.className = "srchln"
   inside.classList.add(`srchln${num}`)
   scrolcontex.appendChild(inside)
  //  obj.name = elm.name
  //  obj.price = elm.price
   elm.class = `srchln${num}`
  //  console.log(obj)
  //  srchlist.push(obj)
   num++
   inside.addEventListener('click',()=>{
     let modul = document.querySelector(".modul")
     modul.classList.remove('pop')
     let newitem = `<h3>Name : ${elm.name} price: <span class="price">${elm.price}</span> DH</h3>`
     let newone = document.createElement('div')
     let orginal = document.querySelector('.cardin')
     newone.className = 'centent'
     newone.classList.add('global')
     newone.innerHTML = newitem
     orginal.appendChild(newone)
     let btn = document.querySelector('.buttons')
     

     let newbtn = btn.cloneNode(true)
     newbtn.classList.add('globalbtn')

     let newplus = newbtn.querySelector('.plus0')
     let newmin = newbtn.querySelector('.min0')
     let count = newbtn.querySelector('.count0')

     newplus.classList.remove('plus0')
     newplus.classList.add(`plus${yop}`)
     count.classList.remove('count0')
     count.classList.add(`count${yop}`)
     newmin.classList.remove('min0')
     newmin.classList.add(`min${yop}`)
     orginal.appendChild(newbtn)
     ++yop
})
 scrolcontex.appendChild(inside)
  //  inside.addEventListener('click',()=>{
  //    let modul = document.querySelector(".modul")
  //    modul.classList.remove('pop')
  //    let newitem = elm
  //    newitem.quantity = 1 
  //    newlist.push(newitem)
  //    let orginal = document.querySelector('.cardin')
  //    let newone = document.createElement('div')
  //    newone.className = 'centent'
  //    let new2 = document.createElement('div')
  //    new2.className = 'buttons'
  //    newone.innerHTML = `<h3 class="content">Name : ${elm.name} price : ${elm.price} DH</h3> `
  //    new2.innerHTML = `
  //       <div class="buttons"><button class="plus">+</button><s="count">0</span><button class="min">-</button></div>
  //    `
  //    orginal.appendChild(newone)
  //    orginal.appendChild(new2)
    
}


const searchinput = document.querySelector("[search-input]")
searchinput.addEventListener("input", e => {
    let value = e.target.value
    coffeeProducts.forEach(sch => {
      const valid = sch.name.includes(value)
      console.log(valid,value)
      hidig = document.querySelector(`.${sch.class}`)
      console.log(hidig)
      hidig.classList.toggle("hide",!valid)
    })

})
