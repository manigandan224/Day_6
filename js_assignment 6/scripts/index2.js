let n=String(prompt("enter a name"));
let m=document.getElementById("title");
r=" ";
m.innerHTML+=r+n;
m.style.textAlign="center";
function clock(){
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    let s=today.getSeconds();
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    var t=setTimeout(clock,500);
}
clock();
function toggle(){
let n1=document.getElementById('attr');
n1.classList.toggle('darkmode');
}
