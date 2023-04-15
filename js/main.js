let stampa = document.getElementById("bottone");

const km = document.getElementById("km").value;
const eta = document.getElementById("eta").value;
const prezzoHtml = document.getElementById("prezzoHtml")
const carrozza = document.getElementById("carrozza")
const nome = document.getElementById("nome").value
const codiceCp = document.getElementById("codice-cp")
const offerta = document.getElementById("offerta")
const nomePasseggero = document.getElementById("nome-passeggero").value
const prezzoAlKm = 0.21; 
var prezzo = km.value * prezzoAlKm



stampa.addEventListener("click",
function()
    {
        const km = document.getElementById("km").value;
        const eta = document.getElementById("eta").value;
        const prezzoHtml = document.getElementById("prezzoHtml")
        const nome = document.getElementById("nome").value
        const offerta = document.getElementById("offerta")
        const codiceCp = document.getElementById("codice-cp")
        const prezzoAlKm = 0.21; 
        prezzo = km * prezzoAlKm;
        const carrozza = document.getElementById("carrozza")
        const nomePasseggero = document.getElementById("nome-passeggero")

        if ((km, nome)!= ""){

            if (eta == "minorenne"){
                prezzo = (prezzo - (prezzo * 0.2))
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
                carrozza.innerHTML = Math.floor(Math.random()*15 + 1)
                codiceCp.innerHTML = Math.floor(Math.random()*350 + 1)
                offerta.innerHTML = `offerta per minori`

            }

            else if (eta == "over60"){
                prezzo = (prezzo - (prezzo * 0.2))
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
                carrozza.innerHTML = Math.floor(Math.random()*15 + 1)
                codiceCp.innerHTML = Math.floor(Math.random()*350 + 1)
                offerta.innerHTML = `offerta senior`
            }

            else {
                prezzo = prezzo 
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
                carrozza.innerHTML = Math.floor(Math.random()*15 + 1)
                codiceCp.innerHTML = Math.floor(Math.random()*350 + 1)
                offerta.innerHTML = `offerta standard`
            }

            nomePasseggero.innerHTML = `${nome}`
        }

        else {
            alert("inserire tutti i dati richiesti")
        }
    }


)
