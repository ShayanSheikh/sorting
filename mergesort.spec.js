describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,2,3,4,5]) ).toEqual( [ [1, 2], [3, 4, 5] ] );
  });
  it('is able to split an array into two halves', function() {
    expect( split([1]) ).toEqual( [ [], [1] ] );
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge( [4,6,8] , [0,2,3]) ).toEqual( [0,2,3,4,6,8] );
  });
});

describe('MergeSort', function(){
  it('sort the array', function(){
    expect( mergeSort([2,1,4,3,5]) ).toEqual( [1,2,3,4,5]);
  });
});


