document.querySelector("#phoneNum").addEventListener("input", (event) => {
  const regex = /^(\(?\d{3}\)?)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const format = document.querySelector(".phoneFormat");
  const input = document.querySelector("#phoneNum");
  const phone = input.value.trim();
  const found = regex.test(phone);
  if (!found && phone.length) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

document.querySelector("#phoneForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#phoneNum");
  const regex = /[- .]/g;
  const savedNum = input.value.replaceAll(regex, "");
  console.log(savedNum);
});

document.querySelector("#textForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = / {2,}/g;
  const textEntry = document.querySelector("#textEntry");
  const text = textEntry.value;
  const newText = text.replaceAll(regex, " ").trim();
  console.log(newText);
  const encodedText = encodeURI(text);
  const encodedNewText = encodeURI(newText);
  console.log(encodedText);
  console.log(encodedNewText);
});
