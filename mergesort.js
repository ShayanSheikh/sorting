function split(wholeArray) {
  let mid = wholeArray.length/2;
  return [wholeArray.slice(0, mid), wholeArray.slice(mid)];
}

function merge(arr1,arr2) {
  var finalResult = [], leftInd = 0, rightInd = 0;
  while(leftInd < arr1.length && rightInd < arr2.length){
    if(arr1[leftInd] > arr2[rightInd]) {
      finalResult.push(arr2[rightInd]);
      rightInd++;
    } else { 
      finalResult.push(arr1[leftInd]);
      leftInd++;
    }
  }
  finalResult = finalResult.concat(arr1.slice(leftInd));
  finalResult = finalResult.concat(arr2.slice(rightInd));
  return finalResult;
}

function mergeSort(arr) {
  //base case
  arr = split(arr);
  if(arr[0].length <= 1 && arr[1].length <= 1) return merge(arr[0], arr[1]);
  
  //recursive part
  return merge( mergeSort(arr[0]), mergeSort(arr[1]) );
}
