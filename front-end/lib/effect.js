let shuffle = $(".shuffleEffect");
let textEffect = $("#textEffect");
let about = $(".me");

// let Page = $(".PageTitle")
let aboutMe = ['@mabvmex', 'mabvmex@gmail.com'];
let wordsCloud = ['Fullstack Web developer', 'Javascript', 'Angular 7+',
    'NodeJS', 'MongoDB', 'ios Developer',
];
let a = 0;
let b = 0;

shuffle.text(wordsCloud[0]);
// Page.shuffleLetters();

textEffect.on("keypress", function (e) {

    if (e.keyCode == 13) {
        shuffle.shuffleLetters({
            "text": textEffect.val()
        });
    }
});

setInterval(function () {

    a++;

    if (a >= wordsCloud.length) {
        a = 0;
    }
    shuffle.shuffleLetters({
        "text": wordsCloud[a]
    });
}, 3000)


setInterval(function () {

    b++;
    if (b >= aboutMe.length) {
        b = 0;
    }
    about.shuffleLetters({
        "text": aboutMe[b]
    });
}, 4000)
