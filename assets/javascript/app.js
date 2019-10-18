// topics to use on my page
var topics = [
    "apple",
    "banana",
    "peach",
    "cherry"
];

function createButtons() {
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var newButton = $("<button>" + topics[i] + "</button>");
        $("#topic-buttons").append(newButton);
    }
}

createButtons();