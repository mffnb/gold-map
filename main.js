// $(document).on('ready', function() {
  
// // scope - a place in memory where names are defined
// // global scope - not inside any function 
// // functions create their own scope- lexical scope
// // for loop, if block do not create own scope


// var foo = 10;

// var fullName = function(first, last){
// 	var fullName = first + ' ' + last
// 	return fullName
// }


// var myName = getFullName('Raphael', 'Serota')
// // console.log(myName);

// });

// prompt, confirm, alert are globally defined variables

// functions have global scope in addition to their own
// like glass boxes with one-way glass with global at center, 
// so can see out but not into 
// javascript looks first to current scope, parent scope, etc prior to global scope
// by design can only access return value by returning it...  don't want clutter global namespace
// variables given the same name will only access the most immediate scope



// var getFullName = 'Steve Stevenson';

// var fullName = function(first, last){
// 	var fullName = first + ' ' + last
// 	console.log(getFullName)
// 	// return fullName
// }


// var myName = getFullName('Raphael', 'Serota')
// console.log(myName);

// if a variable is no longer accessible can safely delete it- garbage collection

/// garbage collection : delete variables that we have no references to
// every time function is called, it is created, then when finishes running will delete
// normal flow- function


// var getFullName = 'Steve Stevenson';

// var fullName = function(first, last){
// 	var fullName = first + ' ' + last
// 	console.log(getFullName)
// 	// return fullName
// }


// var myName = getFullName('Raphael', 'Serota')

// one notable exception to garbage collection- closure

// variable defined in function- if function defined in function
// javascript has to make some exceptions to make 

var counterConstructor = function(){
	var start = 0;
	var counter = function(){
			console.log(start++)
	}
	return counter
}

var myCounter = counterConstructor();
myCounter();

var yourCounter = counterConstructor();

// the inner counter function has CLOSURE over the start variable, which
// prevents start from being garbage collected.
/// what if I created a second counter?

// every time you call a function you get a new scope, and it is a different scope...
// start variable retains closure 
// can do its own counting of its own start that is independent 
// every time call function has its own local scope
// javascript keeps them around because knows still necessary

// scope and closure super powerful

// has closure over start variable

// 