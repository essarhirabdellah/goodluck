let op = 0;
document.querySelector(".plus").addEventListener('click',()=>{
    op++
    document.querySelector('.count').textContent = op})
document.querySelector(".min").addEventListener('click',()=>{
    if(op > 0){
    op--
    document.querySelector('.count').textContent = op}})
let op1 = 0;
document.querySelector(".plus1").addEventListener('click',()=>{
    op1++
    document.querySelector('.count1').textContent = op1})
document.querySelector(".min1").addEventListener('click',()=>{
    if(op1 > 0){
    op1--
    document.querySelector('.count1').textContent = op1}})
let op2 = 0;
document.querySelector(".plus2").addEventListener('click',()=>{
    op2++
    document.querySelector('.count2').textContent = op2})
document.querySelector(".min2").addEventListener('click',()=>{
    if(op2 > 0){
    op2--
    document.querySelector('.count2').textContent = op2}})