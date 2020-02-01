const sub = document.querySelector('.submit')
const city = document.querySelector('.city')

function setCookie(name, value, options = {}) {

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
  console.log(name=value)
}
let setCook = setCookie("city", city, {secure: true, 'max-age': 120})
sub.addEventListener("onclick", setCook)