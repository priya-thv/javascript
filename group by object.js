/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj={};
    this.forEach((el)=>{
        const key=fn(el);
        if(!obj.hasOwnProperty(key)){
            obj[key]=[];
        }
        obj[key].push(el);
    });

    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
