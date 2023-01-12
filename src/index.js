module.exports = function reverse (n) {
    let nModule = String(Math.abs(n));
    let reverseNumber = '';
    for (let i = 0; i < nModule.length; i++) {
       reverseNumber = `${nModule[i]}${reverseNumber}`;
    }
    return Number(reverseNumber);
}

 

