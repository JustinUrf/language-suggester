project prompt > have at least 3 languages learners should consider.
form with minimum 5 survey questions
one branch should return one result
when user submits survey, previous answer must be cleared, hidden or replaced (probably gonna choose replace.)
(branching logic does not require to take every possible conbination into account, can ignore user results as long as there is good functionality...)

Form gathers input from user.
branching to determine the results
web api object properties or methods are used to display the result to the user.
event handler are used to handle events (on submit)
when user submits the form again in the same session previous results are hidden, cleared, or replaced (propbably replace)
variable names are written w/ lower camal case and are descriptive of what they do
styled in custom css.

html
* body
prompts user answer for user name (1)
prompts user to pick 5 multiple choice items

div that has purpose of containing answer (maybe a class for styles.)
p tag that holds nothing and its text gets replaced by answer prompt.
if have excess time > images for each program?>


* body...


* css...

class that makes site form in a way that makes sense
class that gets dynamically applied after JS runs branching logic (maybe)
class that potentially makes things hidden...? (not sure if I need it if i'm replacing answers)

class that makes the div that contains user input float to the left taking up 33% of the screen, flexible
class that displays answer to the right of the screen that is hidden in a div, takes up 66% of the screen, flexible.

* javascript

variables that records all 5 user submitted prompts
function that return 1 of 3 different languages through branching
function that handles on submit events that does >
  changes inner text of answer area in HTMl
  changes classes(if i have time)
converts all user submitted prompts into numbers valuing from 1-4, at the end determine language by adding quiz selections together and get ranges for 1-5/5-10/15/20
