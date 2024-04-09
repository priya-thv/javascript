/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let row=arr.length/size;
    row=Math.ceil(row);
    const matrix=[];
    let count =0;
    for(let i=0;i<row;i++){
        const c=[];
        for(let j=0;j<size;j++){
            if(count<arr.length){
               c.push(arr[count]);
            }
            count++;
        }
        matrix.push(c);
    }
    return matrix;
};
