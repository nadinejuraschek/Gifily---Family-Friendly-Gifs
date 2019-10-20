/**********************************
VARIABLES
**********************************/

// topics to use on my page
var topics = [
    "apple",
    "banana",
    "peach",
    "cherry"
];

var APIkey = "99Guer29R3DjsR7GWWt80ErqQpSEt5sh2;
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=" + APIkey + "&limit=10&rating=g";

/**********************************
FUNCTIONS
**********************************/

function createButtons() {
    // stop buttons from repeatedly showing up
    $("#topic-btn").empty();
    for (var i = 0; i < topics.length; i++) {
        var newBtn = $("<button>" + topics[i] + "</button>");
        $("#topic-btn").append(newBtn);
    }
}

/**********************************
EVENTS
**********************************/

$("#add-btn").on("click", function (event) {
    // keeps button from trying to send the input off somewhere
    // lets user press "enter" to trigger button as well
    event.preventDefault();
    // grab user input
    var addInput = $("#add-btn-input").val();
    console.log(addInput);
    // add input to array
    topics.push(addInput);
    createButtons();
})

/**********************************
GAME CODE
**********************************/
// create first buttons
createButtons();

// display 10 gifs when button is clicked
