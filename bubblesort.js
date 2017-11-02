function swap( arr, pos1, pos2 ) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr;
};

function bubbleSort(arr) {
  let count = arr.length - 1;
  while(count > 0) {
    for(var i = 0; i < count; i++) {
      if ( arr[i] > arr[ i+1 ] ) {
        arr = swap(arr, i, i+1);
      }
    }
    count--;
  }
  return arr;
}