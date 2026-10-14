
const messageBtn = document.getElementById("messageBtn");
const messageOutput = document.getElementById("messageOutput");

if (messageBtn && messageOutput) {
  messageBtn.addEventListener("click", function () {
    messageOutput.textContent = "JavaScript is working correctly!";
  });
}

const apiBtn = document.getElementById("apiBtn");
const apiOutput = document.getElementById("apiOutput");

if (apiBtn && apiOutput) {
  apiBtn.addEventListener("click", function () {
    apiOutput.textContent = "Loading data...";
    apiBtn.disabled = true;

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("HTTP error: " + response.status);
        }

        return response.json();
      })
      .then(function (data) {
        apiOutput.replaceChildren();

        const postId = document.createElement("p");
        postId.textContent = "Post ID: " + data.id;

        const postTitle = document.createElement("p");
        postTitle.textContent = "Title: " + data.title;

        apiOutput.append(postId, postTitle);
      })
      .catch(function (error) {
        apiOutput.textContent =
          "Error loading API data. Please try again.";

        console.error("API Error:", error);
      })
      .finally(function () {
        apiBtn.disabled = false;
      });
  });
}
