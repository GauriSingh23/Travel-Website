const users = [
  { username: "parul", password: "parul123" },
  { username: "ritu", password: "ritu2303" },
  { username: "gauri", password: "gauri321" }
];

// Cache DOM elements once
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

loginBtn.addEventListener("click", () => {
  // Reset error messages
  userError.textContent = "";
  passError.textContent = "";

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  let isValid = true;

  // Validation
  if (!username) {
    userError.textContent = "Username is required";
    isValid = false;
  }

  if (!password) {
    passError.textContent = "Password is required";
    isValid = false;
  }

  if (!isValid) return;

  // Match user
  const matchedUser = users.find(
    user => user.username === username && user.password === password
  );

  if (matchedUser) {
    localStorage.setItem("travelUser", matchedUser.username);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    passError.textContent = "Invalid username or password";
  }
});

