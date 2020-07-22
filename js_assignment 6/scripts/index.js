let color=document.getElementById('attr');
let colors=['blue','red','yellow','black','powderblue'];
setInterval(()=>{
   let n=Math.floor(Math.random()*colors.length);
   let selectcolor=colors[n];
   color.style.backgroundColor=selectcolor;
},3000);