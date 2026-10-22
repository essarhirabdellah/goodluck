const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};
//git the elments of name to change it
let gitallcardsnames = document.querySelectorAll(".choose-card .type")//fist elm
//creat regex
//git the elments of name to change it
let gitallcardsprices = document.querySelectorAll(".choose-card>span")//scond elm

// creat varble value for go on all crads
let x = 0
for (let key in config) {
  // git into each objrct
  for (let key1 in config[key]) {
    // creat new value for name
    let name = config[key][key1]['name']
    // creat new value for price
    let price = config[key][key1]['price']
    //go on cards one by one and print a new value
    gitallcardsnames[x].innerHTML = name
    gitallcardsprices[x].textContent = price + "DH"
    x++




  }
}