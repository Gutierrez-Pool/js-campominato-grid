// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità.


const gridElement = document.querySelector("#grid");

const startButton = document.querySelector("#start-button");

startButton.addEventListener("click",
    function() {

        for (let i = 1; i <= 100; i++) {
        
            const newElement = document.createElement("div");
        
            newElement.innerText = i;
            newElement.classList.add ("square");
        
            
            gridElement.append(newElement);
            
            // Colore
            newElement.addEventListener ("click", function () {
                
                this.classList.toggle ("active");
                
                
                console.log (newElement);
            })
        } 
    }
    )
    