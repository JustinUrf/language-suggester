


function determineLangauge(event) {
  event.preventDefault();
  const userInput1 = document.querySelector("input[name='use-types']:checked").value;
  const userInput2 = document.querySelector("input[name='favourite-activity']:checked").value;
  const userInput3 = document.querySelector("input[name='favourite-genre']:checked").value;
  const userInput4 = document.querySelector("input[name='personality-type']:checked").value;
  const userInput5 = document.querySelector("input[name='scenario']:checked").value;
  console.log(userInput1)
}

window.addEventListener("load", function() {
  const formSubmit = document.getElementById("scenario-form");
  formSubmit.addEventListener("submit", determineLangauge);
});
