const container=document.querySelector("#container");
const btn=document.querySelector("#btn");
const btn2=document.querySelector("#btn2");
const clear=document.querySelector("#clear");
const colors=document.querySelector("#colors");
const colorDiv=Array.from(document.querySelectorAll("#colors div"));
let color="black";

const arr=[];
let num=16;
let myArr=Array.from(document.querySelectorAll("#container div"));
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;
for(let i=0;i<(num*num);i++){
    arr[i]=document.createElement("div");
    arr[i].setAttribute("style",`width:calc(70svw/${num});height:calc(70svw/${num});`);
    container.appendChild(arr[i]);
}
arr.forEach(element=>{
    element.addEventListener("mouseover",(e)=>{
        if(mouseDown){
            element.style.background=color;
        }
    });
});
btn.onclick=function(){
    for(let i=0;i<(num*num);i++){
        container.removeChild(arr[i]);
    }
     num=prompt("Enter the number N*N of the grid");
     for(let i=0;i<(num*num);i++){
        arr[i]=document.createElement("div");
        arr[i].setAttribute("style",`width:calc(70svw/${num});height:calc(70svw/${num});`);
        container.appendChild(arr[i]);
    }
    arr.forEach(element=>{
        element.addEventListener("mouseover",(e)=>{
            if(mouseDown){
                element.style.background=color;
            }
        });
    });
}
clear.addEventListener("click",()=>{
    for(let i=0;i<(num*num);i++){
        arr[i].style.background="white";
    }
})
colorDiv.forEach(element=>{
element.addEventListener("click",()=>{
    color=element.getAttribute("class");
})
})
btn2.onclick=function(){
    color=prompt("Type the color you need");
}



