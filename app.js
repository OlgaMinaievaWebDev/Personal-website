// const TypeWriter = function (txtEl, words, wait = 300) {
//   this.txtEl = txtEl;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// //Type Method
// TypeWriter.prototype.type = function () {};

// ES6 class
class TypeWriter {
  constructor(txtEl, words, wait = 3000) {
    this.txtEl = txtEl;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // text of the word
    const fullTxt = this.words[current];

    // check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt into element
    this.txtEl.innerHTML = `
 <span class="txt"> ${this.txt} </span>
 `;

    // Type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // if word complete
    if (!this.isDeleting && this.txt == fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Move to next word
      this.wordIndex++;
      //Pause before typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
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
