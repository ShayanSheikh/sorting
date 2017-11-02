function split(wholeArray) {
  let mid = Math.floor(wholeArray.length/2);
  return [wholeArray.slice(0, mid), wholeArray.slice(mid)];
}

function merge(arr1,arr2) {
  var finalResult = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] > arr2[0]) {
      finalResult.push(arr2.shift());
    } else { 
      finalResult.push(arr1.shift());
    }
  }
  return finalResult.concat(arr1.concat(arr2));
}

function mergeSort(arr) {
  //base case
  arr = split(arr);
  if(arr[0].length <= 1 && arr[1].length <= 1) return merge(arr[0], arr[1]);
  
  //recursive part
  return merge( mergeSort(arr[0]), mergeSort(arr[1]) );
}



// function split(wholeArray){
//   var final = [];
//   //base case
//   if(wholeArray.length<=1){
//     return final.push([wholeArray]);
//   }
//   return final.push([wholeArray[0]]) + split(wholeArray.slice(1));
// }