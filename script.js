const sub = document.querySelector('.submit')
const city = document.querySelector('.city')
function setCookie(name, value, options = {}) {
	console.log("ok")
  options = {
    path: '/',
    max-age: 3600,
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
sub.addEventListener("submit", function(){setCookie("User", "KAT", secure })
