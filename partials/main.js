document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keypress", function(event) {
    if (event.code === "Enter") {
    }
  });
});

var utterances = [
  ["\u0068\u006F\u0077\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075", "\u0068\u006F\u0077\u0020\u0069\u0073\u0020\u006C\u0069\u0066\u0065", "\u0068\u006F\u0077\u0020\u0061\u0072\u0065\u0020\u0074\u0068\u0069\u006E\u0067\u0073"],
  ["\u0068\u0069", "\u0068\u0065\u0079", "\u0068\u0065\u006C\u006C\u006F", "\u0067\u006F\u006F\u0064\u0020\u006D\u006F\u0072\u006E\u0069\u006E\u0067", "\u0067\u006F\u006F\u0064\u0020\u0061\u0066\u0074\u0065\u0072\u006E\u006F\u006F\u006E", "\u0067\u006F\u006F\u0064\u0020\u0065\u0076\u0065\u006E\u0069\u006E\u0067", "\u0068\u0069\u0020\u0074\u0068\u0065\u0072\u0065"],
  ["\u0077\u0068\u0061\u0074\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0064\u006F\u0069\u006E\u0067", "\u0077\u0068\u0061\u0074\u0020\u0069\u0073\u0020\u0067\u006F\u0069\u006E\u0067\u0020\u006F\u006E", "\u0077\u0068\u0061\u0074\u0020\u0069\u0073\u0020\u0075\u0070"],
  ["\u0068\u006F\u0077\u0020\u006F\u006C\u0064\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075"],
  ["\u0077\u0068\u006F\u0020\u0061\u0072\u0065\u0020\u0079\u006F\u0075", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0068\u0075\u006D\u0061\u006E", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0062\u006F\u0074", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0068\u0075\u006D\u0061\u006E\u0020\u006F\u0072\u0020\u0062\u006F\u0074", "\u0061\u0072\u0065\u0020\u0079\u006F\u0075\u0020\u0061\u0020\u0072\u006F\u0062\u006F\u0074"],
  ["\u0068\u006F\u0077\u0020\u0064\u006F\u0020\u0079\u006F\u0075\u0020\u0074\u006F\u0070\u0020\u0075\u0070\u0020\u006D\u0079\u0020\u0062\u006F\u0074", "\u0068\u006F\u0077\u0020\u0074\u006F\u0020\u0074\u006F\u0070\u0020\u0075\u0070\u0020\u006D\u0061\u0072\u006B\u0065\u0074\u0062\u006F\u0074", "\u0074\u006F\u0070-\u0075\u0070", "\u0074\u006F\u0070\u0075\u0070", "\u0074\u006F\u0070\u0020\u0075\u0070"],
  ["\u0077\u0069\u0074\u0068\u0064\u0072\u0061\u0077\u0061\u006C\u0073", "\u0077\u0069\u0074\u0068\u0064\u0072\u0061\u0077\u0061\u006C"],
["\u0072\u0065\u0067\u0069\u0073\u0074\u0065\u0072", "\u0073\u0069\u0067\u006E\u0020\u0075\u0070", "\u0073\u0069\u0067\u006E\u0075\u0070"],
  ["\u0068\u0065\u006C\u0070", "\u0061\u0067\u0065\u006E\u0074", "\u0073\u0070\u0065\u0061\u006B\u0020\u0074\u006F\u0020\u0061\u006E\u0020\u0061\u0067\u0065\u006E\u0074", "\u006C\u0069\u0076\u0065\u0020\u0061\u0067\u0065\u006E\u0074", "\u0073\u0070\u0065\u0061\u006B\u0020\u0074\u006F\u0020\u0061\u0020\u0072\u0065\u0070\u0072\u0065\u0073\u0065\u006E\u0074\u0061\u0074\u0069\u0076\u0065", "\u0072\u0065\u0070\u0072\u0065\u0073\u0065\u006E\u0074\u0061\u0074\u0069\u0076\u0065"],
];

var answers = [
   [
    "Fine... Thanks for asking.",
    "Pretty well, how can I help you?",
    "Fantastic, how can I assist?"
  ],
  [
   "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy!"
  ],
  [
    "Nothing much.",
    "About to go to sleep.",
    "Can you guess?",
    "I don't know actually."
  ],
  ["I am infinite."],
  ["I am just a bot.", "I am a bot. What are you?"],
  ["Visit our /home page and check out the Fund MarketBot dropdown menu."],
  ["Withdrawal have been paused as they update their website.", "The withdrawal module is being updated, check back later for more info.", "Please allow some time for withdrawal to open up again."],
  ["Click GET USD50 ADS BUDGET to register"],
["Want to chat with our service team? Click 'Contact Us'.", "Ok, Speak to an Agent. Click 'Contact Us' and send us a message.", "You want to speak to a representative? Click the 'Contact Us' button and we'll be in touch."],
];

var alternatives = [
"Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying 'top up'.", "Say something like 'withdrawal'.", "You can say things like 'register'.", "Have questions, click on 'Contact Us.'", "Want to learn more? Click 'GET USD50 ADS BUDGET' for more info.", "Need help? Our support team is here to assist, click on 'Contact Us'.", "Did you know that AI chat bots can improve customer service. Type help for more options.", "Ask me a question like 'register', 'top up', or 'speak to an agent'."
];
function submitIn() {
var inputField = document.getElementById("input");
var inputt = document.querySelector("#input");
var subInput = document
.querySelector("#submitInput")
  .addEventListener("click", () => {
   // this.submitIn();


 // });
inputt.disabled = false;
//addChatEntryBot();
//subInput.addEventListener("click", function() {
let input = inputField.value;
     //if (subInput.clicked == true && inputField.value) {
    inputField.value = "";
    output(input);
 stateHandle();
     //  event.preventDefault();
//}
});
}
});
var inputField = document.getElementById("input");
var inputt = document.querySelector("#input");
inputt.disabled = false;
//addChatEntryBot();
inputField.addEventListener("keypress", function(event) {
let input = inputField.value;
     if (event.key === "Enter" && inputField.value) {
    inputField.value = "";
    output(input);
 stateHandle();
    event.preventDefault();
}
});

function stateHandle() {
        inputt.disabled = true;
     setTimeout(() => {
        inputt.disabled = false;
      }, 10000);
}

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(utterances, answers, text)) {
    product = compare(utterances, answers, text);
  }
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }
  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  var messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>\u0059\u006F\u0075\u003A<br>${input}<br><br></span>`;
  messagesContainer.appendChild(userDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = " ";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);
  setTimeout(() => {
  botText.innerText = "\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0054\u0079\u0070\u0069\u006E\u0067\u002E\u002E\u002E\u000D\u000D";
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;
  setTimeout(() => {
    botText.innerText = `\u0041\u0067\u0065\u006E\u0074\u003A\u000D${product}\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  }, 5000);
       }, 5000);
}

function addChatEntryBot() {
var messagesContainer = document.getElementById("messages");
let botDiv = document.createElement("div");
let botText = document.createElement("span");
botDiv.id = "bot";
botDiv.className = "bot response";
botText.innerText = " ";
botDiv.appendChild(botText);
messagesContainer.appendChild(botDiv);
setTimeout(() => {
botText.innerText = "\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0054\u0079\u0070\u0069\u006E\u0067\u002E\u002E\u002E\u000D\u000D";
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
setTimeout(() => {
botText.innerText = `\u0041\u0067\u0065\u006E\u0074\u003A\u000D\u0048\u0069\u0020\u0074\u0068\u0065\u0072\u0065\u002C\u0020\u0049\u0027\u006D\u0020\u0079\u006F\u0075\u0072\u0020\u0041\u0049\u0020\u0061\u0073\u0073\u0069\u0073\u0074\u0061\u006E\u0074\u002E\u0020\u0048\u006F\u0077\u0020\u0063\u0061\u006E\u0020\u0049\u0020\u0068\u0065\u006C\u0070\u0020\u0079\u006F\u0075\u003F\u000D\u000D`;
messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
}, 5000);
}, 2000);
}

function openForm() {
   document.getElementById("myForm").style.display = "block";
  var box = document.getElementById('messages');
if (box.childNodes.length === 0) {
  addChatEntryBot();
}
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
