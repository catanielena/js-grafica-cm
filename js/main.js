// *
// * La funzione aggiunge tanti elementi quanto il valore di "cellNumb" alla griglia "getFieldId", 
// * stabiliti la classe css delle celle "cellClass".
// * Al click l'aspetto delle celle varia in base alla clasae "addClassToCell"
// *
// function createGrid(cellNumb, getFieldId, cellClass, addClassToCell) {
//     for (let i = 1; i<= cellNumb; i++) {
//         getFieldId.innerHTML += `<div class=${cellClass}>${i}</div>`;
//     }   
    
//     getFieldId.addEventListener("click",
//     function(event) {
//         console.log(event.target.innerHTML);
//         event.target.classList.toggle(addClassToCell);
//     }
// ); 
// }

// *
// * Dato l'array e l'elemento da cercare, restituisce true se l'elemento è resente altrimenti false
// *


function createGrid(cellNumb, getFieldId, cellClass, addClassToCell) {
    var n = 1;
    for (let i = 0; i< cellNumb; i++) {
        for (let j = 1; j<= cellNumb; j++) {        
            document.getElementsByClassName("row")[i].innerHTML += `<div class=${cellClass}><span>${n}</span></div>`;
            n++;
        }  
    }   
    
    getFieldId.addEventListener("click",
    function(event) {
        console.log(event.target.innerHTML);
        event.target.classList.toggle(addClassToCell);
    }
    ); 

    var row = document.getElementsByClassName("row");
    for (let k = cellNumb; k <= 10; k++) {
        console.log(row[k]);
        row[k].style.display = "none";
    }
}


// Celle per riga
var userNumb = parseInt(prompt(`Definisci il numero di celle per riga di cui sarà composto il campo da gioco 
(minimo 1, massimo 10)`));
// Controllo input utente
while (userNumb<1 || userNumb>10 || isNaN(userNumb)) {
    userNumb = parseInt(prompt(`Errore! Definisci il numero di celle per riga di cui sarà composto il campo da gioco 
(minimo 1, massimo 10)`));   
}

var fieldId = document.getElementById("field");
var cellClass = "cell";
var addClassToCell = "bg--red";
createGrid(userNumb, fieldId, cellClass, addClassToCell);

