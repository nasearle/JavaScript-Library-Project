;(function(global, $) {

	// Greetr function returns an object created by the 
	// function constructor Greetr.init
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	// variables not exposed on Greetr object
	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	//methods and properties availabe on Greetr object
	Greetr.prototype = {
		// 'this' will refer to Greetr object created in Greetr.init
		
		// takes first and last name passed to Greetr and concatenates
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		// checks if language is in the supportedLangs array
		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},

		// creates greeting based on language using greetings
		// object and first name
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		// creates formal greeting based on language using greetings
		// object and the fullName method
		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},

		// output formal or informal greeting to the console for dev
		// purposes
		greet: function(formal) {
			var msg;

			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}

			// return the Greetr object so that a method can immediately
			// be called on this method. Makes method 'chainable'
			return this;
		},

		// posts login message to the console in the chosen language
		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			// make chainable
			return this;
		},

		// sets the language and calls validate function
		setLang: function(lang) {			
			this.language = lang;
			this.validate();

			// make chainable
			return this;
		},

		// checks for jQuery and selector, and uses jQuery to output
		// greeting to the selected HTML element
		HTMLGreeting: function(selector, formal) {
			if(!$) {
				throw 'jQuery not loaded';
			}

			if (!selector) {
				throw 'Missing jQuery selector';
			}

			var msg;
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			$(selector).html(msg);

			return this;
			
		}
	
	};

	// function constructor that creates the Greetr object
	Greetr.init = function(firstName, lastName, language) {

		var self = this;		
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';

		self.validate();
	}

	// gives all the properties and methods on the Greetr prototype
	// to the objects created by Greetr.init.
	Greetr.init.prototype = Greetr.prototype;

	// makes Greetr function callable from anywhere in the window
	// object. Can be called with "Greetr" or "G$"
	global.Greetr = global.G$ = Greetr;

}(window, jQuery));