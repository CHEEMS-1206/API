const container = document.getElementById("container");
const fetchBtn = document.getElementById("fetchBtn");

const fetchFunction = async (endpoint) => {
  try {
    // fetch data from endpoit
    const data = await fetch(endpoint);
    // convert data into json
    const jsonData = await data.json();

    // create innerMaterial for the container div to display fetched details
    let containerInnerMaterial = "";
    jsonData.forEach((user) => {
      let createdDate = new Date(user.date).toLocaleDateString('en-CA');
      containerInnerMaterial += `
      <div class="user">
        <h2>${user.name} </h2>
        <p>
          ${user.title} </br>
          ${user.bio} </br>
        </p>
        <small> This user was created on ${createdDate}. </small>
      </div>`;
    });

    // display data in the container
    container.innerHTML = containerInnerMaterial;
  } catch (err) {
    container.innerHTML += `<div>${err.message}</div>`;
  }
};

// function to update inner content and fetch
const call = () => {
  container.innerHTML += `Loading ... `;
  setTimeout(() => {
    fetchFunction("http://localhost:5000/users/list");
  }, 1000);
};

// on click fetching details
fetchBtn.addEventListener("click", call);
