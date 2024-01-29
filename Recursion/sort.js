function mergeSort(array) {
  if (array.length == 1) {
    return array;
  }
  // sort left half of array
  const leftSort = mergeSort(array.slice(0, Math.floor(array.length / 2)));

  // sort right half of array
  const rightSort = mergeSort(array.slice(Math.floor(array.length / 2)));

  // merge
  const sortedList = [];

  while (true) {
    if (leftSort.length == 0) {
      sortedList.push.apply(sortedList, rightSort);
      break;
    } else if (rightSort.length == 0) {
      sortedList.push.apply(sortedList, leftSort);
      break;
    } else if (leftSort[0] <= rightSort[0]) {
      sortedList.push(leftSort.shift());
    } else if (rightSort[0] < leftSort[0]) {
      sortedList.push(rightSort.shift());
    }
  }
  return sortedList;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 12]));
