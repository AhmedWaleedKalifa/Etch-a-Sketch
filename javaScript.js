const container=document.querySelector("#container");
const btn=document.querySelector("#btn");
const btn2=document.querySelector("#btn2");
const btn3=document.querySelector("#btn3");
const arr=[];
let num=16;
let mouseDown = 0;
document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;
btn.onclick=function(){
     num=prompt("Enter the number N*N of the grid");
     let myArr=Array.from(document.querySelectorAll("#container div"));
     myArr.forEach(element=>{
        container.removeChild(element);
     });
     for(let i=0;i<(num*num);i++){
        arr[i]=document.createElement("div");
        arr[i].setAttribute("style",`width:calc(90svw/${num});height:calc(90svw/${num});`);
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

    
let color="black";
btn2.onclick=function(){
    color=prompt("Type the color you need");
}
btn3.onclick=function(){

}


