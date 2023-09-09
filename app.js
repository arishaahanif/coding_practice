// const codesArray = ["AM", "PM", "TM", "CM", "KM"];


// const array = [
//   {
//     name: "Arial Mark",
//     code: "AM",
//   },
//   {
//     name: "Prime Minister",
//     code: "PM",
//   },
//   {
//     name: "Tommy",
//     code: "TM",
//   },
//   {
//     name: "Cheif Minister",
//     code: "CM",
//   },
//   {
//     code: "Kamel",
//     code: "KM",
//   },
//   {
//     name: "GM",
//     code: "GM",
//   },
//   {
//     name: "Ilite Master",
//     code: "IM",
//   },
//   {
//     name: "Lion",
//     code: "LM",
//   },
// ];
// const arrayIndex = codesArray.map((item, index) => {
//   const data = array.filter(n => n.code === item);
//   console.log(data)
//   return data
// })

// codesArray.every(function (element, index) {
//   console.log(element)
// const data = array.filter(n => n.code === element);
// console.log(data)

// })
// for (let i = 0; i < codesArray.length; i++) {
//   console.log(codesArray[i])


  // const data = array.filter((n,i)=>n.code===codesArray[i])
  //   console.log(data)
  

//   const persons=[{
//     name:'arisha',
//     age:16,
//     skills:'SE'
//   },
//   {
//     name:'ruba',
//     age:18,
//     skills:'medical'
//   },{
//     name:'noor',
//     age:55,
//     skills:'mechanical'
//   },{
//     name:'ayesha',
//     age:90,
//     skills:'BS'
//   },{
//     name:'amna',
//     age:10,
//     skills:'BBA'
//   },
// ]
// const data=persons.filter(n=>n.age>50);
// console.log(data)
// const personItem=data.map(item=>({
//   name:item.name,
//   age:item.age,
//   skills:item.skills,


// }))
// console.log(personItem)



// question start
// const students = [
//   {
//     name: 'Alice',
//     age: 20,
//     grade: 'A',
//   },
//   {
//     name: 'Bob',
//     age: 22,
//     grade: 'B',
//   },
//   {
//     name: 'Charlie',
//     age: 23,
//     grade: 'A',
//   },
//   {
//     name: 'John',
//     age: 23,
//     grade: 'C',
//   },
//   {
//     name: 'Puma',
//     age: 21,
//     grade: 'A',
//   },
//   {
//     name: '',
//     age: 19,
//     grade: 'A',
//   },
//   // ... (more students)
// ];
// const getTopStudents=(value)=>{
//   const topStudent=students.filter(n=>n.age>20&&n.grade==='A');
//   console.log(topStudent,'top')
// }
// getTopStudents(students);
// question end

// question start
// const numbers=[2,3,5,7,8,9];
// function square(val){
//   const squareNumber=numbers.map(number=>number*number);
//   console.log(squareNumber)

// }
// square(numbers)
// question end

// question start
// const names=['arisha','ammar','ruba'];
// function arrayNames(names){
//   const greetings=names.map(item=>`Hello ${item}`);
//   console.log(greetings)
// }
// arrayNames(names)
// question end

// question start
// const celsiusTemp=[10,20,35,44];
// function temperature(val){
//   const fahrenheit=celsiusTemp.map(item=>(item*9/5)+32);
//   console.log(fahrenheit,'fahrenheit')

// }
// temperature(celsiusTemp)
// question end

// question start
// const names=['areesha','ruba','urooj'];
// function upperCase(str){
//   const capitalizaName=str.map(item=>item.charAt(0).toUpperCase()+item.slice(1))
//   console.log(capitalizaName)

// }
// upperCase(names)
// question end

// question start
// const words=['banana','chair','orange','apple'];
// function wordsLength(val){
//   const arrayLength=val.map(item=>item.length);
//   console.log(arrayLength)

// }
// wordsLength(words)
// question end

// question start
// const numbers=[1,2,3,4,5,6,7,8,9,0];
// function EvenNumber(val){
//   const filterNumber=val.filter(number=>number%2===0);
//   console.log(filterNumber,'Even numbers')

// }
// EvenNumber(numbers)
// question end


// question start
// const specifiedLength=5;
// const array=['arisha','ruba','urooj'];
// function arrayLength(val){
// const filterArray=val.filter(item=>item.length>specifiedLength);
// console.log(filterArray)
// }
// arrayLength(array)
// question end

// question start
// const names =['arisha','ruba','urooj'];
// const subString='a';
// const checkString=names.filter(item=>item.includes(subString));
// console.log(checkString)
// question end


// question start
// const userObjects=[
//   {
//   user:'123',
//   paswrd:'abc'
// },
// {
//   adminUser:'648',
//   paswrd:'egh'
// },
// {
//   user:'993',
//   paswrd:'egc'
// },
// {
//   adminUser:'000',
//   paswrd:'hhh'
// },


// ]
// const filterArray=userObjects.filter(n=>n.adminUser);
// console.log(filterArray)
// question end

// question start
// const specifiedYear=2000;
// const books=[
//   {
//   book:'english',
//   publishedYear:1999,
//   author:'abc'

// },
// {
//   book:'maths',
//   publishedYear:2012,
//   author:'bcd'

// },
// {
//   book:'urdu',
//   publishedYear:1998,
//   author:'efg'

// },
// {
//   book:'chemistry',
//   publishedYear:2023,
//   author:'bed'

// },
// ]
// const filterArray=books.filter(n=>n.publishedYear>specifiedYear);
// console.log(filterArray)
// question end


// SPREAD OPERATOR

// question start
// const array=[10,2,3];
// const arrayNumber=[4,6,8];
// const mergeArray=[...array,...arrayNumber];
// console.log(mergeArray)

// const object={
//   name:'arisha',
//   skills:'development',
//   age:21
// }
// question end

// question start
// function objects(val){
// const copiedObject={...val}
// copiedObject.skills='SE'
// console.log(copiedObject)
// console.log(val)
// }
// objects(object)
// question end

// question start
// const array=['arisha','ammar','ruba'];
// function arrayElement(arr,elementToRemove){
//   const removeElement =[...arr];
//   const elementIndex=removeElement.indexOf(elementToRemove);
//   console.log(elementIndex)
//   if(elementIndex != -1){
//     removeElement.splice(1,1);
//     console.log(removeElement)
//   }
//   removeElement.splice(1,1);
//   console.log(removeElement)
// }
// arrayElement(array,'ammar')
// question end


// question start
// const objectOne={
//   namestudents:'areesha',
//   skill:'development in engineering',
//   agestudents:21
// }
// const objectTwo={
//   name:'ammar',
//   skill:"development",
//   age:25
// }
// function object(objectOneVal,objectTwoVal){
//   const mergeObj={...objectOneVal,...objectTwoVal};
//   console.log(mergeObj)

// }
// object(objectOne,objectTwo)
// question end

// question start
// const skill='SE'
// const objectOne=[{
//     namestudents:'areesha',
//     skill:'development in engineering',
//     agestudents:21
//   },
//  {
//     name:'ammar',
//     skill:"development",
//     age:25
//   },
//   {
//     name:'ruba',
//     skill:"BBA",
//     age:24
//   },
//   {
//     name:'tena',
//     skill:"SE",
//     age:23
//   },
//  ]
//  function allObj(objectOne){
//   const filterObj=objectOne.filter(item=>item.skill==='SE');
//   console.log(...filterObj)

//  }
//  allObj(objectOne)
// question end