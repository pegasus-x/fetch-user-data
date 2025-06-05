const userList = document.getElementById("user-list");
const errorDiv = document.getElementById("error");
const reloadBtn = document.getElementById("reload");

function fetchUsers() { 
  userList.innerHTML = "";     
  errorDiv.textContent = "";   

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) throw new Error("Network response was not OK");
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
         <h3>${user.name}</h3> 
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      errorDiv.textContent = "Failed to fetch users. Please check your connection.";
      console.error("Error fetching users:", error);
    });
}

reloadBtn.addEventListener("click", fetchUsers);
window.addEventListener("load", fetchUsers);
