//Business Logic

// function that takes in answer( which is avariable that converts user input into a number value and returns what langauge they should learn
function sortEndResponse(answer) {
  if (answer >= 5 && answer <= 9) {
    return "You choose a lot of A or B answers, the perfect language for you is Javascript!";
  } else if (answer > 9 && answer <= 13) {
    return "You choose a lot of B or C answers or a couple of D answers and a couple of A and B answers, the perfect langauge for you is Go!";
  } else if (answer > 13 && answer <= 17) {
    return "You choose a lot of C or B answers or a lot of D answers and a couple of B and A answers, the perfect language for you is Ruby!"
  } else if (answer > 17 && answer <= 20) {
    return "You choose a lot of C and D answers, the perfect langauge for you is C#!"
  }  
}
// This function converts user inputs into a final number to be compared to i.e 3 3 3 3 2 > returns 14. 
function answerCalculation(userInput1, userInput2, userInput3, userInput4, userInput5){
  return userInput1 + userInput2 + userInput3 + userInput4 + userInput5
}

// UI logic

// This function is called when the submit button gets intereacted with. This then gathers user input data which is assigned 
// with a value 1-4, then adds them for final comparison for sortEndResponse). Finally, the text in ID results gets changed to 
// whatever is returned from sortEndResponse
function determineLangauge(event) {
  event.preventDefault();
  // sets all the local varaibles that are used for sorting
  const userInput1 = parseInt(document.querySelector("input[name='use-types']:checked").value);
  const userInput2 = parseInt(document.querySelector("input[name='favourite-activity']:checked").value);
  const userInput3 = parseInt(document.querySelector("input[name='favourite-genre']:checked").value);
  const userInput4 = parseInt(document.querySelector("input[name='personality-type']:checked").value);
  const userInput5 = parseInt(document.querySelector("input[name='scenario']:checked").value);
  const answer = answerCalculation(userInput1, userInput2, userInput3, userInput4, userInput5)
  const result = sortEndResponse(answer);
  // const result = 
  const username = document.getElementById("username-id").value;

  document.getElementById("result").innerText = "Hi there "+ username + "! " + result



}

window.addEventListener("load", function() {
  const formSubmit = document.getElementById("scenario-form");
  formSubmit.addEventListener("submit", determineLangauge);
});