function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
}
let arr = [1, 2, 3, 4, 5];
shuffleArray(arr)
console.log("done again")//cm Emiljano
