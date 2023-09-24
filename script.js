function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

document.getElementById('checkButton').addEventListener('click', function () {
    const userInput = document.getElementById('userInput').value;
    const resultElement = document.getElementById('result');

    if (userInput.trim() === '') {
        resultElement.textContent = 'Please enter a valid string.';
        return;
    }

    if (isPalindrome(userInput)) {
        resultElement.textContent = `"${userInput}" is a palindrome!`;
    } else {
        resultElement.textContent = `"${userInput}" is not a palindrome.`;
    }

    document.getElementById('userInput').value = '';
});
