exports.handler = async function(event, context, callback) {
  // your server-side functionality
  console.log("test")
  callback(null, {
    statusCode: 200,
    body: "Hello, World",
  })
}
