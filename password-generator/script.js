/*const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');


const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];

}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbol.length)];
}

function generatepassword() {
    const len = lenEl.Value;
    let password = '';
    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;

    }

    pwEl.innerText = password;

}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getuppercase());
    }
    if (lowerEl.checked) {
        xs.push(getlowercase());
    }
    if (numberEl.checked) {
        xs.push(getnumber());
    }
    if (symbolEl.checked) {
        xs.push(getsymbol());
    }

}
if (xs.length === 0) return "";

return xs[Math.floor(Math.random() * xs.length)];
*/


const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
symbols: getRandomSymbol

}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if (!password) { return }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('password copied to clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbols = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length)
})

function generatePassword(lower, upper, number, symbols, length) {

    let generatedPassword = ''
    const typesCount = lower + upper + number + symbols
    const typesArr = [{ lower }, { upper }, { number }, { symbols }].
    filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+=';

    return symbols(Math.floor(Math.random() * symbol.length))
}