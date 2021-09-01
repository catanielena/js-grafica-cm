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


function createGrid(cellNumb, getFieldId, cellClass, addClassToCell) {
    for (let i = 0; i< cellNumb; i++) {
        for (let j = 1; j<= cellNumb; j++) {        
            document.getElementsByClassName("row")[i].innerHTML += `<div class=${cellClass}>${i}</div>`;
        }  
    }   
    
    for (let k = cellNumb + 1; k <= 10; k++) {
        document.getElementsByClassName("row")[k].classList.add("display--none");
    }
    getFieldId.addEventListener("click",
    function(event) {
        console.log(event.target.innerHTML);
        event.target.classList.toggle(addClassToCell);
    }
); 
}
// Celle per riga
var userNumb = parseInt(prompt(`Definisci il numero di celle di cui sarà composto il campo da gioco 
(minimo 1, massimo 100)`));
// Controllo input utente
while (userNumb<1 || userNumb>100 || isNaN(userNumb)) {
    userNumb = parseInt(prompt(`Errore! Definisci il numero di celle di cui sarà composto il campo da gioco 
(minimo 1, massimo 100)`));   
}

var fieldId = document.getElementById("field");
var cellClass = "cell";
var addClassToCell = "bg--red";
createGrid(userNumb, fieldId, cellClass, addClassToCell);

