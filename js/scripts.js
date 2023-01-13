
function sortEndResponse(answer) {
  if (answer <= 5) {
    return "Javascript";
  } else if (answer > 5 && answer <= 10) {
    return "Python";
  } else if (answer > 10 && answer <= 15) {
    return "HTML"
  } else if (answer > 15 && answer <= 20) {
    return "CSS"
  }  
}


function answerCalculation(userInput1, userInput2, userInput3, userInput4, userInput5){
  return userInput1 + userInput2 + userInput3 + userInput4 + userInput5
}



// UI logic
function determineLangauge(event) {
  event.preventDefault();
  const userInput1 = parseInt(document.querySelector("input[name='use-types']:checked").value);
  const userInput2 = parseInt(document.querySelector("input[name='favourite-activity']:checked").value);
  const userInput3 = parseInt(document.querySelector("input[name='favourite-genre']:checked").value);
  const userInput4 = parseInt(document.querySelector("input[name='personality-type']:checked").value);
  const userInput5 = parseInt(document.querySelector("input[name='scenario']:checked").value);
  console.log(userInput1, userInput2, userInput3, userInput4, userInput5)
  let answer = answerCalculation(userInput1, userInput2, userInput3, userInput4, userInput5)
  console.log(answer)
  const result = sortEndResponse(answer);

  document.getElementById("result").innerText = result
  

}

window.addEventListener("load", function() {
  const formSubmit = document.getElementById("scenario-form");
  formSubmit.addEventListener("submit", determineLangauge);
});
