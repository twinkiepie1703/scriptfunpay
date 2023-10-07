jQuery.noConflict();
(function() {
    'use strict';
 
     var elems= $(".btn.btn-default.btn-block.js-lot-raise");
     $(elems[0]).click();

     var checkExist = setInterval(function() {
        var elementsNew=$('.btn.btn-primary.btn-block.js-lot-raise-ex');
        if (elementsNew.length) {
            elementsNew[0].click();
           clearInterval(checkExist);
        }
     }, 100);
            
      
function set () {window.location.reload();
}

setTimeout(set,300000);

    var elems2 = document.getElementsByClassName("tc-item warning");
    function set1() {
}

setTimeout(set1, 2000);

})();
