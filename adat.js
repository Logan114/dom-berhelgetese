const CIPOLISTA = [
    {
        tipus:"Nike",
        szin:"fehér",
        meret:[38,39,40,41,42,46],
        ar:34000
    },
    {
        tipus:"Gucccsi papucs",
        szin:"fekete",
        meret:[38,39,40,41,42,46],
        ar:169900
    },
    {
        tipus:"Mokaszin",
        szin:"piros",
        meret:[38,39,40,41,42,46],
        ar:69100
    }
]
console.log(CIPOLISTA[1].ar)
console.log(CIPOLISTA[0].meret[1])
function listakonzolrair(lista){

    for (let i = 0; i<CIPOLISTA.length; i++){
        console.log(lista[i].tipus)
        console.log("en bloc a lista type ja",typeof(CIPOLISTA[i]))
        console.log("meret type ja",typeof(CIPOLISTA[i].meret))
        console.log("szin type ja",typeof(CIPOLISTA[i].szin))
        console.log("tipus",typeof(CIPOLISTA[i].tipus))
    }
}
const AL=document.getElementById("al")
let txt ='<div class="flex-container">'
let cim = '<img src="al-bundy-2.jpg" alt="">'
AL.innerHTML=cim

const CIPOKelem = document.getElementById("cipo")
let randomDecimal
for (let index = 0; index<CIPOLISTA.length;index++){
    
    txt +=`<div class="termek${index}"> <h3> Tipus: ${CIPOLISTA[index].tipus}</h3> <p>${CIPOLISTA[index].szin}</p> <p>${CIPOLISTA[index].ar}</p></div>`
    
}
randomDecimal = Math.random()
const randomInRange = randomDecimal * 5;
const randomNumber = Math.floor(randomInRange) + 1;
if (randomNumber === 1){
    cim = '<h1> <div class="Csanel">CSAKMOSTCSAKNEKED EKSZLUZIV GUCCCSIVUTTON CSHÁNEL MEZŐGAZDASÁGI TORNACIPŐ</div></h1>'
    cim += '<img src="gumicsizma.jpeg" alt=""></img>'
    AL.innerHTML=cim
}
CIPOKelem.innerHTML += txt

function legdragabb(lista){
    let legdragabb_ar =0;
    let legdragabb_index =0;
    for (let x=0; x<lista.length;x++){
        if (lista[x].ar>legdragabb_ar){
            legdragabb_ar = lista[x].ar
            legdragabb_index = x
        }
    }
    console.log("A legdrágább cipő: ",lista[legdragabb_index].tipus, lista[legdragabb_index].ar,"ft")
    }
legdragabb(CIPOLISTA)
function osszegzes(lista){
    
    var vegosszeg = 0;
    for (let i = 0; i < lista.length; i++){
        vegosszeg += lista[i].ar;

    }
    console.log(vegosszeg, "ft")
}
osszegzes(CIPOLISTA)
const buttonElem = document.querySelectorAll("button")[0]
buttonElem.addEventListener("click",katt)
console.log(buttonElem)
function katt(){
    alert("ááááááááááááááááááá")
    
}