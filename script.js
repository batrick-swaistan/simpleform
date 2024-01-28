var users = JSON.parse(localStorage.getItem('users')) || [];

function signup(event) {
    event.preventDefault();

    var userName = document.getElementById('signupName').value;
    var userUsername = document.getElementById('signupUsername').value;
    var userEmail = document.getElementById('signupEmail').value;
    var userPassword = document.getElementById('signupPassword').value;

    console.log('Signup Data:', userName, userUsername, userEmail, userPassword);

    var newUser = {
        id: users.length + 1,
        name: userName,
        userUsername: userUsername,
        email: userEmail,
        password: userPassword
    };

    users.push(newUser);


    localStorage.setItem('users', JSON.stringify(users));

    alert("Signup successful! Redirecting to login page.");
    window.location.href = "login.html";
}

function login(event) {
    event.preventDefault();

    var loginUsernameEmail = document.getElementById('loginUsernameEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    var user = users.find(function (user) {
        return (user.email === loginUsernameEmail || user.userUsername === loginUsernameEmail) &&
               user.password === loginPassword;
    });

    console.log(user);

    if (user) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}


// The rest of your code remains unchanged...



// function login(event) {
//     event.preventDefault();

//     var loginUsernameEmail = document.getElementById('loginUsernameEmail').value;
//     var loginPassword = document.getElementById('loginPassword').value;
   
//     var user = users.find(function (user) {
//         return (user.email === loginUsernameEmail || user.name === loginUsernameEmail) &&
//                user.password === loginPassword;
//     });

//     console.log(user)
    
//     if (user) {
//         alert('Login successful!');
        
//         window.location.href = 'dashboard.html';
//     } else {
//         alert('Invalid username or password. Please try again.');
//     }
// }

function logout() {

    window.location.href = 'login.html';
}


function displayUsers(filteredUsers) {
    var tableBody = document.querySelector('#userTable tbody');

    // Check if tableBody is null before accessing its properties
    if (!tableBody) {
        console.error('Table body element not found.');
        return;
    }

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


