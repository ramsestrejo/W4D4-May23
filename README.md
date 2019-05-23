# Errors & Promises

## Errors

Fact of life. I prefer to call them Exceptional events (Exceptions in C, Java).

### Source of errors
* Interpreter (Syntax)
* Library (incorrect use)
* Tooling (linters)
* Custom (programmatic)
 

### Good Errors are descriptive
* What went wrong
* Where in the code
* What data was involved (variables)
* What the problem was
 
### Handling Errors is an Art
* Javascript is interpreted language - no type checking before code is executed.
* App should not crash everytime something unexpected happens.
* At the very least - if statements could help prevent catastrophic errors from ocurring.
* When Errors (exceptional events) occur they are thrown down the call stack (staircase).
* Errors  should be handled gracefully (caught) before they reach the top process of the call stack (bottom of the staircase).
 
### “try-catch” blocks
* Try indicates a block of code where an exceptional event can occur
* Custom Errors allow to control how to recover from exceptional events.
	Throw new Error( “description”)
* Use custom errors to control flow of programs when certain dependencies are not there.
	Fail loud & early | console.error, console.warn
 ````
 try {
	Throw new Error ( “message”)
 }
 catch( error ) {

}
 ````
 

 
## Promises

### Asynchronous Calls
* Inherent to web interactions - sequence of steps
**	Web requests/responses
** Event listeners

### Synchronicity
* Help handle asynchronous behaviours in a synchronous way
* i.e. (database , API calls)
* Analogy : Chaining behaviour 
 
### Steps 
1.	Create a promise - function that returns a promise or new Promise
2.	Connect the chain with .then( result => { } )
3.	Connect a .catch( ) for handling exceptional events 
 
