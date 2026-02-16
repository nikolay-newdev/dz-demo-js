const myPassword = 'Ladoga1$';

function crypto(password) {
    const arr = password.split('');
    let [a, b] = arr;
    arr[0] = b;
    arr[1] = a;
    return arr.join('');

}



function check(psw, insertPassword) {
    const arr = psw.split('');
    let [a, b] = arr;
    arr[1] = a;
    arr[0] = b;
    return arr.join('') == insertPassword;
}

encryptedPassword = crypto(myPassword);
isCorrectPassword = check(encryptedPassword, 'Ladoga1$');

console.log(myPassword);
console.log(encryptedPassword);
console.log(isCorrectPassword);