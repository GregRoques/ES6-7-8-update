// recursion - a function that calls itself

    // when a function is called, it is placed on the top of the "call stack"
        // when a function ends, the compiler will remove (pop)
            // check Call Stack window in Chrome Dev Tools – Source
    
    // Recursive functions continue to push the same function continuously onto the call stack
    // we invoke the same function with different input until we reach the base case
        // the Base Case is the condition when the recursion ends...this is the most important 
        // part of the recursive statement

// ==============================================================================================

// 2 Essential parts of any recursive statement:
    // 1) Base case
    // 2) Different Input

// ==============================================================================================

// ================ Ex:

// function countDown(num){
//     if (num <=0){
//         console.log("BOOM...recursion!");
//         return;
//     }
//     console.log(num)
//     num--;
//     countDown(num)
// }

// countDown(5)

// ================ EX 2:
let k = 0
function sumRange(num){
    k += num
    console.log(k)
    if(num === 1) return 1; //1 is our Base Case
    return num + sumRange(num - 1);

    
    
}

sumRange(3)
    // breakdown:
        // not 1, so...
            // return 3 + sumRange(2) + sumRange(1)