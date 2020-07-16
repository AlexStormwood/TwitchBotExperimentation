const possibleOutcomes = ['heads', 'tails'];

function flipCoin(){
    let result = possibleOutcomes[Math.round(Math.random(0, possibleOutcomes.length-1))];
    return result
}

function flipCoinRepeatedly(count){
    // turn array of possible outcomes into an object to pair it with numeric data
    var results = {};
    possibleOutcomes.forEach(key => results[key] = 0);    

    // repeat the desired action and store its result in the results object
    for (let index = 0; index < count; index++) {
        let result = flipCoin();
        
        // compare result to possible keys in the object
        Object.keys(results).forEach(key => {
            if (result === key) {
                results[key]++;
            }
        })

    }

    return JSON.stringify(results);
}

module.exports = {
    flipCoin,
    flipCoinRepeatedly
}