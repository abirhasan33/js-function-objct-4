// 1. veryable 
var favoriteBook = "4 hour work week";

//2. array 
var bookList = ['poditoning', 'hooked', 'start', 'start with why', 'shoe dog'];
var shoesDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Barind';

bookList.push('Samile book');
bookList.pop();
// console.log(bookList);

// 3. conditional
if(bookList[1] == 'Story Barind'){
    console.log('amar ta soman');
}
else{
    console.log('iam Not shoock');
}

// 4. loop 
// while lop 
var i = 0;
while(i < 7){
    console.log(i);
    console.log('abir hasan');
    i++;
}

// for loop 
for( var i = 0; i < 7; i++){
    console.log(i);
    console.log('babu babu');
}