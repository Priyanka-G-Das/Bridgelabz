exports.StringPalindrom = (str) => {
    const len = str.length;
    const mid = Math.floor(len / 2);
    for (let i = 0; i < mid; i++) {
        if (str[i] != str[len - 1 - i]) {

            console.log("its not palindrom");
        }

        else {
            console.log("its palindrom");
        }
    }



}