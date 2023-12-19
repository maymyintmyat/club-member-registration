const buildUi = (user) => {
  for (let i = 0; i < user.length; i++) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
          <div class="d-flex justify-content-center align-items-center">
          <ul>
        <li>${user[i].email}<li>
          </ul>
          <div class="updateAndDelete">
          <button type="button" class="btn btn-outline-warning" id="${user[i].id}" onclick="updateUser(event)">Update</button>
          <button type="button" class="btn btn-outline-warning" id="${user[i].id}" onclick="deleteUser(event)">Delete</button>
          </div>
          </div>
          `;
    app.append(userDiv);
  }
};

const fetchData = async () => {
  const response = await fetch("http://localhost3000/users");
  const data = await response.json();
  i = data.length;
  console.log(i);
};
fetchData();
