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
for(let key in config){
    // git into each objrct
    for(let key1 in key){
        // creat new value for name
        let name = key1.name
        // creat new value for price
        let price = key1.price
        //git the elments to change it
        let gitelm1 = document.querySelector("..choose-card>div>span[1]")//fist elm
        let gitelm2 = document.querySelector(".choose-card")

        
    }
}