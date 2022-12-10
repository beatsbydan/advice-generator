//getting the button to always generate the advice
const advBtn = document.getElementById("adviceBtn");
//targetting the id for the advice
let id = document.querySelector(".advice__id")
//targetting the advice itself
let advice = document.querySelector(".advice")

//async function to fetch the Advice
const getAdvice = async()=>{
    let apiDetails =await fetch('https://api.adviceslip.com/advice')
    let data = await apiDetails.json()
    //appending to the classes
    id.innerHTML = `ADVICE #${data.slip.id}`
    advice.innerHTML = `"${data.slip.advice}"`
}
//always call the function
getAdvice();
//to toggle each advice
advBtn.addEventListener('click', () => {
    getAdvice();
})