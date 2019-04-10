let about = $("#me");
let shuffle = $(".shuffleEffect");
let algo = $(".algo");
let textEffect = $(".textEffect");

// let Page = $(".PageTitle")
let aboutMe = ['Fullstack Web developer', '@mabvmex', 'mabvmex@gmail.com', 'Cel. +52 5514608234', 'México'];
let wordsCloud = ['HTML5', 'CCS3', 'Flexbox', 'Bootstrap', 'Responsive Design', 
                'Javascript', 'JQuery', 'Typescript', 'ES6', 'Angular 7+', 'NodeJS',
                'MongoDB', 'Express', 'Git', 'Github', 'API', 'Windows OS', 'GNU/Linux', 'MacOS', 'Virtualización'];
let a = 0;
let b = 0;

about.text(aboutMe[0]);
shuffle.text(wordsCloud[0]);



textEffect.on("keypress", function (e) {

    if (e.keyCode == 13 ) {
        algo.shuffleLetters({
            "text": textEffect.val()
        });
    }
});

setInterval(function () {

    a++;

    if (a >= aboutMe.length) {
        a = 0;
    }
    about.shuffleLetters({
        "text": aboutMe[a]
    });
}, 2500)


setInterval(function () {

    b++;
    if (b >= wordsCloud.length) {
        b = 0;
    }
    shuffle.shuffleLetters({
        "text": wordsCloud[b]
    });
}, 4000)
