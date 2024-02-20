const TypeWriter = function (txtEl, words, wait = 300) {
  this.txtEl = txtEl;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

//Type Method
TypeWriter.prototype.type = function () {
  // current index of word
  const current = this.wordIndex % this.words.length;
  // text of the word
  const fullTxt = this.words[current];

  // check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(this.txt.length + 1);
  }

  // insert txt into element
  this.txtEl.innerHTML = `
 <span class="txt> ${this.txt} </span>
 `;
  setTimeout(() => this.type(), 500);
};

// Type speed
let typeSpeed = 300;

if (this.isDeleting) {
  typeSpeed /= 2;
}

// if word complete
if (!this.isDeleting && this.txt == fullTxt) {
 typeSpeed = this.wait;
 this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
 
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtEl = document.querySelector(".txt-type");
  const words = JSON.parse(txtEl.getAttribute("data-words"));
  const wait = txtEl.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtEl, words, wait);
}
