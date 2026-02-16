const myPassword = 'Ladoga1$';

function crypto(password) {
    const a = password.slice(0, 3);
    return password + a;

}

function check(psw, myPassword) {
    psw = psw.slice(0, -3);
    return psw == myPassword;
}

encryptedPassword = crypto(myPassword);
isCorrectPassword = check(encryptedPassword, 'Ladoga1$');

console.log(myPassword);
console.log(encryptedPassword);
console.log(isCorrectPassword);