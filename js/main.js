let stampa = document.getElementById("bottone");
let annulla = document.getElementById("annulla")

// genero un evento al click di stampa
stampa.addEventListener("click",
function()
    {
        // dichiaro e do valore alle variabili
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

        // controllo che i campi siano tutti compila
        if ((km | nome)!= ""){

            // se è minorenne allora genero prezzo - sconto cp ecc
            if (eta == "minorenne"){
                prezzo = (prezzo - (prezzo * 0.2))
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
                carrozza.innerHTML = Math.floor(Math.random()*15 + 1)
                codiceCp.innerHTML = Math.floor(Math.random()*350 + 1)
                offerta.innerHTML = `offerta per minori`

            }
            // se è over 60 allora genero prezzo - sconto cp ecc
            else if (eta == "over60"){
                prezzo = (prezzo - (prezzo * 0.2))
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
                carrozza.innerHTML = Math.floor(Math.random()*15 + 1)
                codiceCp.innerHTML = Math.floor(Math.random()*350 + 1)
                offerta.innerHTML = `offerta senior`
            }
            // se è maggiorenne allora genero prezzo - sconto cp ecc
            else {
                prezzo = prezzo 
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
                carrozza.innerHTML = Math.floor(Math.random()*15 + 1)
                codiceCp.innerHTML = Math.floor(Math.random()*350 + 1)
                offerta.innerHTML = `offerta standard`
            }
            nomePasseggero.innerHTML = `${nome}`
            // faccio in modo che la seconda section si veda al click
            hidden.style.display='block'
        }
        // se i dati non sono compilati crea un alert
        else {
            alert("inserire tutti i dati richiesti")
        }

    }
)
// un bottone che elimina i valori precedenti inseriti
annulla.addEventListener("click",

    function(){
        let km = document.getElementById("km").value = "";
        let nome = document.getElementById("nome").value = ""
    }
)