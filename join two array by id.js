/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const arr3=arr1.concat(arr2);
    const merged={};

    arr3.forEach((obj)=>{
        const id=obj.id;
        if(!merged[id]){
            merged[id]=obj;
        }else{
            merged[id]={...merged[id],...obj};
        }
    });
    const joinedarray=Object.values(merged);
    joinedarray.sort((a,b)=>a.id-b.id);
    return joinedarray;
};
