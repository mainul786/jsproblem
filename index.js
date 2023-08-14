var dec = 12;
dec = 35;
// console.log(dec);

// string, number, boolean, null, undefine

// primitive- string, number, boolean, null, undefine etc
// non-primitive:-- array, object, function

var num = 20;
var num2 = 10;
var result = num + num2;
var result = num - num2;
var result = num * num2;
var result = num / num2;
console.log(result);

// +=, -=, *=, /=;

var numbers = [89, 78, 88, 45, 26, 78, 21, 36];
console.log(numbers.length);

for ( var i = 0; i < numbers.length; i++){
var number = numbers[i];
console.log(number);
}

console.log(numbers[8]);

numbers[2] = 100;
console.log(numbers);

console.log(numbers.indexOf(36));

numbers.push(255);
console.log(numbers);
numbers.pop();
console.log(numbers);

numbers.unshift(11);
console.log(numbers);

numbers.shift();
console.log(numbers);

var amount = 10000;
if(amount > 80000){
    console.log('ami mac kinbo!');
} else if(amount > 60000){
    console.log('gaming laptop kinbo');
} else if (amount > 40000){
    console.log('lenovo yoga kinbo!!');
} else if (amount > 20000){
    console.log('poran laptop kinbo!!');
} else {
console.log('Mobile diye Kaj chalabo!!');
}

var num = 0;

while ( num < 10){
    console.log('aske amar monvalo nei!!', num);
    num++;
}

var n = 98;
for (var i = 58; i <= n ; i++){
    console.log(i);
}

var even = 456;
for ( var i = 412; i < even; i+=2){
    console.log(i);
}

var nu = 412;
while (nu < 456){
    console.log(nu);
    nu+=2;
}

var odd = 581;

while (odd < 623){
    console.log(odd);
    odd+=2;
}

var oddd = 623;
for (var i = 581; i < oddd; i+=2){
    console.log(i)
}

var learn = ['variable', 'variableType', 'dataType', 'forLoop', 'WhileLoop', 'if-else', 'parseInt', 'parseFloat', 'toFixed', 'array'];
for (var i =0; i< learn.length; i++){
    var topic = learn[i];
    console.log(topic);
}

var mobile = ['Hitech', 'Lenevo', 'Lava', 'samsung', 'vivo', 'infinix'];
var i = 0;
while( i < mobile.length){
    var phone = mobile[i];
    console.log(phone);
    i++;
}

var n = 86;
for (var i = 30; i <= n; i++){
console.log(i);
if( i > 44){
    break;
}
}

var books = [50, 55, 68, 78, 90, 150, 225, 198, 200, 236, 866, 1852, 231];
for (var i = 0; i < books.length; i++){
    var book = books[i]
    if(book > 200){
        continue;
    }
    console.log(book)
}