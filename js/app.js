const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");
 
messageBtn.addEventListener("click", function () {
  messageOutput.textContent = "JavaScript is working correctly!";
});
 
const apiBtn = document.getElementById("apiBtn");
const apiOutput = document.getElementById("apiOutput");
 
apiBtn.addEventListener("click", function () {
  apiOutput.textContent = "Loading data...";
 
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      apiOutput.innerHTML = `
        <p>Post ID: ${data.id}</p>
        <p>Title: ${data.title}</p>
      `;
    })
    .catch(function (error) {
      apiOutput.textContent = "Error loading API data.";
      console.error("API Error:", error);
    });
});