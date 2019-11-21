exports.binarySearch = (array, value) => {
    var mid,
        min = 0,
        max = array.length - 1;

    while (min <= max) {
        mid = Math.floor((min + max) / 2);
        if (array[mid] === value)
            return mid;
        else if (array[mid] < value)
            min = mid + 1;
        else
            max = mid - 1;
    }

    return -1;
}