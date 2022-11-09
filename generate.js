"use strict";
const recepiantInput = document.querySelector(".form__recipient");
const reInput = document.querySelector(".form__subjectline");
const ccInput = document.querySelector(".form__cc");
const bccInput = document.querySelector(".form__bcc");
const msgInput = document.querySelector(".form__msg");
const genButton = document.querySelector(".form__generate");
const mainForm = document.querySelector(".mgenerator");
const postLinkControl = document.querySelector(".post__link__ctrl");
const copyClipboardButton = document.querySelector(".copy__link");
console.log(
  "If you are wondering why this site looks like its from the 90s, it's because I have yet to learn any advanced CSS. Sorry."
);
let finalOutput;
genButton.addEventListener("click", function (e) {
  postLinkControl.textContent = "";
  e.preventDefault();
  let outputLink = `mailto:`;
  const linkComponents = [];
  if (recepiantInput.value) {
    outputLink += recepiantInput.value + "?";
  } else {
    alert("You must specify the default recipient.");
    return -1;
  }
  if (reInput.value) {
    linkComponents.push(`subject=${encodeURIComponent(reInput.value)}`);
  }
  if (ccInput.value) {
    linkComponents.push(`cc=${ccInput.value}`);
  }
  if (bccInput.value) {
    linkComponents.push(`bcc=${bccInput.value}`);
  }
  if (msgInput.value) {
    linkComponents.push(`body=${encodeURIComponent(msgInput.value)}`);
  }
  console.log(linkComponents);
  finalOutput = outputLink.concat(linkComponents.join("&"));
  copyClipboardButton.classList.remove("hidden");
  postLinkControl.insertAdjacentHTML(
    "afterbegin",
    `
  <p>Your new link:</p>
  <p class=output>${finalOutput}</p>
  <p><a href=${finalOutput}>Test link</a></p>
  `
  );
});

copyClipboardButton.addEventListener("click", function () {
  navigator.clipboard.writeText(finalOutput);
  copyClipboardButton.textContent = "Link copied!";
  setTimeout(
    () => (copyClipboardButton.textContent = "Copy link to clipboard"),
    3000
  );
});
