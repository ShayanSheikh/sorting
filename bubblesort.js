Array.prototype.swap = function( pos1, pos2 ) {
  let temp = this[pos1];
  this[pos1] = this[pos2];
  this[pos2] = temp;
};

function bubbleSort(arr) {
  let count = arr.length - 1;
  while(count > 0) {
    for(var i = 0; i < count; i++) {
      if ( arr[i] > arr[ i+1 ] ) {
        arr.swap(i, i+1);
      }
    }
    count--;
  }
  return arr;
}