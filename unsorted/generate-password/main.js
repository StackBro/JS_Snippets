const passwordFrame = document.getElementById('passwordFrame');
const passwordGenerateBtn = document.getElementById('generateBtn');

function generatePassword(length, charset) {
    let password = '';

    for (let i = 0; i < length; ++i) {
        password += charset[
            Math.floor(
                Math.random() * charset.length
            )
            ];
    }

    return password
}

passwordGenerateBtn.addEventListener('click', () => {
    const newPassword = generatePassword(16, 'qe59HKvZ7A8NFXkh24yzabuMwQJEPG');
    passwordFrame.innerHTML = newPassword;
})