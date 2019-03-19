const firstArray = [{
  name: "Ivan",
  surname: "Ivanov",
  gender: "male",
  age: 30
},
{
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
}];
const secondArray=[
{
  name: "Ivan",
  surname: "Irvanov",
  gender: "male",
  age: 39
},
{
    name: "Lena",
    surname: "Ivanovach",
    gender: "female",
    age: 29
}
];

function excludeBy(firstArray,secondArray, field){
let filteredArray=[];
firstArray.forEach(function(item){
	let flag = true;
secondArray.forEach(function(secondItem){
	if(item[field]===secondItem[field]){
	flag= false;
		}
})
if(flag){
		filteredArray.push(item);
	  }
}
	return filteredArray;
}
console.log(excludeBy(firstArray,secondArray,"name"));
