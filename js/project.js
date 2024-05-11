const hamburger = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");


hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
});

window.addEventListener('click', e=>{
    if(menu.classList.contains("spread") && e.target !=  menu && e.target != hamburger ){

            menu.classList.toggle("spread")

    }

});



/* matematicas*/
let boton = document.getElementById("bouton");
let respuesta = document.getElementById("respuesta");

boton.addEventListener("click", darresultado);

function darresultado(){

/* transporte */


var radios = document.getElementsByName('option');
var valorSeleccionado;

    // Encontrar el valor seleccionado
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            valorSeleccionado = parseFloat(radios[i].value);
            break;
        }
    }

let kilome = parseFloat(document.getElementById("kilome").value);
let semmm = parseFloat(document.getElementById("semmm").value);
let rsemm = semmm*52;
let avionanua = parseFloat(document.getElementById("avionanua").value);
let ravioanua = avionanua*0.32;
let millas = parseFloat(document.getElementById("millas").value);
let totaltranspor = valorSeleccionado*kilome*rsemm*ravioanua*millas;
    
/* ENERGIA */

let kwh = parseFloat(document.getElementById("kwh").value);
let rkwh = (0.69 * kwh);
let klm = parseFloat(document.getElementById("klm").value);
let rklm = (klm * 2.94)*12;
let kls = parseFloat(document.getElementById("kls").value);
let rkls = (kls*0.112)*(52*19);
let klsl = parseFloat(document.getElementById("klsl").value);
let rklsl = (klsl*0.112)*(52*35);

let totalenergy = rkwh + rklm + rkls + rklsl;

/*Comida*/

let cr =  parseFloat(document.getElementById("cr").value);
let rcr = (cr * 70.9)*52;

let cd = parseFloat(document.getElementById("cd").value);
let rcd = (cd * 39.7)*52;

let ma = parseFloat(document.getElementById("ma").value);
let rma = (ma*26.9)*52 

let qe = parseFloat(document.getElementById("qe").value);
let rqe = (qe*23.9)*52;

let pes = parseFloat(document.getElementById("pes").value);
let rpes = (pes*13.6)*52;

let ci = parseFloat(document.getElementById("ci").value);
let rci = (ci*28.8)*52;

let chn = parseFloat(document.getElementById("chn").value);
let rchn = (chn*20.6)*52;

let hue = parseFloat(document.getElementById("hue").value);
let rhue = (hue*4.4)*52;

let arr = parseFloat(document.getElementById("arr").value);
let rarr = (arr*3.9)*52;

let lv = parseFloat(document.getElementById("lv").value);
let rlv = (lv*3.7)*52;

let to = parseFloat(document.getElementById("to").value);
let rto = (to*2.3)*52;

let vn = parseFloat(document.getElementById("vn").value);
let rvn = (vn*1.7)*52;

let esp = parseFloat(document.getElementById("esp").value);
let resp = (esp*1.7)*52;

let pan = parseFloat(document.getElementById("pan").value);
let rpan = (pan*0.9)*52;

let ban = parseFloat(document.getElementById("ban").value);
let rban = (ban*0.9)*52;

let pata = parseFloat(document.getElementById("pata").value);
let rpata = (pata*0.2)*52;

let totalcomida = rcr + rcd + rma + rqe + rpes + rci + rchn + rhue + rarr + rlv + rto + rvn + resp + rpan + rban + rpata;

/*Ropa*/

let ri = parseFloat(document.getElementById("ri").value);
let rri = (ri*1.37)*12;

let cs = parseFloat(document.getElementById("cs").value);
let rcs = (cs*4.9)*12;

let zc = parseFloat(document.getElementById("zc").value);
let rzc = (zc*8.36)*12;

let cs2 = parseFloat(document.getElementById("cs2").value);
let rcs2 = (cs2*10.20)*12;

let js = parseFloat(document.getElementById("js").value);
let rjs = (js*24.65)*12;

let vda = parseFloat(document.getElementById("vda").value);
let rvda = (vda*49.8)*12;

let vs = parseFloat(document.getElementById("vs").value);
let rvs = (vs*48.4)*12;

let as = parseFloat(document.getElementById("as").value);
let ras = (as*62.25)*12;

let cda = parseFloat(document.getElementById("cda").value);
let rcda = (cda*4.54)*12;

let czi = parseFloat(document.getElementById("czi").value);
let rczi = (czi*11.21)*12;

let zpd = parseFloat(document.getElementById("zpd").value);
let rzpd = (zpd*16.35)*12;

let cda2 = parseFloat(document.getElementById("cda2").value);
let rcda2 = (cda2*11.04)*12;

let pdd = parseFloat(document.getElementById("pdd").value);
let rpdd = (pdd*0.8)*12;

let zto = parseFloat(document.getElementById("zto").value);
let rzto = (zto*12.50)*12;

let pv = parseFloat(document.getElementById("pv").value);
let rpv = (pv*21.60)*12;

let totalropa = rri + rcs + rzc + rcs2 + rjs + rvda + rvs + ras + rcda + rczi + rzpd + rcda2 + rpdd + rzto + rpv;

let Todito = totaltranspor + totalcomida + totalenergy + totalropa;
let Todito2 = (Todito * 0.001)/1000;
respuesta.innerHTML = "El resultado es: "; 
dato.innerHTML = Todito2.toFixed(6) + " TON CO2";


if (!kilome || !semmm || !radios || !valorSeleccionado || !avionanua || !millas || !kwh || !klm || !kls || !klsl || !cr || !cd || !ma || !qe || !pes || !ci || !chn || !hue || !arr || !lv || !to || !vn || !esp || !pan || !ban || !ban || !pata || !ri || !cs || !zc || !cs2 || !js || !vda || !vs || !as || !cda || !czi || !zpd || !cda2 || !pdd || !zto || !pv) {
    alert("Por favor, complete todos los campos.");
    event.preventDefault();
}

}

function limpiarInputs() {
    var inputs = document.querySelectorAll('input[type="number"]');

    inputs.forEach(function(input) {
        input.value = '';
    });
}