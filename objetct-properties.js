var computer = {
    pricr: 2900,
    storags: '156gb',
    processor: 'intel i5',
    color: 'selber'
}
// console.log(computer.pricr);
// console.log(computer.processor);
// computer.storags = '256GB'
// var compterPuprty = computer.storags;
// console.log(compterPuprty);

var priceproptaey = 'pricr';

computer.pricr = 20000;
computer['pricr'] = 23000;
computer[priceproptaey] = 19000;

var storagepropety = 'storags';
computer[storagepropety] = '512GB';

computer.color = 'blue';
computer['color'] = 'red';
console.log(computer);