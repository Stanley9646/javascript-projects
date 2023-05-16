const quizdata = [{
        question: ' The kind of language that is easiest for people to use is?',
        a: ' assembly language',
        b: ' machine language',
        c: ' low-level language',
        d: ' high-level language',
        correct: 'd'
    }, {
        question: 'Input to a compiler is called',
        a: ' a byte-code file',
        b: ' source code',
        c: ' an executable file',
        d: ' object code',
        correct: 'b'

    }, {
        question: 'The term __________ refers to a way of organizing classes that share properties.',
        a: ' object-oriented',
        b: ' encapsulation',
        c: ' polymorphism',
        d: ' inheritance',
        correct: 'd'
    }, {
        question: '__________ means that two or more methods can have different names in the same way that anEnglish word can have two or more meanings.',
        a: ' object-oriented',
        b: ' encapsulation',
        c: ' polymorphism',
        d: ' inheritance',
        correct: 'c'
    }

];



const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");



let currentquiz = 0;
loadquiz();

function loadquiz() {
    const currentquizdata = quizdata[currentquiz];
    questionEl.innerText = currentquizdata.question;
    a_text.innerText = currentquizdata.a;
    b_text.innerText = currentquizdata.b;
    c_text.innerText = currentquizdata.c;
    d_text.innerText = currentquizdata.d;


}

submitBtn.addEventListener('click', () => {
    currentquiz++;
    loadquiz();

    if (currentquiz < quizdata.length) {
        loadquiz();
    } else { alert("you finisheddd") };
})