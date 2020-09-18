// Add your code here
function submitData(name , email) {
  let configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name ,
    email,
  })
}
    fetch('http://localhost:3000/user' ,configurationObject )
    then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
  .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
}

let name = "Steve"
let email = "steve@steve.com"
submitData(name , email)
