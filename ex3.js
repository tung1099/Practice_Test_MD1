    let arr = ["t","u","n","g"];
    function findVowel() {
        let count = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "a" || arr[i] === "o" || arr[i] === "e" || arr[i] === "u" || arr[i] === "i"){
                count ++;
                    alert("Có" + count + " ký tự nguyên âm")
                    break;
            }
        }

        }

    findVowel();
