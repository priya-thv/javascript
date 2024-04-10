/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const t=this.length
    if(t===0){
        return -1;
    }
    return this[t-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
