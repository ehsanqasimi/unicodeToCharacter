let input = document.getElementById("input")
let submit = document.getElementById("submit")
submit.addEventListener('click',()=>{
  encoded_data()
})

window.addEventListener('keypress',(e)=>{
  if(e.key === "Enter"){
    encoded_data()
  }

})


function encoded_data(){
  let text = String.fromCharCode(input.value);
    document.getElementById("demo").innerHTML = text;
}



