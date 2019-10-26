/**********************************
VARIABLES
**********************************/

// topics to use on my page
var topics = [
    "chores",
    "dinner",
    "family",
    "pets",
    "siblings"
];

// store API key
var APIkey = "99Guer29R3DjsR7GWWt80ErqQpSEt5sh";

// URLs
var URLstill = "";
var URLanimated = "";

/**********************************
FUNCTIONS
**********************************/

// create buttons on page
function createButtons() {
    // stop buttons from repeatedly showing up
    $(".topic-btn").empty();
    // loop through topics to create button for each
    for (i = 0; i < topics.length; i++) {
        // give button a data-name attribute
        var newBtn = $("<button id='gif-btn' class='btn-" + i + "' data-name='" + topics[i] + "'>" + topics[i] + "</button>");
        // append to newBtn div
        $(".topic-btn").append(newBtn);
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
    // create buttons
    createButtons();
    // clear input field
    $("#add-btn-input").val("");
});

// display 10 gifs when button is clicked
$(document).on("click", "#gif-btn", function (event) {
    $("#gif-display").empty();
    // store data-name for URL
    var searchForThis = $(this).attr("data-name");
    // TEST
    console.log(searchForThis);
    // create queryURL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchForThis + "&api_key=" + APIkey + "&limit=10&rating=g";
    // TEST
    console.log(queryURL);
    // retrieve data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var searchResult = response.data;
        for (var i = 0; i < searchResult.length; i++) {
            // define URLstill
            URLstill = searchResult[i].images.fixed_height_still.url;
            URLanimated = searchResult[i].images.fixed_height.url;
            // creating new div for gif
            var gifDiv = $("<div class='gif-div col-md-4'>");
            // creating new img tag for gif
            var gifImg = $('<img class="gif" data-state="still" data-animated="' + URLanimated + '" data-still="' + URLstill + '" src="' + URLstill + '">');
            // gifImg.attr("src", searchResult[i].url)
            var gifRating = $("<p class='rating'>");
            // get gif's image
            gifDiv.append(gifImg);
            // get gif's rating
            gifRating.html("Rating: " + searchResult[i].rating);
            gifDiv.append(gifRating);
            // display everything
            $("#gif-display").prepend(gifDiv);
        }
    })
    // var moreBtn = $("<button id='more-btn' data-name='" + searchForThis + "'> Show Me More</button > ");
    // $("#content").append(moreBtn);
});

// $(document).on("click", "#more-btn", function (event) {

// });

// when gif is clicked
$(document).on("click", ".gif", function (event) {
    $(".gif").empty();
    console.log(this);
    // play gif
    // get data-state
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animated"));
        $(this).attr("data-state", "animate");
    } // stop gif
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

/**********************************
GAME CODE
**********************************/
// create first buttons
createButtons();