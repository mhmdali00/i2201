document.getElementById('sign-Log-form').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordError = document.getElementById('password-Error');

    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
        event.preventDefault();
    } else {
        passwordError.style.display = 'none';
    }
});
document.getElementById('confirm-password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const passwordError = document.getElementById('password-Error');

    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});