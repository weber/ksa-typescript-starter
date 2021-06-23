

console.log('hello')
var client = new AuthSessionClient('https://web-ep.oikdev.local/auth/')
client.getSessionId()
  .then(r => {
    console.log('tokenData', r)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
