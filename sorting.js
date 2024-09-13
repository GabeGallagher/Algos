class Sort {
  bubble(array) {
    let sorted = 0;
    while (array.length > sorted) {
      for (let i = 0; i < array.length - 1 - sorted; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = temp;
        }
      }
      sorted += 1;
    }
    return array;
  }
}

module.exports = Sort;
