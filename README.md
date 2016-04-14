** JavaScript Library Project
A short JavaScript library modeled after jQuery

*** Included files:
* Greetr.js - the JavaScript library
* jquery-1.12.3.js - dev copy of jQuery
* app.js and index.html - demo application of Greetr

*** About:
Greetr accepts as arguments a first name, last name, and language.
Explanations of the methods of Greetr can be found in the comments
in Greetr.js starting at line 28.

This library borrows several techniques from the jQuery library:
**** Wrapper:
The entire script is wrapped in an immediately invoked function expression
to prevent its variables from conflicting with the user's own scripts. The
window object is passed in to the function expression so that the Greetr
function and its methods can be exposed on the window (line 135). jQuery 
itself is also passed to the function expression, giving Greetr access to
its methods.
**** Function Constructor:
The main Greetr function returns a function constructor (Greetr.init)
to construct the Greetr object so that the user can call Greetr without the
'new' keyword. Instead, the user can simply type 'Greetr' or 'G$'.
**** Prototypal Inheritance:
The methods available in Greetr are stored in the Greetr prototype (line 28).
The Greetr object is given access to these methods by setting the 
Greetr.prototype equal to the Greetr.init.prototype.
**** Chainable Methods:
Several of the methods available in the Greetr library are 'chainable',
meaning multiple methods can be called in the same line 
(eg `G$('James', 'Bond').setLang('en').greetings()`). Methods can be made
chainable in this way by returning the 'this' variable. The 'this'
variable will refer to the object on which the method sits, so returning 
it makes the object's methods available to be called again.

*** Using the Demo App:
Copy Greetr.js, app.js, and index.html to your computer and open index.html 
in a browser window. Enter your name, choose a language, and click Login to
see a personalized greeting! 