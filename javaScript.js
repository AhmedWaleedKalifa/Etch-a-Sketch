const container=document.querySelector(".container");
const btn=document.querySelector("#btn");
const btn2=document.querySelector("#btn2");
const clear=document.querySelector("#clear");
const colors=document.querySelector("#colors");
const background=document.querySelector("#background");
const colorDiv=Array.from(document.querySelectorAll("#colors div"));
const opacity=document.querySelector("#opacity");
const eraser=document.querySelector(".eraser");
const big=document.querySelector(".big");
const pen=document.querySelector(".pen")
let color="#000000";
let size=1;
let p=-1;
let backgroundColor="white";
let opacityDegree="";
let opacityDigit="";
let colorTemp="";
// const random=document.querySelector(".random");
const arr=[];
let num=16;
let mouseDown = 0;

document.body.onmousedown = () => mouseDown = 1;
document.body.onmouseup = () => mouseDown = 0;
for(let i=0;i<(num*num);i++){
    arr[i]=document.createElement("div");
    arr[i].setAttribute("style",`width:calc(80svw/${num});height:calc(80svw/${num});`);
    container.appendChild(arr[i]);
}
arr.forEach(element=>{
    element.addEventListener("click",(e)=>{
            element.style.background=color;
        
    });
});
arr.forEach(element=>{
    element.addEventListener("dblclick",(e)=>{
            element.style.background="transparent";
        
    });
});
  for(let i=0;i<arr.length;i++){
        arr[i].addEventListener("mouseover",()=>{
            if(mouseDown&&size==1){
                arr[i].style.background=color;
            }
            else if(mouseDown&&size==2&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i+num].style.background=color;
                arr[i+1+num].style.background=color;
            }else if(mouseDown &&size==3&&i%num!=0&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i-1].style.background=color;
                arr[i+num].style.background=color;
                arr[i+1+num].style.background=color;
                arr[i-1+num].style.background=color;
                arr[i-num].style.background=color;
                arr[i-1-num].style.background=color;
                arr[i+1-num].style.background=color;
            }else if(mouseDown&&size==4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i+2].style.background=color;
                arr[i-1].style.background=color;
                arr[i+num].style.background=color;
                arr[i+1+num].style.background=color;
                arr[i+2+num].style.background=color
                arr[i-1+num].style.background=color;
                arr[i-num].style.background=color;
                arr[i-1-num].style.background=color;
                arr[i+1-num].style.background=color;
                arr[i+2-num].style.background=color;
                arr[i+2+num].style.background=color;
                arr[i+2*num].style.background=color;
                arr[i+1+2*num].style.background=color;
                arr[i+2+2*num].style.background=color;
                arr[i-1+2*num].style.background=color;
            }else if(mouseDown&&size>4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0&&(i-1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i+2].style.background=color;
                arr[i-1].style.background=color;
                arr[i-2].style.background=color;
                arr[i+num].style.background=color;
                arr[i+1+num].style.background=color;
                arr[i+2+num].style.background=color
                arr[i-1+num].style.background=color;
                arr[i-2+num].style.background=color;
                arr[i-num].style.background=color;
                arr[i-1-num].style.background=color;
                arr[i-2-num].style.background=color;
                arr[i+1-num].style.background=color;
                arr[i+2-num].style.background=color;
                arr[i+2+num].style.background=color;
                arr[i+2*num].style.background=color;
                arr[i+1+2*num].style.background=color;
                arr[i+2+2*num].style.background=color;
                arr[i-1+2*num].style.background=color;
                arr[i-2+2*num].style.background=color;
                arr[i-2*num].style.background=color;
                arr[i+1-2*num].style.background=color;
                arr[i+2-2*num].style.background=color;
                arr[i-1-2*num].style.background=color;
                arr[i-2-2*num].style.background=color;
            }else if(p==1){
                arr[i].style.background=color;
            }
        })
    }
btn.onclick=function(){
   
    for(let i=0;i<(num*num);i++){
        container.removeChild(arr[i]);
    }
     num=prompt("Enter the number N*N of the grid");
     if(num<1){
        num=16;
     }
     for(let i=0;i<(num*num);i++){
        arr[i]=document.createElement("div");
        arr[i].setAttribute("style",`width:calc(80svw/${num});height:calc(80svw/${num});`);
        container.appendChild(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        arr[i].addEventListener("mouseover",()=>{
            if(mouseDown&&size==1){
                arr[i].style.background=color;
            }else if(mouseDown&&size==2&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[Number(i)+Number(num)].style.background=color;
                arr[Number(i)+Number(num)+1].style.background=color;
            }
            else if(mouseDown &&size==3&&i%num!=0&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i-1].style.background=color;
                arr[i+Number(num)].style.background=color;
                arr[i+1+Number(num)].style.background=color;
                arr[i-1+Number(num)].style.background=color;
                arr[i-Number(num)].style.background=color;
                arr[i-1-Number(num)].style.background=color;
                arr[i+1-Number(num)].style.background=color;
            }else if(mouseDown&&size==4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i+2].style.background=color;
                arr[i-1].style.background=color;
                arr[i+Number(num)].style.background=color;
                arr[i+1+Number(num)].style.background=color;
                arr[i+2+Number(num)].style.background=color
                arr[i-1+Number(num)].style.background=color;
                arr[i-Number(num)].style.background=color;
                arr[i-1-Number(num)].style.background=color;
                arr[i+1-Number(num)].style.background=color;
                arr[i+2-Number(num)].style.background=color;
                arr[i+2+Number(num)].style.background=color;
                arr[i+2*Number(num)].style.background=color;
                arr[i+1+2*Number(num)].style.background=color;
                arr[i+2+2*Number(num)].style.background=color;
                arr[i-1+2*Number(num)].style.background=color;
            }else if(mouseDown&&size>4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0&&(i-1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i+2].style.background=color;
                arr[i-1].style.background=color;
                arr[i-2].style.background=color;
                arr[i+Number(num)].style.background=color;
                arr[i+1+Number(num)].style.background=color;
                arr[i+2+Number(num)].style.background=color
                arr[i-1+Number(num)].style.background=color;
                arr[i-2+Number(num)].style.background=color;
                arr[i-Number(num)].style.background=color;
                arr[i-1-Number(num)].style.background=color;
                arr[i-2-Number(num)].style.background=color;
                arr[i+1-Number(num)].style.background=color;
                arr[i+2-Number(num)].style.background=color;
                arr[i+2+Number(num)].style.background=color;
                arr[i+2*Number(num)].style.background=color;
                arr[i+1+2*Number(num)].style.background=color;
                arr[i+2+2*Number(num)].style.background=color;
                arr[i-1+2*Number(num)].style.background=color;
                arr[i-2+2*Number(num)].style.background=color;
                arr[i-2*Number(num)].style.background=color;
                arr[i+1-2*Number(num)].style.background=color;
                arr[i+2-2*Number(num)].style.background=color;
                arr[i-1-2*Number(num)].style.background=color;
                arr[i-2-2*Number(num)].style.background=color;
            }else if(p==1){
                arr[i].style.background=color;
            }
        })
    }
    arr.forEach(element=>{
        element.addEventListener("click",(e)=>{
                element.style.background=color;
            
        });
    });
    arr.forEach(element=>{
        element.addEventListener("dblclick",(e)=>{
                element.style.background="transparent";
            
        });
    });
    btn.textContent=num;
}
clear.addEventListener("click",()=>{
    for(let i=0;i<(num*num);i++){
        arr[i].style.background="transparent";
    }
})

colorDiv.forEach(element=>{
element.addEventListener("click",()=>{
    colorTemp=color=element.getAttribute("id");
    btn2.style.background=color;
})
})
btn2.onclick=function(){
    color=prompt("Type the color you need");
    if(color<1){
        color="black";
    }
    btn2.style.background=setColorEquivalent(color);
    colorTemp=color;
}
background.onclick=function(){
    backgroundColor=prompt("Type the color you need for background")
    background.style.background=backgroundColor;
    container.style.background=backgroundColor;
}
eraser.addEventListener("click",()=>{
    color="transparent";
    btn2.style.background="transparent";
})
big.addEventListener("click",()=>{
    size=prompt("Select font size from 1 to 5");
    if(size<1){
        size=1;
    }
    big.textContent=size;
})
pen.onclick=function(){
    p=p*-1;
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
function setColorEquivalent(myColor){
if(myColor=="black"){
    color="#000000";
}else if(myColor=="silver"){
    color="#C0C0C0";
}else if(myColor=="gray"){
    color="#808080";
}else if(myColor=="white"){
    color="#FFFFFF";
}else if(myColor=="maroon"){
    color="#800000";
}else if(myColor=="red"){
    color="#FF0000";
}else if(myColor=="purple"){
    color="#800080";
}else if(myColor=="fuchsia"){
    color="#FF00FF";
}else if(myColor=="green"){
    color="#008000";
}else if(myColor=="lime"){
    color="#00FF00";
}else if(myColor=="olive"){
    color="#808000";
}else if(myColor=="yellow"){
    color="#FFFF00";
}else if(myColor=="navy"|myColor=="darkblue"){
    color="#000080";
}else if(myColor=="blue"){
    color="#0000FF";
}else if(myColor=="silver"){
    color="#C0C0C0";
}else if(myColor=="teal"){
    color="#008080";
}else if(myColor=="aqua"){
    color="#aqua";
}else if(myColor=="aliceblue"){
    color="#f0f8ff";
}else if(myColor=="antiquewhite"){
    color="#faebd7";
}else if(myColor=="aquamarine"){
    color="#f0ffff";
}else if(myColor=="azure"){
    color="#C0C0C0";
}else if(myColor=="beige"){
    color="#f5f5dc";
}else if(myColor=="bisque"){
    color="#ffe4c4";
}else if(myColor=="black"){
    color="#000000";
}else if(myColor=="blanchedalmond"){
    color="#ffebcd";
}else if(myColor=="blueviolet"){
    color="#8a2be2";
}else if(myColor=="brown"){
    color="#a52a2a";
}else if(myColor=="burlywood"){
    color="#deb887";
}else if(myColor=="cadetblue"){
    color="#5f9ea0";
}else if(myColor=="chartreuse"){
    color="#7fff00";
}else if(myColor=="chocolate"){
    color="#d2691e";
}else if(myColor=="coral"){
    color="#ff7f50";
}else if(myColor=="cornflowerblue"){
    color="#6495ed";
}else if(myColor=="cornsilk"){
    color="#fff8dc";
}else if(myColor=="crimson"){
    color="#dc143c";
}else if(myColor=="cyan"){
    color="#00ffff";
}else if(myColor=="darkcyan"){
    color="#008b8b";
}else if(myColor=="darkgoldenrod"){
    color="#b8860b";
}else if(myColor=="darkgray"){
    color="#a9a9a9";
}else if(myColor=="darkgreen"){
    color="#006400";
}else if(myColor=="darkkhaki"){
    color="#bdb76b";
}else if(myColor=="darkmagenta"){
    color="#8b008b";
}else if(myColor=="darkolivegreen"){
    color="#556b2f";
}else if(myColor=="darkorange"){
    color="#ff8c00";
}else if(myColor=="darkorchid"){
    color="#9932cc";
}else if(myColor=="darkred"){
    color="#8b0000";
}else if(myColor=="darksalmon"){
    color="#e9967a";
}else if(myColor=="darkseagreen"){
    color="#8fbc8f";
}else if(myColor=="darkslateblue"){
    color="#483d8b";
}else if(myColor=="darkslategray"){
    color="#2f4f4f";
}else if(myColor=="darkturquoise"){
    color="#00ced1";
}else if(myColor=="deeppink"){
    color="#ff1493";
}else if(myColor=="deepskyblue"){
    color="#1e90ff";
}else if(myColor=="dimgray"){
    color="#696969";
}else if(myColor=="dodgerblue"){
    color="#8b008b";
}else if(myColor=="firebrick"){
    color="#b22222";
}else if(myColor=="floralwhite"){
    color="#fffaf0";
}else if(myColor=="forestgreen"){
    color="#228b22";
}else if(myColor=="gainsboro"){
    color="#dcdcdc";
}else if(myColor=="gold"){
    color="#ffd700";
}else if(myColor=="goldenrod"){
    color="#daa520";
}else if(myColor=="honeydew"){
    color="#f0fff0";
}else if(myColor=="hotpink"){
    color="#ff69b4";
}else if(myColor=="indianred"){
    color="#cd5c5c";
}else if(myColor=="indigo"){
    color="#4b0082";
}else if(myColor=="ivory"){
    color="#fffff0";
}else if(myColor=="khaki"){
    color="#f0e68c";
}else if(myColor=="lavender"){
    color="#e6e6fa";
}else if(myColor=="lavenderblush"){
    color="#fff0f5";
}else if(myColor=="lawngreen"){
    color="#7cfc00";
}else if(myColor=="darkmagenta"){
    color="#8b008b";
}else if(myColor=="lemonchiffon"){
    color="#fffacd";
}else if(myColor=="darkmagenta"){
    color="#8b008b";
}else if(myColor=="darkmagenta"){
    color="#8b008b";
}else if(myColor=="darkmagenta"){
    color="#8b008b";
}else{
    color=myColor
}
colorTemp=color;
return color;
}