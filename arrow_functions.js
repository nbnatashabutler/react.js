// ES6 Arrow Functions - keyword "this" will only refer to the global object from where it was referenced first.

hello = () => {
  return "Hello World!";
}

//the below works with single statments only
// keyword "return" is not needed

hello = () => "Hello World!";


//multiple parameters must be passed in prentheses

hello = (val) => "Hello " + val;

//one parameter does not parentheses

hello = val => "Hello " + val;
