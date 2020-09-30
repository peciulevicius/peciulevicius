particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});

let header = document.getElementById('header')
let subheader = document.getElementById('subheader')

const typewriter = new Typewriter(header, {
    loop: false
});

const typewriter2 = new Typewriter(subheader, {
    loop: false
});

let header1 = "Hey there, I'm Džiugas.";
let header2 = "I'm a web developer.";
let header3 = " love designing websites.";
let header4 = "'ve created apps, websites using what I've learned.";
let header5 = "Feel free to reach out to say hi!";

let subHeader1 = "Nice to meet you.";
let subHeader2 = "React.js, JavaScript, SASS/SCSS.";
let subHeader3 = "AdobeXD, Figma, Zeplin.";
let subHeader4 = "You can find the processing source code for this below.";
let subHeader5 = "dziugaspeciulevicius@gmail.com.";

let typingSpeed = 10;
let deleteSpeed = 1;
let pauseDelay = 3000;

function subtyping(string) {
    typewriter2
        .changeDelay(typingSpeed)
        .typeString(string)
        .start();
}

function subdelete() {
    typewriter2
        .deleteAll(1)
        .start();
}

function typing() {

    typewriter
        .changeDelay(typingSpeed)
        .changeDeleteSpeed(deleteSpeed)

        .typeString(header1)
        .callFunction(function () {
            subtyping(subHeader1)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader1.length * deleteSpeed)
        .deleteChars(23)

        .typeString(header2)
        .callFunction(function () {
            subtyping(subHeader2)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader2.length * deleteSpeed)
        .deleteChars(19)

        .typeString(header3)
        .callFunction(function () {
            subtyping(subHeader3)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader3.length * deleteSpeed)
        .deleteChars(25)

        .typeString(header4)
        .callFunction(function () {
            subtyping(subHeader4)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader4.length * deleteSpeed)
        .deleteAll(1)

        .typeString(header5)
        .callFunction(function () {
            subtyping(subHeader5)
        })
        .pauseFor(pauseDelay)
        .callFunction(function () {
            subdelete()
        })
        .pauseFor(subHeader4.length * deleteSpeed)
        .deleteAll(1)
        .start();
}

typing();