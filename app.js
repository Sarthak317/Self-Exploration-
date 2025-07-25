//acess the input
let file = document.querySelector(".file");
//access the div
let div = document.querySelector(".custom");
//main logic 
div.addEventListener("click",()=>{
    file.click();
})
//event listener for getting
//the filename 
//change will happen in input 
//when file is selcted 
file.addEventListener("change",(e)=>{
    div.textContent = `${e.target.files[0].name} Selected`;
})