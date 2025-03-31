import {HashMap} from "./hashMap.js"

const list = new HashMap();

// list of 24
// list.set('apple', 'red');         // 1
// list.set('banana', 'yellow');     // 2
// list.set('grape', 'purple');      // 3
// list.set('orange', 'orange');     // 4
// list.set('lemon', 'yellow');      // 5
// list.set('lime', 'green');        // 6
// list.set('blueberry', 'blue');    // 7
// list.set('strawberry', 'red');    // 8
// list.set('cherry', 'dark red');   // 9
// list.set('watermelon', 'green');  // 10
// list.set('peach', 'peach');       // 11
// list.set('plum', 'dark purple');  // 12
// list.set('kiwi', 'brown');        // 13
// list.set('mango', 'orange');      // 14
// list.set('pineapple', 'golden');  // 15
// list.set('pear', 'light green');  // 16
// list.set('coconut', 'brown');     // 17
// list.set('pomegranate', 'red');   // 18
// list.set('blackberry', 'black');  // 19
// list.set('raspberry', 'pink');    // 20
// list.set('cranberry', 'red');     // 21
// list.set('fig', 'purple');        // 22
// list.set('papaya', 'orange');     // 23
// list.set('dragonfruit', 'pink');  // 24

// list of 48
// list.set('apple', 'red');          // 1
// list.set('banana', 'yellow');      // 2
// list.set('grape', 'purple');       // 3
// list.set('orange', 'orange');      // 4
// list.set('lemon', 'yellow');       // 5
// list.set('lime', 'green');         // 6
// list.set('blueberry', 'blue');     // 7
// list.set('strawberry', 'red');     // 8
// list.set('cherry', 'dark red');    // 9
// list.set('watermelon', 'green');   // 10
// list.set('peach', 'peach');        // 11
// list.set('plum', 'dark purple');   // 12
// list.set('kiwi', 'brown');         // 13
// list.set('mango', 'orange');       // 14
// list.set('pineapple', 'golden');   // 15
// list.set('pear', 'light green');   // 16
// list.set('coconut', 'brown');      // 17
// list.set('pomegranate', 'red');    // 18
// list.set('blackberry', 'black');   // 19
// list.set('raspberry', 'pink');     // 20
// list.set('cranberry', 'red');      // 21
// list.set('fig', 'purple');         // 22
// list.set('papaya', 'orange');      // 23
// list.set('dragonfruit', 'pink');   // 24
// list.set('passionfruit', 'yellow'); // 25
// list.set('lychee', 'white');       // 26
// list.set('gooseberry', 'green');   // 27
// list.set('jackfruit', 'yellow');   // 28
// list.set('persimmon', 'orange');   // 29
// list.set('mulberry', 'dark purple'); // 30
// list.set('boysenberry', 'maroon'); // 31
// list.set('elderberry', 'black');   // 32
// list.set('tamarind', 'brown');     // 33
// list.set('starfruit', 'yellow');   // 34
// list.set('cantaloupe', 'orange');  // 35
// list.set('honeydew', 'light green'); // 36
// list.set('guava', 'light green');  // 37
// list.set('soursop', 'white');      // 38
// list.set('salak', 'brown');        // 39
// list.set('durian', 'yellow');      // 40
// list.set('miraclefruit', 'red');   // 41
// list.set('marionberry', 'black');  // 42
// list.set('cherimoya', 'green');    // 43
// list.set('feijoa', 'green');       // 44
// list.set('ackee', 'red');          // 45
// list.set('jabuticaba', 'dark purple'); // 46
// list.set('rambutan', 'red');       // 47
// list.set('sapodilla', 'brown');    // 48

// trigger limit
// -

// console test
console.log(list.entries());
console.log(list.keys().length);
list.arrayLength();
list.displayArray();
console.log(list.get('ice-apple'));
console.log(list.has('ice-apple'));
console.log(list.remove('ice-apple'));
list.arrayLength();
console.log(list.keys().length);
console.log(list.length());
// list.clear();
console.log(list.keys());
console.log(list.values());
// list.displayArray();
