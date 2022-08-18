document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#input").addEventListener("keypress", function(event) {
    if (event.code === "Enter") {
    }
  });
});

var button = document.querySelector('#submitInput');
var inputField = document.getElementById("input");
var inputt = document.querySelector("#submitInput");
var subInput = document.getElementById("submitInput"); 
var inputF = inputField.value;
 var inputtt = "false";

function submitIn(event) {
  let input = inputField.value;
  if (event.type === 'click' && inputField.value && inputtt == "false") {
    inputField.value = "";
     output(input);
 stateHandle();
    
  } else if (event.pointerType && inputField.value && inputtt == "false") {
    inputField.value = "";
     output(input);
 stateHandle();

  } else if (event.key === "Enter" && inputField.value && inputtt == "false") {
    inputField.value = "";
    output(input);
 stateHandle();
    
event.preventDefault();
  } else {
    return false;
    }
  }

inputt.addEventListener('pointerup', submitIn);
inputt.addEventListener('click', submitIn);

var utterances = [
["how are you", "how is life", "how are things"],
["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "hi there"],
["what are you doing", "what is new", "what is going on", "what is up"],
["how old are you"],
["who are you", "are you human", "are you a robot", "are you bot", "are you human or bot", "are you a robot"],   
["how do you top up my bot", "how to top up marketbot", "top-up", "topup", "top up"],
["contact us", "contact-us", "representative", "speak to a representative", "live agent", "agent", "speak to an agent", "speak to a agent", "speak to a live agent"],
["register", "sign up", "sign-up", "how can I register", "how to sign up", "how to register", "how do I register", "how do I sign up"],
["latest news", "update", "team meeting", "meeting", "meeting minutes", "next meeting", "when is the meeting", "when is the next meeting"],
["help"],
];

var answers = [
["Fine... Thanks for asking.", "Pretty well, how can I help you?", "Fantastic, how can I assist?"],
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Greetings!"],
  ["Nothing much.", "Improving customer experience, how can I be of help?", "I don't know actually."],
  ["I am infinite."],
  ["I am just a bot.", "I am a bot. What are you?"],
  ["Visit our /home page and check out the Fund MarketBot dropdown menu.", "You can top up you're Advertising budget through any "],
  ["Ok, 'Live Agent'. Click on 'Contact Us'.", "I see you're looking to speak with a representative. Click 'Contact Us' and we'll be in touch", "A representative, sure. Click on 'Contact Us' and send us a message."],
  ["Click GET USD50 ADS BUDGET to register"],
  ["Looking for the latest news, click on 'Contact Us' and request a copy of the meeting minutes.", "Meeting with Eugene has been postponed to Aug. 23, 2022.", "Meeting minutes on the latest news is available, Click 'Contact Us'.", "Read the latest news and updates on AI Marketing, Contact us for more details."],
  ["Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying 'top up'.", "Say something like 'contact us'.", "You can try saying things like 'register'.", "Have questions, click on 'contact us'.", "Want to learn more? click sign in/sign up for more info.", "Need help? Our support team is here to assist, click on 'contact us' and we'll be in touch."],
];

var alternatives = [
"Have you checked your earnings today? Sign in to see how MarketBot is working for you.", "Try saying 'top up'", "You can say things like 'register'", "Have questions, click on 'contact us' and we'll be in touch.", "Want to learn more? click sign in/sign up for more info", "Need help? Our support team is here to assist, click on 'contact us'.", "I didn't quit get that, try saying 'Latest News'."
];

function stateHandle() {
inputtt = "true";
        inputt.disabled = true;
     setTimeout(() => {
       inputtt = "false";
        inputt.disabled = false;
      inputField.autofocus = true;
      }, 6000);
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

  }, 4000);
       }, 2000);
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
}, 4000);
}, 2000);
}

function openForm() {
   document.getElementById("myForm").style.display = "block";
  var box = document.getElementById('messages');
if (box.childNodes.length === 0) {
  addChatEntryBot();
  inputField.autofocus = true;
  stateHandle();
}
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
