module.exports = function getZerosCount(number, base) {
    var b = base;
    var res = number;
    var n, m, k = 0;
    for ( var i = 2; i <= base; i++ ){
        if ( b % i == 0){
            n = 0;
            while ( b % i == 0 ){
                n++;
                b = Math.floor(b/i);
            }
            m = 0;
            k = number;
            while ( k / i > 0 ){
                m = m + Math.floor( k / i );
                k = Math.floor( k / i );
            }
            res = Math.min( res, Math.floor( m / n ));
        }
    }
    return res;
    // my implementation
}