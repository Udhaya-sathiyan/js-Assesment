const head = document.querySelector(".header");
const container=document.querySelector(".container");
const addBox=document.getElementById("addBox");
const removeBox=document.getElementById("removeBox");
const showBoxCount=document.getElementById("showBoxCount");
const linkBut=document.getElementById("link");
const showcontent=document.getElementById("showcontent");
showcontent.addEventListener("click",()=>{
    alert(head.textContent);
})
let count=0;
addBox.addEventListener("click",()=>{
    const div=document.createElement("div");
    div.textContent="NewBox";
    div.classList.add("box-style");
    container.appendChild(div);
    count++
})

removeBox.addEventListener("click",()=>{
     let lastchild=document.querySelector(".box-style:last-child");
     container.removeChild(lastchild);
     count--
})

showBoxCount.addEventListener("click",()=>{
    alert(count);
})

linkBut.addEventListener("click",()=>{
    const newelement=document.createElement("a");
    newelement.textContent="Hi there";
    newelement.href="https://en.wikipedia.org/wiki/Muniba_Mazari";
    container.appendChild(newelement);
})













