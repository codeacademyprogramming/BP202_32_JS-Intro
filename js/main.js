
// 'use strict'
console.log("Hello, BP202")

// alert("Hello, BP202")

a = 56;

var name1 = "Abbas";

let name2 = "Hikmet";

let str = "Hello "+name2;
str = `Hello ${name2}`;

let num = 15;
let result = num == 5?"besdir":"bes deyil";

console.log(result)

name2 = 45;

name2 = true;

console.log(str)

let nums = [45,"salam",true];


let i=0;
while(i<nums.length){
    console.log(nums[i]);
    i++;
}

for(let i=0;i<nums.length;i++){
    console.log(nums[i])
}


// let browser = "safari";

// switch(browser){
//     case 'chhooredorememememe':
//         alert("Siz Chrome isledirsiniz!");
//         break;
//     case 'edge':
//         alert("Siz edge isledirsiniz!");
//         break;
//     case 'opera':
//         alert("siz Opera isledirsiniz");
//         break;
//     case 'safari':
//         alert('Siz zenginsiniz!');
//         break;
//     default:
//         alert("Siz kasibsiniz")
//         break;
// }

// let nameInput = prompt("Adinizi daxil edin:")
// let checkAge = confirm("Yasiniz 18 ve ya daha yuxaridirmi?")

// console.log("Daxil edilen ad: "+nameInput+" yas 18+?: "+checkAge)


// task 1 - iki eded toplama

// do{
//     var num1 = prompt("Eded 1:")
// }
// while(isNaN(num1))

// do{
//     var num2 = prompt("Eded 2:")
// }
// while(isNaN(num2))


// let sum = Number(num1)+Number(num2);

// alert(`sum=${sum}`)



let arr = [45,10,'salam',true,'sag ol'];

console.log("============")
for(let i=0;i<arr.length;i++){
    if(isNaN(arr[i])){
        continue;
    }

    console.log(arr[i])
}

let fullname = MakeFullname('Hikmet','Abbasov');

alert(`FullName: ${fullname}`)

function MakeFullname(name,surname){
    return name+" "+surname;
}

function Show(){
    console.log('salam')
}


function Sum(...numbers){

    let result = 0;

    for(let i=0;i<numbers.length;i++){
        result+=numbers[i];
    }

    return result;
}
console.log(`sum: ${Sum('salam',6)}`)













