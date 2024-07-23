let home = document.querySelector("#home");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");

home.addEventListener("click", () => {
  function remove() {
    document.querySelectorAll("h3").forEach((h3) => {
      h3.style.display = "none";
    });
  }
  first.style.display = "block";
});
about.addEventListener("click", () => {
  document.querySelectorAll("h3").forEach((h3) => {
    h3.style.display = "none";
  });
  second.style.display = "block";
});
contact.addEventListener("click", () => {
  document.querySelectorAll("h3").forEach((h3) => {
    h3.style.display = "none";
  });
  third.style.display = "block";
});
