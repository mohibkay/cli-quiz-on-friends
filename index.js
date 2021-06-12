const readlineSync = require("readline-sync");

let score = 0;

const highScores = [
  {
    name: "rachael",
    score: 2,
  },

  {
    name: "joey",
    score: 1,
  },
];

const questions = [
  {
    question: "Which character has a twin? ",
    options: ["Phoebe", "Ross"],
    answer: "Phoebe",
  },
  {
    question: "How many sisters does Joey have? ",
    options: ["Seven", "Two"],
    answer: "Seven",
  },
  {
    question: "How many times has Ross been married? ",
    options: ["Three", "Two"],
    answer: "Three",
  },
  {
    question: "What’s Phoebe’s sister’s name? ",
    options: ["Ursula", "Ariel"],
    answer: "Ursula",
  },
  {
    question: "What store does Phoebe hate? ",
    options: ["Pottery Barn", "Crate & Barrel"],
    answer: "Pottery Barn",
  },
];

function welcome() {
  const username = readlineSync.question("What's your name? ");

  console.log("Welcome, " + username + ", to F.R.I.E.N.D.S quiz?");
  return username;
}

function play(question, options, answer) {
  const index = readlineSync.keyInSelect(options, question);

  if (options[index]?.toLowerCase() === answer.toLowerCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }

  console.log("current score: ", score);
  console.log("-------------");
}

function game() {
  for (item of questions) {
    const { question, options, answer } = item;
    play(question, options, answer);
  }
}

function showScores(currentUser) {
  if (score >= 3) {
    highScores.unshift({
      name: currentUser,
      score,
    });
    console.log("Whoa! You scored the highest: ", score);

    console.log("Check out the score board, you are in it");
  } else {
    console.log("You scored: ", score);
    console.log("Check out the high scores");
  }

  highScores.map((item) => console.log(item.name, " : ", item.score));
}
const currentUser = welcome();
game();
showScores(currentUser);
