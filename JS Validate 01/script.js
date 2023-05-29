var name = document.getElementById("name");
var password = document.getElementById("password");
var form = document.getElementById("form");
var errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required!");
  }
  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = messages.join(", ");
  }
});
