let mes= new Date(), elmes=0, año=mes.getFullYear(), dia=mes.getDate();
let meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
elmes=meses[mes.getMonth()]


document.getElementById("div1").innerHTML= 'Mes: '+ elmes+" Año: "+año+' Dia: '+dia

let visitasActuales= localStorage.getItem("visitas");

if(visitasActuales){
  let aumento= parseInt(visitasActuales)+1;
  document.getElementById("visitas").innerHTML= aumento;
  localStorage.setItem("visitas", aumento);
  
}
else{
  localStorage.setItem("visitas", 1);
  document.getElementById("visitas").innerHTML= 1;
}