// // Add your code here

function submitData( name, email ) {
  let configration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    };
    
  return fetch( 'http://localhost:3000/users', configration )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}
let name = "Steve"
let email = "steve@steve.com"
submitData(name , email)
