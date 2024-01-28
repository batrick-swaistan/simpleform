function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === 'demo' && password === 'password') {
        
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function logout() {

    window.location.href = 'index.html';
}


var users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more users as needed
];

function displayUsers(filteredUsers) {
    var tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    var usersToDisplay = filteredUsers || users;

    usersToDisplay.forEach(function (user) {
        var row = tableBody.insertRow();

        var cellId = row.insertCell(0);
        cellId.textContent = user.id;

        var cellName = row.insertCell(1);
        cellName.textContent = user.name;

        var cellEmail = row.insertCell(2);
        cellEmail.textContent = user.email;

        var cellAction = row.insertCell(3);
        cellAction.innerHTML = '<button onclick="editUser(' + user.id + ')">Edit</button> ' +
            '<button onclick="deleteUser(' + user.id + ')">Delete</button>';
    });
}

function sortTable(columnIndex) {
    users.sort(function (a, b) {
        var aValue = a[Object.keys(a)[columnIndex]];
        var bValue = b[Object.keys(b)[columnIndex]];
        return aValue.localeCompare(bValue);
    });

    displayUsers();
}

function addUser() {
    var newName = prompt('Enter the name of the new user:');
    var newEmail = prompt('Enter the email of the new user:');

    var newUser = {
        id: users.length + 1,
        name: newName,
        email: newEmail,
    };

    users.push(newUser);
    displayUsers();
}

function deleteUser(userId) {
    users = users.filter(function (user) {
        return user.id !== userId;
    });

    displayUsers();
}

function editUser(userId) {
    var user = users.find(function (user) {
        return user.id === userId;
    });

    var newName = prompt('Edit user name:', user.name);
    var newEmail = prompt('Edit user email:', user.email);

    user.name = newName;
    user.email = newEmail;

    displayUsers();
}

function filterUsers() {
    var filterValue = document.getElementById('filterInput').value.toLowerCase();

    var filteredUsers = users.filter(function (user) {
        return (
            user.id.toString().includes(filterValue) ||
            user.name.toLowerCase().includes(filterValue) ||
            user.email.toLowerCase().includes(filterValue)
        );
    });

    displayUsers(filteredUsers);
}

displayUsers();



function submitUserForm(event) {
    event.preventDefault();

    var userName = document.getElementById('userName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userAge = document.getElementById('userAge').value;

    alert('User Details:\nName: ' + userName + '\nEmail: ' + userEmail + '\nAge: ' + userAge);


    console.log('User Details:', { name: userName, email: userEmail, age: userAge });


    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userAge').value = '';
}


