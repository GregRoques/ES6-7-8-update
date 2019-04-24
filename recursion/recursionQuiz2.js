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
