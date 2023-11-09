/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    console.log(val)
    let test = {
        toBe : function toBe(value){
         console.log(val)   
        if(val === value){
            console.log("if :", val)
            return true
        }else{
            throw Error ("Not Equal")
        }
        
    },

    notToBe : function notToBe(value){
        if(val !== value){
            return true
        }else{
            throw Error ("Equal")
        }
    }
    }

    return test
    
};


//console.log(expect(5).toBe(5)); // true
//console.log(expect(5).notToBe(5)); // throws "Equal"
console.log(expect(5).toBe(null))//expected "Not Equal"
