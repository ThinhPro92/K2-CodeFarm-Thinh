const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", () => {
  const words = textInput.value.trim().split(/\s+/).filter(Boolean);
  wordCount.textContent = `Số từ: ${words.length}`;

  const remain = 200 - textInput.value.length;
  charCount.textContent = `Số ký tự còn lại: ${remain}`;

  if (remain <= 20) {
    charCount.classList.add("warning");
  } else {
    charCount.classList.remove("warning");
  }
});
