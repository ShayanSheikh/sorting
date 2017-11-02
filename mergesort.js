function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  let mid = Math.floor(wholeArray.length/2);
  for(var i = 0; i < mid; i++) firstHalf.push(wholeArray[i])
  for(var i = mid; i < wholeArray.length; i++) secondHalf.push(wholeArray[i]);
  return [firstHalf, secondHalf];
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