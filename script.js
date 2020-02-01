const header = new Headers({
	'Access-Control-Allow-Credentials': true, 
  'Access-Control-Allow-Origin': '*'
})

const SE = new EventSource('http://localhost:8080/', header);
const sub = document.querySelector('input#sub')

function setCook(){
	console.log("okk")
	let city = document.querySelector('input#city')
	console.log(city)
}
sub.addEventListener("click", setCook)