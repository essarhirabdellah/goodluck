// import Swal from 'sweetalert2'
let valid_list = true
const next = document.querySelector("[next]")
let showcards1 = document.querySelector("[showcards]")
showcards1.style.display = "none"
function actiion_2(){
   let step2 = document.querySelector("[span-2]")
   step2.classList.add("bg-primary")
   let step3 = document.querySelector("[span-3]")
   step2.classList.add("border-primary")
   let step2_block = document.querySelector("[step-two]")
      step2_block.style.display = "none"
   let step2_btn = document.querySelector("[back1]")
      let step2_btn2 = document.querySelector("[next2]")
      step2_btn.style.display = "none"
      step2_btn2.style.display = "none"
    let last = document.querySelector("[finle]")
    last.style.display = "block"
    stylefinale()
    let btn_3 = document.querySelector("[back]")
      let btn_no3 = document.querySelector("[next1]")
      btn_3.style.display = "block"
      btn_no3.style.display = "block"
   
}
function actiion_1() {
   let step1 = document.querySelector("[span-1]")
   step1.classList.add("bg-primary")
   let step2 = document.querySelector("[span-2]")
   step2.classList.add("border-primary")
   let line2 = document.querySelector("[line2]")
   line2.classList.add("fg-primary")
   
      let step1_block = document.querySelector("[step-one]")
      step1_block.style.display = "none"
      next.style.display = "none"
      let step2_block = document.querySelector("[step-two]")
      step2_block.style.display = "block"
      let step2_btn = document.querySelector("[back1]")
      let step2_btn2 = document.querySelector("[next2]")
      step2_btn.style.display = "block"
      step2_btn2.style.display = "block"



}
let table = {}



next.addEventListener("click",() => {
 let name_prodact = document.querySelector("[name-prodact]")
 let value_of_inname = name_prodact.value
 if (/^[a-zA-Z]+$/.test(value_of_inname)) {
    name_prodact.style.outline = "3px solid #4dde51"
    table.prodactName = name_prodact.value
    let price_prodact = document.querySelector("[price-proodact]")
    let price_value = Number(price_prodact.value)
    if (price_value > 0) {
      table.prodactPrice = price_value
       price_prodact.style.outline = "3px solid #4dde51"
       let dis_prodact = document.querySelector("[descreption]")
       let value_dic_prodact = dis_prodact.value
       //^[\x20-\x7E\r\n]+$/.test(value_dic_prodact) &&
       if ( value_dic_prodact.length > 10) {
         table.prodactDiscreption = value_dic_prodact
        dis_prodact.style.outline = "3px solid #4dde51"
            let file_input = document.querySelector("[image]")
            //  let image = document.querySelector("[img]")
            //    file_input.addEventListener("change",(e)=>{e.target.files[0]
            //    const reader = new FileReader()
            //    reader.onload = function (e) {
            //      reader.src = e.target.result
            //    }
            //    reader.readAsDataURL(file);
            //    })

           if (file_input.files.length > 0) {
               
            file_input.style.outline = "3px solid #4dde51"
            actiion_1()
        }
           else {
             file_input.style.outline = "3px solid #d63807"
        }
       }
       else{
        dis_prodact.style.outline = "3px solid #d63807"
       }
    }
    else{
        price_prodact.style.outline = "3px solid #d63807"
    }

 }
 else{
    name_prodact.style.outline = "3px solid #d63807"
 }
})


let back = document.querySelector("[back1]")
back.addEventListener("click",()=>{
    let step1_block = document.querySelector("[step-one]")
    step1_block.style.display = "block"
     next.style.display = "block"
     let step2_block = document.querySelector("[step-two]")
      step2_block.style.display = "none"
      let step2_btn = document.querySelector("[back1]")
      let step2_btn2 = document.querySelector("[next2]")
      step2_btn.style.display = "none"
      step2_btn2.style.display = "none"
}
)
let next1 = document.querySelector("[next2]")
let allclick = document.querySelector("[selcet-1]")
next1.addEventListener("click",() => {
   let von = document.querySelector("[value-1]").textContent
   if (von != "Select an size…") {
      table.sizeProdact = von
      allclick.style.outline = "3px solid #4dde51"
      let all_redio = document.querySelector('input[name="radios"]:checked')
      if(all_redio){
         table.prodactTemperature = all_redio.nextElementSibling.textContent
         document.querySelectorAll('input[name="radios"]').forEach(elm=>elm.style.outline = "none" )
         all_redio.style.outline = "3px solid #4dde51"
         let input_country = document.querySelector("[country]")
         let value_country = input_country.value
         if (/^[a-zA-Z]+$/.test(value_country)) {
            table.prodactorigine = value_country
            input_country.style.outline = "3px solid #4dde51"
            let all_redio1 = document.querySelector('input[name="radios1"]:checked')
            if(all_redio1){
               table.prodactTypemilk = all_redio1.nextElementSibling.textContent
         document.querySelectorAll('input[name="radios1"]').forEach(elm=>elm.style.outline = "none" )
         all_redio1.style.outline = "3px solid #4dde51"
           if (valid_list === true) {
            actiion_2()
           }
            
            }
          else {
         document.querySelectorAll('input[name="radios1"]').forEach(elm=>elm.style.outline = "3px solid #d63807" )
      }

         }
         else {
            input_country.style.outline = "3px solid #d63807" 
         }


      }
      else{
         document.querySelectorAll('input[name="radios"]').forEach(elm=>elm.style.outline = "3px solid #d63807" )
      }

   }
   else{
    allclick.style.outline = "3px solid #d63807" 
   }
  
   })
   let mydive = document.querySelector(".mybox")
   let pop_ov = document.querySelector("[onpop]")
   // console.log(mydive)
   // console.log(pop_ov)
   let intc = document.querySelector("[intc]")
   table.intoncet = intc.value
   pop_ov.addEventListener("change",function() {
     
      if(this.checked){
             mydive.classList.add('hide')
            let deathline = document.querySelector("[deathline]")
            valid_list = false
            deathline.style.outline = "3px solid #d63807"
            deathline.addEventListener("click",function(){
             let vl_deathline = deathline.value
             let user_date = new Date(`${vl_deathline.slice(6)}-${vl_deathline.slice(3,5)}-${vl_deathline.slice(0,2)}`)
             let date_now = new Date()
             if(user_date>date_now){
             
               let brs = document.querySelector("[brs]").value
               table.discountPercentage = brs
               table.discountdeathline = user_date
               this.style.outline = "3px solid #4dde51"
               valid_list = true
               console.log(valid_list)

             }
             else{
               valid_list = false
               console.log(valid_list)
                this.style.outline = "3px solid #d63807"
             }
  })  
      }
      else{
          mydive.classList.remove('hide')
      }
   })

//   let deathline = document.querySelector("[deathline]")
//   deathline.addEventListener("click",function(){
//              let vl_deathline = deathline.value
//              let user_date = new Date(`${vl_deathline.slice(6)}-${vl_deathline.slice(3,5)}-${vl_deathline.slice(0,2)}`)
//              let date_now = new Date()
//              if(user_date>date_now){
//                this.style.outline = "3px solid #4dde51"
//                valid_list = true

//              }
//              else{
//                valid_list = false
//                 this.style.outline = "3px solid #d63807"
//              }
//   })  

   
let btn_no3 = document.querySelector("[back]")
btn_no3.addEventListener("click",() => {
      let btn_3= document.querySelector("[back]")
      let btn_no3 = document.querySelector("[next1]")
      btn_3.style.display = "none"
      btn_no3.style.display = "none"
      let last = document.querySelector("[finle]")
        last.style.display = "none"
      
   actiion_1()
})
function stylefinale() {
   let last = document.querySelector("[finle]")
   last.insertAdjacentHTML("beforeend",`<ul><li>Name : ${table.prodactName}</li>
      <li>Price : ${table.prodactPrice}</li>
      <li>Discerption : ${table.prodactDiscreption}</li>
      <li>size : ${table.sizeProdact}</li>
      <li>Temperature : ${table.prodactTemperature}</li>
      <li>Origine : ${table.prodactorigine}</li>
      <li>Milk type : ${table.prodactTypemilk}</li>
      <li>intencity : ${table.intoncet}/10</li>
      <li>discount : ${table.discountPercentage} %</li>
      <li>intencity ${table.discountdeathline}</li>
      <input type="checkbox" id="check" class="check" conforme/>
<label for="check" class="form-label">pleas click here to conforme this card.</label>
      </ul>`)
}
let btn__no3 = document.querySelector("[next1]")
btn__no3.addEventListener("click",function () {
   let conforme = document.querySelector("[conforme]")
   if(conforme.checked){
     Swal.fire({
       title: "Good job!",
      text: "You card has been added!",
     icon: "success"
}); 
    let new_card = document.querySelector("[finle]").cloneNode(true)
    new_card.querySelector("input").remove()
    let showcards = document.querySelector("[showcards]")
    showcards.append(new_card)
    showcards.style.display = "grid"
   }
   else{
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "plaes coform this card!",
});
   }
})
