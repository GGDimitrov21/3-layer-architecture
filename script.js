function submitForm() {
    console.log('Function submitForm called');

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("users.txt")
        .then(response => response.text())
        .then(data => {
            var lines = data.split('\n');

            for (var i = 0; i < lines.length; i++) {
                var [storedUsername, storedPassword] = lines[i].split('|');

                if (username === storedUsername && password === storedPassword) {
                    document.getElementById("error-message").innerText = "Logged In";
                    return;
                }
            }

            document.getElementById("error-message").innerText = "Wrong username or password";
        })
        .catch(error => {
            console.error('Error reading users.txt:', error);
        });
}
