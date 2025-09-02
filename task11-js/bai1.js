const btn = document.querySelector("#btn_change");
const body = document.querySelector("body");
const thinhText = document.getElementById("thinhText");
if (localStorage.getItem("theme") === "dark") {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
}

btn.addEventListener("click", function () {
  if (body.classList.contains("dark-mode")) {
    console.log("click");
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    console.log("click");
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }

  thinhText.addEventListener("click", () => {
    thinhText.classList.toggle("active");
  });
});
