let shuffle = $(".shuffleEffect");
let textEffect = $("#textEffect");
let Page = $(".PageTitle")

shuffle.shuffleLetters();
Page.shuffleLetters();

textEffect.on("keypress", function (e) {

    if (e.keyCode == 13) {
        shuffle.shuffleLetters({
            "text": textEffect.val()
        });
    }
});