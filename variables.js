var globalVariable = 'Global';
const constantVariable = 'Constant1';
function myFunction() {
  let functionVariable = 'Function';
  const constantVariable = 'Constant2';

  console.log('Inside function:');
  console.log(globalVariable);
  console.log(functionVariable);
  console.log(constantVariable);
}

myFunction();

console.log('Outside function:');
console.log(globalVariable);
console.log(constantVariable);