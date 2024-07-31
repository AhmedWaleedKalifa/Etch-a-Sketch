const container=document.querySelector(".container");
const clear=document.querySelector("#clear");
const colors=document.querySelector("#colors");
const colorDiv=Array.from(document.querySelectorAll("#colors div"));
const eraser=document.querySelector(".eraser");
const pen=document.querySelector(".pen")
const colorInput=document.querySelector(".colorContainer input")
const colorParagraph=document.querySelector(".btn .colorContainer p")

const backgroundColorInput=document.querySelector(".backgroundColorContainer input")
const backgroundColorParagraph=document.querySelector(".btn .backgroundColorContainer p")

const NumberOfPixelsInput=document.querySelector(".numberOfPixels input")
const NumberOfPixelsInputParagraph=document.querySelector(".btn .numberOfPixels .number")

const fontSizeInput=document.querySelector(".fontSize input")
const fontSizeInputParagraph=document.querySelector(".btn .fontSize .font")

const opacityInput=document.querySelector(".opacity input")
const opacityParagraph=document.querySelector(".btn .opacity .op")

const grid=document.querySelector(".grid")

let gridVar=0;
let color="#000000";
let size=1;
let p=0;
let backgroundColor="white";
let opacityDegree="";
let opacityDigit="";
let colorTemp="";
const arr=[];
let num=16;
let mouseDown = 0;

grid.addEventListener("click",function(){
    if(gridVar==1){
        gridVar=0;
        grid.style.background="rgb(224, 231, 231)"
    }else{
        gridVar=1
        grid.style.fontSize="25px";
        grid.style.background="url(./images/grid.jpg)"

    }
    createBoard();

})

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
            if(mouseDown|p%2!=0&&size==1){
                arr[i].style.background=color;
            }
            else if(mouseDown|p%2!=0&&size==2&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i+num].style.background=color;
                arr[i+1+num].style.background=color;
            }else if(mouseDown|p%2!=0&&size==3&&i%num!=0&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i-1].style.background=color;
                arr[i+num].style.background=color;
                arr[i+1+num].style.background=color;
                arr[i-1+num].style.background=color;
                arr[i-num].style.background=color;
                arr[i-1-num].style.background=color;
                arr[i+1-num].style.background=color;
            }else if(mouseDown|p%2!=0&&size==4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0){
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
            }else if(mouseDown|p%2!=0&&size>4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0&&(i-1)%num!=0){
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
            }
        })
    }

NumberOfPixelsInput.addEventListener("input",createBoard)
clear.addEventListener("click",()=>{
    for(let i=0;i<(num*num);i++){
        arr[i].style.background="transparent";
    }
})
function createBoard(){
    for(let i=0;i<(num*num);i++){
        container.removeChild(arr[i]);
    }
     num=NumberOfPixelsInput.value;
     if(NumberOfPixelsInput.value > 50){
        NumberOfPixelsInput.setAttribute("step","5")
     }else if(NumberOfPixelsInput.value>100){
        NumberOfPixelsInput.setAttribute("step","10")
     }
     if(num<1){
        num=16;
     }
     NumberOfPixelsInputParagraph.textContent=num;
     for(let i=0;i<(num*num);i++){
        arr[i]=document.createElement("div");
        // arr[i].setAttribute("class","node")
        if(gridVar==1){
            arr[i].setAttribute("style",`width:calc(80svw/${num});height:calc(80svw/${num});border:1px solid black;box-sizing: border-box;`);
        }else{
            arr[i].setAttribute("style",`width:calc(80svw/${num});height:calc(80svw/${num});`);

        }
        container.appendChild(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        arr[i].addEventListener("mouseover",()=>{
            if(mouseDown|p%2!=0&&size==1){
                arr[i].style.background=color;
            }else if(mouseDown&&size==2&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[Number(i)+Number(num)].style.background=color;
                arr[Number(i)+Number(num)+1].style.background=color;
            }
            else if(mouseDown|p%2!=0 &&size==3&&i%num!=0&&(i+1)%num!=0){
                arr[i].style.backgroundColor=color;
                arr[i+1].style.background=color;
                arr[i-1].style.background=color;
                arr[i+Number(num)].style.background=color;
                arr[i+1+Number(num)].style.background=color;
                arr[i-1+Number(num)].style.background=color;
                arr[i-Number(num)].style.background=color;
                arr[i-1-Number(num)].style.background=color;
                arr[i+1-Number(num)].style.background=color;
            }else if(mouseDown|p%2!=0&&size==4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0){
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
            }else if(mouseDown|p%2!=0&&size>4&&i%num!=0&&(i+1)%num!=0&&(i+2)%num!=0&&(i-1)%num!=0){
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

colorInput.addEventListener("input",function(){
    color=colorInput.value;
    colorParagraph.style.color=color
})

backgroundColorInput.addEventListener("input",function(){

    backgroundColorParagraph.style.color=backgroundColorInput.value;
    container.style.background=backgroundColorInput.value
})

eraser.addEventListener("click",()=>{
    color="transparent";
})
fontSizeInput.addEventListener("input",()=>{
    size=fontSizeInput.value
    fontSizeInputParagraph.textContent=size;
})
pen.onclick=function(){
    p+=1;
}


colorDiv.forEach(element=>{
    element.addEventListener("click",()=>{
        colorTemp=color=element.getAttribute("id");
        colorParagraph.style.color=color;
    })
    })


opacityInput.addEventListener("input",()=>{
    if(colorTemp!=""){
        color=colorTemp;
    }
    opacityDegree=opacityInput.value
    opacityParagraph.textContent=opacityDegree
    let postOpactiyDegree;
    if(opacityDegree==1){
        postOpactiyDegree="22";
    }else if(opacityDegree==2){
        postOpactiyDegree="44";
    }else if(opacityDegree==3){
        postOpactiyDegree="55"
    }else if(opacityDegree==4){
        postOpactiyDegree="77"
    }
    else if(opacityDegree==5){
        postOpactiyDegree="88"
    }else if(opacityDegree==6){
        postOpactiyDegree="99"
    }else if(opacityDegree==7){
        postOpactiyDegree="aa"
    }else if(opacityDegree==8){
        postOpactiyDegree="cc"
    }else if(opacityDegree==9){
        postOpactiyDegree="dd"
    }else{
        postOpactiyDegree="ff"
    }
    opacityParagraph.textContent=opacityDegree
    colorTemp=color;
    color=color+postOpactiyDegree;

})

