var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL +"?" +"text=" +text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with Server! Try Again")
}

function clickHandler(){
    console.log("Button Clicked");
    var inputText =txtInput.value;


fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json =>{
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText;
     })
     .catch(errorHandler)
    }
btnTranslate.addEventListener("click", clickHandler)



// welcome to event based programming
// and callback


// button click
var translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", buttonClickHandler)

// read input
var translateInput = document.querySelector("#translate-input");

// show output
var translateOutput = document.querySelector("#translate-output");

// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var url = "https://api.funtranslations.com/translate/minion.json"

// REPL URL: https://repl.it/@tanaypratap/lessonfourapi

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL);
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("some error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}