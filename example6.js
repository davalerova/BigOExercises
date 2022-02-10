function reverse(array){
  for(let i = 0; i < array.length / 2; i++){
    let other = array.length - i - 1;
    let temp = array[i];
    array[i] = array[other];
    array[other] = temp;
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n/2) + O(1) + O(1) + O(1) + O(1) => O(n)