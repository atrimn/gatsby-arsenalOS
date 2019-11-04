exports.handler = async function(event, context, callback) {
  // your server-side functionality
  callback(null, {
    statusCode: 200,
    body: "Your deployment succeeded congrats!",
  })
}
