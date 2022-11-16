//Your code comes here

let thisText = "Cordon Bleu";
function logIntoTerminal(toLog){
    console.log(thisText);
}
logIntoTerminal();

function logIntoTerminal2(toLog){
    let localText = "La vie en rose";
    console.log(localText);
}
logIntoTerminal2();

function simpleFunction(){
    let b = 2;
    console.log(b);
}
function simpleFunction2(){
    simpleFunction();
}
simpleFunction2();

const thirdFunction = function(){
    logIntoTerminal();
    logIntoTerminal2();
}
thirdFunction();

function logIntoTerminal11(toLog){
    let localText = "La vie en rose.";
    console.log(thisText);
    console.log(localText);
    function fourthFunction (){
        console.log("La bagiette et le vin.")
    }
    fourthFunction();
}
logIntoTerminal11();

console.log("-------------------------------------------------------------------");

function anotherFunction() {
    let a = 1;
    logIntoTerminal222("Its from anotherFunction()!", a)
}
anotherFunction();

function logIntoTerminal222(toLog, secondToLog){
    let localText = "La vie en rose.";
    console.log(localText);
    console.log(thisText);
    function fourthFunction () {
        console.log("This console.log belongs to the fourth function!")
    }
    fourthFunction();
    console.log(toLog);
    console.log(secondToLog)
}

function greetings(firstName){
    return "Greetings, " + firstName;
}
    console.log(greetings("Francais"));
    console.log(greetings("Ana"));
    console.log(greetings("Maria"));
    console.log(greetings("George"));
    console.log(greetings("Peppa"));

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "thisText", content: thisText, type: "string"},
        {name: "logIntoTerminal", content: logIntoTerminal, type: "function"},
        {name: "anotherFunction", content: anotherFunction, type: "function"},
        {name: "thirdFunction", content: thirdFunction, type: "function"},
        {name: "greetings", content: greetings, type: "function"},

	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
