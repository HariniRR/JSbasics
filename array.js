var fruits = ['apple', 'banana', 'cherry'];
fruits.push('date');
console.log(fruits);
fruits.pop();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));

//array of objects
var students = [
  { name: 'John',
     age: 40 
    },
  { name: 'Rose',
     age: 21
     },
  { name: 'Bob',
     age: 35
     }
];

console.log(students[0].name);

students.push({ name: 'Jack', age: 21 });
console.log(students);


for (let i = 0; i < students.length; i++) {
  console.log(`Name: ${students[i].name}, Age: ${students[i].age}`);
}
