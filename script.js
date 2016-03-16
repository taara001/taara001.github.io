(function () {
    'use strict';
    
    var el = function (id) { 
    document.getElementById(id + "")
    }
    
    el("0").addEventListener("click", function () {
        console.log("Hello Thing 0")
        
    });
        
}) ();