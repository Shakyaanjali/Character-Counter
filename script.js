document.addEventListener("DOMContentLoaded", function () {
    const inputValue = document.getElementById("input-value");
    const outputValue = document.getElementById("output-value");
  
    inputValue.addEventListener("input", function () {
      const inputText = inputValue.value;
      const characterCount = inputText.length;
      outputValue.innerText = characterCount < 10 ? "0" + characterCount : characterCount;
    });
  });
  