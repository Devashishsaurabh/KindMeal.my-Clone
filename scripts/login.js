let details = JSON.parse(localStorage.getItem("UserDetails"));

function loginUser() {
	console.log("Hello");
	let Email = document.getElementById("email").value;
	let Pass = document.getElementById("pass").value;

	for (let i = 0; i < details.length; i++) {
		if (details[i].UserEmail == Email && details[i].UserPass == Pass) {
			let Name = details[i].UserName;
			localStorage.setItem("username", JSON.stringify(Name));
			alert(`Hello ${details[i].UserName}. Login successful!`);
			window.location.href = "index.html";
			return;
		} else if (i == details.length - 1) alert("Invalid email or password!");
	}

	// document.getElementById("email").innerHTML = null;
	// document.getElementById("pass").innerHTML = null;
}

document.getElementById("userLoginButton").addEventListener("click", loginUser);
