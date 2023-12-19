const loginButton = document.querySelector(".btn");
const app = document.querySelector(".app");
let i = 0;
const logInUser = async () => {
  i++;
  const userEmail = document.querySelector(".userEmail").value;
  const userPassword = document.querySelector(".userPassword").value;
  const newUser = { email: userEmail, password: userPassword };
  if (userEmail && userPassword) {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    app.innerHTML = "";
    fetchData();
    document.querySelector(".userEmail").value = "";
    document.querySelector(".userPassword").value = "";
    const data = await response.json();
    console.log(data);
  } else {
    return;
  }
};

const fetchData = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = response.json();
  i = data.length;
  console.log(i);
  console.log(data);
};

fetchData();
