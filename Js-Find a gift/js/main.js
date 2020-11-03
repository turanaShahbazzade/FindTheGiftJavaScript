let myBtn = document.querySelectorAll("button");
let count = 0;

myBtn.forEach((button) => {
  button.addEventListener("click", function () {
    count++;
    if (count < 2) {
      button.style.display = "none";
      let myImg = button.nextElementSibling;
      myImg.style.filter = "blur(0px)";
    } else {
      button.style.display = "none";
      let myImg = button.nextElementSibling;
      myImg.style.filter = "blur(0px)";
      myBtn.forEach((button) => (button.style.display = "none"));
    }
  });
});
