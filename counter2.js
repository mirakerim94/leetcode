/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let currentValue = init   
    let counter = {
        increment : function increment(){
            currentValue += 1
            return currentValue
        },
        decrement : function decrement(){
            currentValue -= 1
            return currentValue
        },
        reset: function reset(){
            currentValue = init           
            return currentValue 
            
        }

    }
    return counter
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
