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
        Lagretrekket(knappTrykket)
        //vis
         };
    
    var settSpiller = function () {
        return (spiller === "0") ? spiller = X : spiller = "0";
    };
    
    var lagreTrekk = function (knappTrykket) {
        return trekk[knappTrykket] = spiller;
    };
    
    var vis = function() {
        tegnMerkerPaaBrattet();
        
    };
    
    var tegnMerkerPaaBrettet = function () {
        brett.forEach(tegnMerke);
        
    };
    
    var tegnMerke = function (felt) {
        el(felt.innerHTML = trekk[felt];
           
    
    el("0").addEventListener("click", function () {
        console.log("Hello Thing 0")
        
    });
        
}) ();