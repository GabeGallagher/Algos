class Sort {
  bubble(array) {
    let moves = 1;
    while (moves > 0) {
      moves = 0;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i + 1];
          array[i + 1] = array[i];
          array[i] = temp;
          moves += 1;
        }
      }
    }
  }
}

module.exports = Sort;
