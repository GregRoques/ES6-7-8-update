const reverse = (word) =>{

    let recursiveLength = word.length - 1
    let initialArray = word.split("")
    // console.log(initialArray)
    let backwardsWord = []

    const recursiveReversal = (count) =>{
        if (count<0) return backwardsWord.join("");
        backwardsWord.push(initialArray[count]);
        recursiveReversal(count-1);
    }
    recursiveReversal (recursiveLength);
    console.log(backwardsWord.join(""))
}

reverse("awesome")

// =====================================================================================================================

const isPalindrome = (word) =>{

    let recursiveLength = word.length - 1
    let initialArray = word.split("")
    // console.log(initialArray)
    let backwardsWord = []

    const recursiveReversal = (count) =>{
        if (count<0) return backwardsWord.join("");
        backwardsWord.push(initialArray[count]);
        recursiveReversal(count-1);
    }
    recursiveReversal (recursiveLength);
    console.log(backwardsWord.join("") === word)
}

isPalindrome("tacocat")

// =====================================================================================================================

const someRecursive = (myArray,myFunction) => {

    if(myArray.length === 0){ 
        console.log(false)
        return false;
    }
    if(myFunction(myArray[0])){
        console.log(true);
        return true;
    }
    someRecursive(myArray.slice(1),myFunction)
}

const isOdd = val => val % 2 !==0;

someRecursive([4,6,8], isOdd)

// isOdd(3)


// =====================================================================================================================

var newArray = [];
const flatten = (arr) => {
    if (arr.length === 0) return newArray;
        let num = arr.shift();
    if(Array.isArray(num)){
        arr.push(...num)
    } else {
        newArray.push(num)
    }
    flatten(arr)
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])

console.log(newArray)
    


