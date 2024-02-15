const container=document.querySelector("#container");
const btn=document.querySelector("#btn");
const btn2=document.querySelector("#btn2");
const clear=document.querySelector("#clear");
const colors=document.querySelector("#colors");
const background=document.querySelector("#background");
const colorDiv=Array.from(document.querySelectorAll("#colors div"));
const opacity=document.querySelector("#opacity");
let color="#000000";
let backgroundColor="white";
let opacityDegree="";
let opacityDigit="";
let colorTemp="";
// const random=document.querySelector(".random");
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
    btn.textContent=num;
}
clear.addEventListener("click",()=>{
    for(let i=0;i<(num*num);i++){
        arr[i].style.background="transparent";
    }
})
// random.addEventListener("click",()=>{
    
// })
colorDiv.forEach(element=>{
element.addEventListener("click",()=>{
    colorTemp=color=element.getAttribute("id");
})
})
btn2.onclick=function(){
    color=prompt("Type the color you need");
    btn2.style.background=color;
    colorTemp=color;
}
background.onclick=function(){
    backgroundColor=prompt("Type the color you need for background")
    background.style.background=backgroundColor;
    container.style.background=backgroundColor;
}

opacity.addEventListener("click",()=>{
    if(colorTemp!=""){
        color=colorTemp;
    }
    opacityDegree=prompt("Type the degree of the opacity from 1 to 10");
    if(opacityDegree==1){
        opacityDegree="22";
    }else if(opacityDegree==2){
        opacityDegree="44";
    }else if(opacityDegree==3){
        opacityDegree="55"
    }else if(opacityDegree==4){
        opacityDegree="77"
    }
    else if(opacityDegree==5){
        opacityDegree="88"
    }else if(opacityDegree==6){
        opacityDegree="99"
    }else if(opacityDegree==7){
        opacityDegree="aa"
    }else if(opacityDegree==8){
        opacityDegree="cc"
    }else if(opacityDegree==9){
        opacityDegree="dd"
    }else{
        opacityDegree="ff"
    }
    colorTemp=color;
    color=color+opacityDegree;

})
