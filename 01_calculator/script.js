let inp = document.getElementById('inp');

let values = (num) => {
    inp.value += num
}
let calculate = () => {
   try{
    inp.value = eval(inp.value)
   }
   catch(err){
    inp.value = err
   }
    
}
let clearInput = () => {
    inp.value = ''
}