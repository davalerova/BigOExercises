function foo(array){
  let sum = 0;
  let product = 1;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  for(let i = 0; i < array.length; i++){
    product *= array[i];
  }
  console.log(`${sum}, ${product}`);
}

//¿Cuál es la complejidad de tiempo?
// O(1) + O(1) + O(n) + O(n) + O(1) => O(n)