var globalVariable = 'Global';

function myFunction() {
  let functionVariable = 'Function';
  const constantVariable = 'Constant';

  console.log('Inside function:');
  console.log(globalVariable);
  console.log(functionVariable);
  console.log(constantVariable);

  if (true) {
    let blockVariable = 'Block';
    console.log('Inside block:');
    console.log(globalVariable);
    console.log(functionVariable);
    console.log(constantVariable);
    console.log(blockVariable);
  }

  console.log('After block:');
  console.log(globalVariable);
  console.log(functionVariable);
  console.log(constantVariable);

}

myFunction();

console.log('Outside function:');
console.log(globalVariable);