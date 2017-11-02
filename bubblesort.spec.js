describe('Bubble Sort', function() {
  beforeAll(function () {
    arr = [];
    spyOn(arr, 'swap').and.callThrough();
  });
  it('handles an empty array', function() {
    arr = [];
    expect( bubbleSort(arr) ).toEqual( [] );
    //expect( arr.swap.calls.count() ).toEqual(0);
  });
  it('shouldn\'t change an already sorted array' , function() {
    arr = [1,2,4,5];
    expect( bubbleSort(arr) ).toEqual( [1,2,4,5] );
    //expect( arr.swap.calls.count() ).toEqual(0);
  });
  it('sorts an array properly', function() {
    arr = [4,5,2,1];
    expect( bubbleSort( arr )).toEqual( [1,2,4,5] );
    //expect( arr.swap.calls.count() ).toEqual(5);
  });
});