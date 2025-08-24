const users = {
  ceo: {password:"ceo123", role:"CEO"},
  cfo: {password:"cfo123", role:"CFO"},
  guard: {password:"guard123", role:"VST_GUARD"}
};

document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if(users[username] && users[username].password === password){
    alert(`Login success! Role: ${users[username].role}`);
    localStorage.setItem("role", users[username].role);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});

document.getElementById("welcome")?.innerText = "Welcome! Role: " + localStorage.getItem("role");
function logout(){ localStorage.clear(); window.location.href="index.html"; }
