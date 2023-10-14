/* eslint-disable */
import "bootstrap";
import "./style.css";
import "";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let excuse = "";
  let excuseNumberWho = Math.floor(Math.random() * 3);
  let excuseNumberAction = Math.floor(Math.random() * 3);
  let excuseNumberWhat = Math.floor(Math.random() * 2);
  let excuseNumberWhen = Math.floor(Math.random() * 4);

  excuse =
    who[excuseNumberWho] +
    " " +
    action[excuseNumberAction] +
    " " +
    what[excuseNumberWhat] +
    " " +
    when[excuseNumberWhen] +
    ".";

  return excuse;

  //console.log("Hello Rigo from the console!");
};

console.log(excuse);
