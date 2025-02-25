function fibsRec(n, arr = [], pos = 0) {
  console.log("This is printed recursively!");
  // se a posição, que a cada vez que a função é chamada aumenta +1, chegar à n (que é o número utilizado para chamar a quantidade de vezes que a função fibonacci deve ser chamada a partir do input do usuário) o caso base dispara retornando o array com a quantidade n de posições no array
  if (pos >= n) {
    return arr; 
  }

  if (pos == 0 || pos == 1) {
    arr.push(pos);
  } else {
    const fib = arr[pos - 1] + arr[pos - 2];
    arr.push(fib);
  }

  return fibsRec(n, arr, pos + 1);
}

console.log(fibsRec(8, []));
