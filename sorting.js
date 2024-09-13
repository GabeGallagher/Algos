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

  merge(array) {
    if (array.length === 1) return array;
    else {
      let pivot = Math.floor(array.length / 2);
      let left = array.slice(0, pivot);
      let right = array.slice(pivot, array.length);

      left = this.merge(left);
      right = this.merge(right);

      return this.combine(left, right);
    }
  }

  combine(arrayOne, arrayTwo) {
    let output = [];
    let i = 0;
    let j = 0;
    while (i < arrayOne.length && j < arrayTwo.length) {
      if (arrayOne[i] < arrayTwo[j]) {
        output.push(arrayOne[i]);
        i++;
      } else if (arrayOne[i] > arrayTwo[j]) {
        output.push(arrayTwo[j]);
        j++;
      }
    }
    if (i < j) {
      output = this.finishArray(i, arrayOne, output);
    } else if (i > j) {
      output = this.finishArray(j, arrayTwo, output);
    }
    return output;
  }

  finishArray(i, array, output) {
    for (; i < array.length; i++) {
      output.push(array[i]);
    }
    return output;
  }
}

module.exports = Sort;
