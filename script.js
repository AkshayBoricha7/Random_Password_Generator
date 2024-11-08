var temp = "";
var password = document.getElementById("password");

document.querySelector("button").addEventListener("click", () => {
  generatePass();
});

function generatePass() {
  password.style.fontWeight = "bold";
  password.style.color = "black";
  temp = "";
  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz";
  let digit = "0123456789";
  let symbol = "!@#$%^&*-_?:,~";

  let select = capital + small + digit + symbol;
  let lengths = [9, 10, 11, 12, 13, 14, 15];
  let len = lengths[Math.floor(Math.random() * lengths.length)];

  for (let i = 0; i < len; i++) {
    temp += select.charAt(Math.floor(Math.random() * select.length));
  }

  let flag = false;
  let containNo = false;
  let containCapital = false;
  let containSmall = false;
  let containSymbol = false;

  for (let i = 0; i < temp.length; i++) {
    let val = temp.charCodeAt(i);
    if (val >= 48 && val <= 57) {
      containNo = true;
    } else if (val >= 97 && val <= 122) {
      containCapital = true;
    } else if (val >= 65 && val <= 90) {
      containSmall = true;
    } else {
      for (let j = 0; j < symbol.length; j++) {
        if (symbol.charCodeAt(j) == val) {
          containSymbol = true;
          break;
        }
      }
    }
  }

  if (containCapital && containSmall && containNo && containSymbol) {
    flag = true;
  }

  if (flag) {
    password.innerHTML = temp;
  } else {
    generatePass();
  }
}

document.querySelector(".copyIcon").addEventListener("click", () => {
  const text = password.textContent || password.innerText;

  // Use the Clipboard API
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
