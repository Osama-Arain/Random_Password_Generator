
document.getElementById('generateBtn').addEventListener('click', function() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    const length = 12;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('password').value = password;
    document.getElementById('copyStatus').innerText = ''; 
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); 

    document.execCommand('copy');
    document.getElementById('copyStatus').innerText = 'Password copied to clipboard!';
});
