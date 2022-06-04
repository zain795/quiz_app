const firebaseConfig = {
    apiKey: "AIzaSyC-Ur3Sz5qxHLqQYojn-nDtSd2Bbzr7Vas",
    authDomain: "myquizapp-73bad.firebaseapp.com",
    databaseURL: "https://myquizapp-73bad-default-rtdb.firebaseio.com",
    projectId: "myquizapp-73bad",
    storageBucket: "myquizapp-73bad.appspot.com",
    messagingSenderId: "933065751649",
    appId: "1:933065751649:web:87c5497da8a1daab0ebe20",
    measurementId: "G-3Q4VMW7X5H"
  };
  var app = firebase.initializeApp(firebaseConfig);
  var count = 0;
var score =0;
questionsArray = [
    {
        question: "if x is a set contains an integer which is neither positive nor negative then the set x is ",
        answer: 3,
        options: [
            "set is empty ",
            "set is non empty ",
            "set is finite ",
            "set is both non-empty and finite ",
        ]
    },
    {
        question: "If x ∈ N and x is prime, then x is ____ set.",
        answer: 0,
        options: [
            "a.	Infinite set",
            "b.	Finite set",
            "c.	Empty set",
            "d.	Not a set",
        ]
    },
    {
        question: "If x is a set and the set contains the real number between 1 and 2, then the set is ____.",
        answer: 2,
        options: [
          "a.	Infinite set",
          "b.	Finite set",
          "c.	Empty set",
          "d.	Not mentioned",
        ]
    },
    {
        question: "Which of the following is a subset of set {1, 2, 3, 4}?",
        answer: 3,
        options: [
            "	{1, 2}",
            "	{1, 2, 3}",
            "	{1}",
            "	All of the mentioned",
        ]
    },
    {
        question: "Convert the set x in roster form if set x contains the positive prime number, which divides 72.",
        answer: 1,
        options: [
            "a.	{∅}",
            "b.	{2, 3}",
            "c.	{2, 3, 7}",
            "d.	{3, 5, 7}",
        ]
    },
    {
        question: "Power set of empty or Null set has exactly ___ subset.",
        answer: 0,
        options: [
            "a.	One",
            "b.	Two",
            "c.	Zero",
            "d.	Three",
        ]
    },
    {
        question: "What is the Cartesian product of set A and set B, if the set A = {1, 2} and set B = {a, b}?",
        answer: 2,
        options: [
            "a.	{ (1, a), (1, b), (2, a), (b, b) }",
            "b.	{ (1, 1), (2, 2), (a, a), (b, b) }",
            "c.	{ (1, a), (2, a), (1, b), (2, b) }",
            "d.	{ (1, 1), (a, a), (2, a), (1, b) }",
        ]
    },
    {
        question: " The members of the set S = {x | x is the square of an integer and x < 100} is ______",
        answer: 2,
        options: [
            "a.	{0, 2, 4, 5, 9, 55, 46, 49, 99, 81}",
            "b.	{1, 4, 9, 16}",
            "c.	{0, 1, 4, 9, 16, 25, 36, 49, 64, 81",
            "d.	{0, 1, 4, 9, 25, 36, 49, 123}",
        ]
    },
    {
        question: " The intersection of the sets {1, 2, 8, 9, 10, 5} and {1, 2, 6, 10, 12, 15} is the set _____",
        answer: 0,
        options: [
            "a.	{1, 2, 10}",
            "b.	{5, 6, 12, 15}",
            "c.	{2, 5, 10, 9}",
            "d.	 {1, 6, 12, 9, 8}",
        ]
    },
    {
        question: " The difference of {1, 2, 3, 6, 8} and {1, 2, 5, 6} is the set ____",
        answer: 2,
        options: [
            "a.	{1, 3}",
            "b.	{5, 6, 8}",
            "c.	{3, 8}",
            "d.	{2, 6, 5}",
        ]
    },
    {
      question: " If n(A) = 20 and n(B) = 30 and n(A U B) = 40 then n(A ∩ B) is?",
      answer: 3,
      options: [
          "a. 20",
          "b. 30",
          "c. 40",
          "d. 10",
      ]
  },
  {
    question: "Let the players who play cricket be 12, the ones who play football 10, those who play only cricket are 6, then the number of players who play only football are _____, assuming there is a total of 16 players.",
    answer: 2,
    options: [
        "a. 16",
        "b. 8",
        "c. 4",
        "d. 10",
    ]
  },
  {
    question: "Which among the following can be taken as the discrete object?",
    answer: 3,
    options: [
        "a.	People",
        "b.	Rational numbers",
        "c.	Integers",
        "d.	All of the mentioned",
    ]
  },
  {
    question: " Which option contains two equal sets?",
    answer: 1,
    options: [
        "a.	X = {5, 6} and Y = {6}",
        "b.	X = {5, 6, 8, 9} and Y = {6, 8, 5, 9}",
        "c.	X = {5, 6, 9} and Y = {5, 6}",
        "d.	X = {5, 6} and Y = {5, 6, 3}",
    ]
  },
  {
    question: "The cardinality of the Power set of the set {1, 5, 6} is______.",
    answer: 2,
    options: [
        "a. 5",
        "b. 6",
        "c. 8",
        "d. 10",
    ]
  }
  ]
  
 
var options = document.getElementsByName("option")
function calc(){
 
  for(var i = 0; i < options.length; i++){
      if(options[i].checked){
          var ans = options[i].value
          
          
          if(i == questionsArray[count].answer){
            score++
             console.log(score)
         }
         options[i].checked = false
          
      }
  }
 
  
} 

function showques(e) {
  var quest = document.getElementById("ques")
  quest.innerHTML = "Q" + (e + 1) + ")" + questionsArray[e].question
  var options = document.getElementsByClassName("option");
  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = questionsArray[e].options[i]
  }
}
function nextques(){
  var optns = document.getElementsByName("option")
    var btn = document.getElementById("next_btn")
    var cond = false;
    for(var i = 0; i < optns.length; i++){
        if (optns[i].checked == true){
          calc()
       
          cond = true
        }
    }
    if(cond){
    if(count < questionsArray.length-1){
        count++
        showques(count)
        }
        else{
            alert("You have secured " + score + " marks")
            app.database().ref('/userdetails').child(change.id).update({ score: score })
           
            change.scoreboard=score;
          
localStorage.setItem("abcd", score);
// window.open("./remarks.html")
          }
    }
}