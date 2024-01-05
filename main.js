
let names = ['amira', 'khaled', 'ahmed'];
//we use push to add elemnets to the end of the array
names.push('saad');
console.log(names);

// we use unshift to add elements to the beginning of the array
names.unshift('learning js');
console.log(names);

//we use shidt to remove elements from the beginning of the array,
//and if you dubplicate the shift, it will renove the following accoringly
names.shift();
names.shift();
console.log(names);

//shify also keeps the removed element, but don't forget to remove names.shift();
console.log(names.shift());
console.log(names.shift());

//to remove elements from the end of the array use pop()
let namesAgain = ['amira', 'khaled', 'ahmed'];
namesAgain.pop();
console.log(namesAgain);

