/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // const t=fn(arr);
    return arr.sort((a,b)=>fn(a)-fn(b));
    
};
