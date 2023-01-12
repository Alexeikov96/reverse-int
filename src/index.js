module.exports = function reverse (n) {
    let nModule = String(Math.abs(n));
    let reverseNumber = Number(nModule.split('').reverse().join(''));
    
    return reverseNumber;
}

 

