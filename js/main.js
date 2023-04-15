let stampa = document.getElementById("bottone");
let annulla = document.getElementById("annulla")

// var km = document.getElementById("km").value;
// var eta = document.getElementById("eta").value;
// var prezzoHtml = document.getElementById("prezzoHtml")
// var carrozza = document.getElementById("carrozza")
// var nome = document.getElementById("nome").value
// var codiceCp = document.getElementById("codice-cp")
// var offerta = document.getElementById("offerta")
// var nomePasseggero = document.getElementById("nome-passeggero").value
// let prezzoAlKm = 0.21; 
// var prezzo = km.value * prezzoAlKm
// let hidden = document.getElementById("hidden-section")


stampa.addEventListener("click",
function()
    {
        let km = document.getElementById("km").value;
        let eta = document.getElementById("eta").value;
        let prezzoHtml = document.getElementById("prezzoHtml")
        let nome = document.getElementById("nome").value
        let offerta = document.getElementById("offerta")
        let codiceCp = document.getElementById("codice-cp")
        let prezzoAlKm = 0.21; 
        prezzo = km * prezzoAlKm;
        let carrozza = document.getElementById("carrozza")
        let nomePasseggero = document.getElementById("nome-passeggero")
        let hidden = document.getElementById("hidden-section")

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
            hidden.style.display='block'
        }

        else {
            alert("inserire tutti i dati richiesti")
        }

    }

    

)

annulla.addEventListener("click",

    function(){
        let km = document.getElementById("km").value = "";
        let nome = document.getElementById("nome").value = ""
    }
)