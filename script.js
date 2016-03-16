(function () {
    'use strict';
    
    var el = function (id) { 
        document.getElementById(id + "")
    };
    
    // modell
    var spiller = "X"
    var trekk = new Array(9);
    
    const brett = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    
    
    var oppdater = function(knappTrykket) { 
        console.log("Knapp trykket med id: "knappTrykket);
        settSpiller();
        Lagretrekket
        //vis
         };
    
    el("0").addEventListener("click", function () {
        console.log("Hello Thing 0")
        
    });
        
}) ();