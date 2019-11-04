exports.handler = function(event, context, callback) {
  // your server-side functionality
  console.log("Your deployment succeeded congrats!")
  callback(null, {
    statusCode: 200,
    body: "Your deployment succeeded congrats!",
  })
}
