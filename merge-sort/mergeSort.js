const merge = (array, begin, mid, end) => {
  const leftArray = [];
  const rightArray = [];
  let i;
  let j;
  let k;
  for (i = 0, k = begin; k <= mid; i++, k++) {
      leftArray[i] = array[k];
  }
  for (j = 0; k <= end; j++, k++) {
      rightArray[j] = array[k];
  }
  k = begin;
  for (i = 0, j = 0; i < leftArray.length && j < rightArray.length;) {
      if (leftArray[i] < rightArray[j]) {
          array[k] = leftArray[i];
          i++;
      } else {
          array[k] = rightArray[j];
          j++;
      }
      k++;
  }
  for (; i < leftArray.length; i++, k++) {
      array[k] = leftArray[i];
  }
  for (; j < rightArray.length; j++, k++) {
      array[k] = rightArray[j];
  }
};


const mergeSort = (array, begin = 0, end = array.length - 1) => {
  if (begin < end) {
    const mid = Math.floor((begin + end) / 2);
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    const arr = merge(array, begin, mid, end);
  }
  return arr;
};


const arr = [3, 2, 1, 13, 8, 5, 0, 1];
mergeSort(arr);
console.log(arr);
