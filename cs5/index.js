alert("enter password")
let password = prompt("password")
while (!password || password !== "11") {
password = prompt("enter password again")
}

if (!confirm("your password is " + password)) {
password = prompt("try again")
}

alert("your password is " + password)