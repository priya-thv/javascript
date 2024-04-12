/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const arr=[];
    let count=0;
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (!arr.hasOwnProperty(key)) {
            count++;
            arr[key] = fn(...args);
        }
        return arr[key];
    }
    
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
