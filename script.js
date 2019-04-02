const canvas = document.getElementById("canvas1");
let h = canvas.height = canvas.style.height = window.innerHeight;
let w = canvas.width = canvas.style.width = window.innerWidth;

setInterval( maintainCanvas , 40);
function maintainCanvas(){
  h = canvas.height = canvas.style.height = window.innerHeight;
  w = canvas.width = canvas.style.width = window.innerWidth;
}

let glowMax = [], glowMin = [], i= [], gRadius = [],quantityff = 30;
let x = [],y = [],ffcolor = [];

for(let j = 0; j < quantityff; j++) {
  i[j] = 0.1 *j ; gRadius[j] = glowMax[j] = 12 - Math.ceil(j/20);
  glowMin[j] = Math.ceil(glowMax[j]/2); 
  ffcolor[j] = "rgb(222, 255, 132)"/* `hsl(${Math.floor(Math.random()*360)},${Math.floor(Math.random()*100)}%,${Math.floor(Math.random()*100)}%)` */;
  }


for(let j = 0; j <quantityff; j++) {
setTimeout ( () => {

x[j] = Math.ceil(Math.random() * w) ;y[j] = Math.ceil(Math.random() * h) ;

setInterval( () => {
  if (x[j] >= 0) x[j] += Math.floor(Math.random() * 2.3 ) -1 ;

  x[j]= (x[j] + w)%w;

  if (y[j] >= 0) y[j] += Math.floor(Math.random() * 2.3 ) -1 ;
    
  y[j]= (y[j]+h)%h;

  action(x[j],y[j],j)}, 40)}, 400*j);

}


function action( x1 , y1, j ) {

let jiggly = canvas.getContext("2d");

let jglGrad = jiggly.createRadialGradient(x1,y1,0,x1,y1,Math.ceil(gRadius[j]));

jglGrad.addColorStop(0,ffcolor[j]);
//jglGrad.addColorStop(0.5,"yellow");
jglGrad.addColorStop(1,"transparent");

if(gRadius[j] <= glowMin[j]){
jglGrad.addColorStop(0,"transparent");
//jglGrad.addColorStop(0.5,"transparent");
}

jiggly.fillStyle = jglGrad;
jiggly.fillRect(x1-Math.ceil(gRadius[j]),y1-Math.ceil(gRadius[j]),x1+Math.floor(gRadius[j]),y1+Math.floor(gRadius[j]));

gRadius[j] += i[j];
if(gRadius[j] >= glowMax[j]) i[j]= -0.3 ;
if(gRadius[j] < 0) i[j] = +0.2;
}
