function split(wholeArray) {
  let midIdx = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midIdx);
  let secondHalf = wholeArray.slice(midIdx);
  
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let loopCnt = arr1.length + arr2.length
  let idx1 = 0;
  let idx2 = 0;
  const mergedArr = [];
  for (; loopCnt > 0; loopCnt--) {
    // arr1 is bigger
    if (arr1[idx1] < arr2[idx2] || arr2.length <= idx2) {
      mergedArr.push(arr1[idx1]);
      idx1++;
    }
    //arr2 is bigger
    else if (arr1[idx1] >= arr2[idx2] || arr1.length <= idx1) {
      mergedArr.push(arr2[idx2]);
      idx2++;
    }
  }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const splitArr = split(arr);
  const firstHalf = mergeSort(splitArr[0]);
  const secondHalf = mergeSort(splitArr[1]);
  return merge(firstHalf, secondHalf);
}