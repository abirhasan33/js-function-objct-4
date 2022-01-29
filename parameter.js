function bringSingra(taka){
    console.log('singara er jonno dishe', taka);
    console.log('mama shigara den');
    var singaraPrice = 10;
    var singaraQuantyty = taka / singaraPrice;
    return singaraQuantyty;
}

var many = 90;
var singara = bringSingra(many);
console.log('Ai nen singara', singara);