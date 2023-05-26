const submit = document.querySelector(".submit")
const error = document.querySelector(".error")
const form = document.querySelector(".form")
const input = document.querySelector(".input")
const label = document.querySelector(".label")

form.addEventListener("submit",validate)
submit.addEventListener("click",validate)

function validate(e){
  e.preventDefault()
  const inputValue = input.ariaValueMax.trim()
  console.log(inputValue)

  if(inputValue === ""){
    error.style.display = "block"
  }else if (!isEmail(inputValue)){
    error.style.display = "block"
  }else{
    error.style.display = "none"
  }
}