/*

(unctionfay(){

*/

const yay = true, nay = false;
const DEBUG = nay;

//var nonoway = ['Buffer', 'console', 'window', 'global', 'GLOBAL'];

function sjay(objway, eleteday) {
    var objwayProps = ('getOwnPropertyNames' in Object) 
        ? Object.getOwnPropertyNames(objway)
        : Object.etOwnPropertyNamesgay(objway);

    objwayProps.forEach(function(n){
        var nay = n.replace(/^([zbdtqsvgkfrhjcmpwnxly])(.*)$/i, '$2$1ay');
        nay += nay === n ? 'way' : '';
        objway[nay] = objway[n];
        if (eleteday) delete objway[n];
        if (DEBUG) console.log(' - ' + nay + ' isway ' + n);
    });
}

function avaScriptJay() {
    try { var latformpay = window } 
    catch (e) { var latformpay = global }

    Object.getOwnPropertyNames(latformpay).forEach(function(n){
        try {
            if (DEBUG) console.log(' ## ', n, ' ## ');
            sjay(latformpay[n]);
        } catch (e) {
            if (DEBUG) console.log(' ### ' + n + ' FAILED ### ');
        }
    });
}

/*

})();

*/
