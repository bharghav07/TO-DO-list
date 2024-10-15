const ip=document.getElementById("ip");
const uli=document.getElementById("lite");
function addtask(){
    if(ip.value===""){
        alert("enter a task");
    }else{
        let li=document.createElement("li");
        li.innerHTML=ip.value;
        uli.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ip.value='';
    savedata();
}
uli.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("item");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    
});

function savedata(){
    localStorage.setItem("data",uli.innerHTML);
}
function show(){
    uli.innerHTML=localStorage.getItem("data");
}
show();

function cudate(){
    const today=new Date();
    let date=today.getDate();
    let month=today.getMonth();
    let year=today.getFullYear();
    document.getElementById("date").innerHTML=date+"/";
    document.getElementById("month").innerHTML=month+"/";
    document.getElementById("year").innerHTML=year;
}
cudate();
setInterval(() => {
    d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    document.getElementById("hour").innerHTML=h+":";
    document.getElementById("min").innerHTML=m+":";
    document.getElementById("sec").innerHTML=s;

}, 1000);
