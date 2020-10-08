
window.onload=()=>{
    alert("Welcome to Etch a Sketch move mouse over to Draw !!! \n Reload to clear");
}

var cont=document.querySelector(".container");
for(let i=0;i<540;i++)
{
    let ls=document.createElement("div");
    ls.innerHTML="";
    ls.classList.add("square");
    cont.appendChild(ls);  
}

var squares=document.querySelectorAll(".square");
squares.forEach((square)=>{
    square.addEventListener("mouseover",function () {
        this.style.backgroundColor = "hsl(0,0%,0%)";
    });
});
// reset function
function reset()
{
squares.forEach((square)=>{
    square.style.backgroundColor="gainsboro";
});
}



