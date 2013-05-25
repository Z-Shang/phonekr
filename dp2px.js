function calcpx(){
var dp=document.getElementById("dp");
var pxl=document.getElementById("pxl");
var pxm=document.getElementById("pxm");
var pxh=document.getElementById("pxh");
var pxxh=document.getElementById("pxxh");
var pxxxh=document.getElementById("pxxxh");
pxl.value = dp.value * 3 / 4;
pxm.value = dp.value * 1;
pxh.value = dp.value * 3 / 2;
pxxh.value = dp.value * 2;
pxxxh.value = dp.value * 3;
}
function cl(){
var dp=document.getElementById("dp");
var pxl=document.getElementById("pxl");
var pxm=document.getElementById("pxm");
var pxh=document.getElementById("pxh");
var pxxh=document.getElementById("pxxh");
var pxxxh=document.getElementById("pxxxh");
dp.value="";
pxl.value="";
pxm.value="";
pxh.value="";
pxxh.value="";
pxxxh.value="";
}
function calcdp(idtf, dpi){
var dp=document.getElementById("dp");
var pxl=document.getElementById("pxl");
var pxm=document.getElementById("pxm");
var pxh=document.getElementById("pxh");
var pxxh=document.getElementById("pxxh");
var pxxxh=document.getElementById("pxxxh");
dp.value=idtf.value * 160 / dpi;
}
function cz(){
var dp=document.getElementById("dp");
if((dp.value - Math.floor(dp.value)) > 0.5){
dp.value=Math.ceil(dp.value);
}else if((dp.value - Math.floor(dp.value)) < 0.5){
dp.value=Math.floor(dp.value);
calcpx();
}
}
