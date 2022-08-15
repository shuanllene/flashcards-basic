let C1 = { question: "1+1=?", answer: "2" };

let C2 = { question: "1+2=?", answer: "3" };

let C3 = { question: "2+2=?", answer: "4" };

let Cards = [C1, C2, C3];

i = 0;

document.getElementById("b1").onclick = function () {
  // Wait for a click to be detected in the HTML
  document.getElementById("Q").innerHTML = Cards[i].question;
  document.getElementById("A").innerHTML = "----";
  if (i < Cards.length - 1) {
    i++;
  } else {
    i = 0;
  }
};

document.getElementById("b2").onclick = function () {
  if (i > 0) {
    j = i - 1;
  } else {
    j = Cards.length - 1;
  }
  document.getElementById("A").innerHTML = Cards[j].answer;
};
