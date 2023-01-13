


function determineLangauge(event) {
  event.preventDefault();
  const userInput1 = parseInt(document.querySelector("input[name='use-types']:checked").value);
  const userInput2 = parseInt(document.querySelector("input[name='favourite-activity']:checked").value);
  const userInput3 = parseInt(document.querySelector("input[name='favourite-genre']:checked").value);
  const userInput4 = parseInt(document.querySelector("input[name='personality-type']:checked").value);
  const userInput5 = parseInt(document.querySelector("input[name='scenario']:checked").value);
  console.log(userInput1, userInput2, userInput3, userInput4, userInput5)

  const answer = userInput1 + userInput2 +userInput3 + userInput4 + userInput5
  console.log(answer)

}

window.addEventListener("load", function() {
  const formSubmit = document.getElementById("scenario-form");
  formSubmit.addEventListener("submit", determineLangauge);
});
