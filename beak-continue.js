// var i = 0;
// while(i < 15){
//     console.log(i);
//     if(i == 5) {
//         break;
//     }
//     i++;
// }

// for( var i = 0; i < 10; i++){
//     console.log(i);
//     if(i > 7) {
//         break;
//     }
// }

var numbers = [54, 35, 21, 78, 98, 23, 101, 45, 67];
// for( i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if( number > 90) {
//         break;
//     }
// }

for(i = 0; i < numbers.length; i++){
    var number = numbers[i];
    console.log(number); 
    if( number > 70){
        continue;
    }
}