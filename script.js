const form = document.querySelector('.forma')
console.log("func")
function setCookie(name, value, options = {}) {
	console.log("ok")
  options = {
    path: '/',
  };

  if (options.expires.toUTCString) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
  console.log(name=value, document.cookie)
}
console.log("popopopopo")
form.addEventListener("submit", function(){ console.log(form.elements.value.value)})
