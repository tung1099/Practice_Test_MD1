function checkArray(number,arr){
    for (let i = 0; i < arr.length; i++) {
        if (number == arr[i]){
            return i;
        }
    }
}
let array = [1,4,7,5,9,6,3];
let n = checkArray(7,array)
document.write("Số 7 nằm ở vị trí thứ " + (n + 1) + " trong mảng")
