let btn = document.querySelector("input[type='submit']")
 let vlelm1 = document.querySelector("#valid1")
 let vlelm2 = document.querySelector("#valid2")
 let vlelm3 = document.querySelector("#valid3")
function testing(event){
  event.preventDefault()
  let input_one = document.forms['cardform']["number"].value
  let input_style = document.forms['cardform']["number"]
  if( /^\d{13,19}$/.test(input_one)){
      vlelm1.innerHTML = "correct"
      vlelm1.style.color = "green"
      input_style.style.outline =  "3px solid green"
      let input_two = document.forms['cardform']["date"].value
      let input_two_style = document.forms['cardform']["date"]
      if (/^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/.test(input_two)) {
          vlelm2.innerHTML = "correct"
          vlelm2.style.color = "green"
          input_two_style.style.outline = "3px solid green"
          let input_tree = document.forms['cardform']["pin"].value
          let input_tree_style = document.forms['cardform']["pin"]
        if (/^\d{3,4}$/.test(input_tree)) {
          vlelm3.innerHTML = "correct"
          vlelm3.style.color = "green"
          input_tree_style.style.outline =  "3px solid green"
        }
        else{
          vlelm3.innerHTML = "code wrong!"
          vlelm3.style.color = "red"
          input_tree_style.style.outline =  "3px solid red"
        }
        
      }
      else{
          vlelm2.innerHTML = "this date does not work,try again!"
          vlelm2.style.color = "red"
          input_two_style.style.outline =  "3px solid red"
      }
  }
  else{
   vlelm1.innerHTML = "please type your card number,try again!"
   vlelm1.style.color = "red"
   input_style.style.outline =  "3px solid red"
  }
 
}
btn.addEventListener("click",testing)