// start slideShow
slidre_container = document.querySelector(".slider-container");
imgsArray = Array.from(document.querySelectorAll(".slider-container img"));
imgLength = imgsArray.length;

currentIndex = 1;
function createUnordredList() {
  uList = document.createElement("ul");
  for (let i = 1; i <= imgLength; i++) {
    ListItem = document.createElement("li");
    ListItem.setAttribute("data-index", i);
    ListItem.innerText = i;
    uList.appendChild(ListItem);
  }
  document.querySelector("#indicators").appendChild(uList);
}
createUnordredList();
prevButton = document.querySelector("#prev");
nextButton = document.querySelector("#next");
prevButton.onclick = prev;
nextButton.onclick = next;
function prev() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex--;
    theChecker();
  }
}
function next() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentIndex++;
    theChecker();
  }
}

slideNumber = document.querySelector(".slide-number");
ListItemArray = Array.from(document.querySelectorAll("ul li"));
function theChecker() {
  slideNumber.innerText = "slide # " + currentIndex + " of " + imgLength;
  if (currentIndex === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentIndex === imgLength) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
  removeActive_AddActive();
}
theChecker();
function removeActive_AddActive() {
  imgsArray.forEach((img) => {
    img.classList.remove("active");
  });
  ListItemArray.forEach((li) => {
    li.classList.remove("active");
  });
  imgsArray[currentIndex - 1].classList.add("active");
  ListItemArray[currentIndex - 1].classList.add("active");
}

ListItemArray.forEach((li) => {
  li.onclick = function () {
    currentIndex = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
});
// End the slideShow