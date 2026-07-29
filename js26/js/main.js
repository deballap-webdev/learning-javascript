const phoneNum = document.querySelector("#phoneNum");
phoneNum.addEventListener("input", (event) => {
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

const phoneForm = document.querySelector("#phoneForm");
phoneForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#phoneNum");
  const regex = /[- .]/g;
  const savedNum = input.value.replaceAll(regex, "");
  console.log(savedNum);
});
