let stampa = document.getElementById("bottone");

const km = document.getElementById("km").value;
const eta = document.getElementById("eta").value;
const prezzoHtml = document.getElementById("prezzoHtml")
const nome = document.getElementById("nome")
const prezzoAlKm = 0.21; 
var prezzo = km.value * prezzoAlKm



stampa.addEventListener("click",
function()
    {
        const km = document.getElementById("km").value;
        const eta = document.getElementById("eta").value;
        const prezzoHtml = document.getElementById("prezzoHtml")
        const nome = document.getElementById("nome")
        const prezzoAlKm = 0.21; 
        prezzo = km * prezzoAlKm;


        if (km & nome != ""){

            if (eta == "minorenne"){
                prezzo = (prezzo - (prezzo * 0.2))
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
            }

            else if (eta == "over60"){
                prezzo = (prezzo - (prezzo * 0.2))
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
            }

            else {
                prezzo = prezzo 
                prezzoHtml.innerHTML = `${prezzo.toFixed(2)} euro`
            }
        }

        else alert ("inserire tutti i dati")
    }

    
)
