const http = require("http");
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  // console.error is same as process.stderr.write
  // The requirement did not specify what part of the logs should be logged, so I logged the request url
  console.error(new Date().toLocaleString(), req.url);
  switch (req.url) {
    case "/calculate":
      if (req.method === "POST") {
        let rawBody = "";
        let numbers;
        try {
          req.on("data", function (data) {
            rawBody += data;
          });
          req.on("end", () => {
            console.error(new Date().toLocaleString(), rawBody);
            numbers = JSON.parse(rawBody).numbers;
            var valid = numbers.every(function (element) {
              return typeof element === "number";
            });
            if (valid) {
              res.writeHead(200);
              res.end(
                JSON.stringify({
                  total: numbers.reduce((partial_sum, a) => partial_sum + a, 0),
                })
              );
            } else {
              res.writeHead(422);
              res.end(
                JSON.stringify({
                  error: "Invalid parameters",
                  message: "The array contains an invalid number",
                })
              );
            }
          });
        } catch (error) {
          res.writeHead(422);
          res.end(
            JSON.stringify({
              error: "Unprocessable Entity",
              message: error,
            })
          );
        }
      } else {
        res.writeHead(404);
        res.end(
          JSON.stringify({
            data: "Page Not found!",
          })
        );
      }
      break;

    case "/":
      res.writeHead(200);
      res.end(
        JSON.stringify({
          data: "Hello World!",
        })
      );
      break;
    default:
      res.writeHead(404);
      res.end(
        JSON.stringify({
          data: "Page Not found!",
        })
      );
      break;
  }
});

console.log("Server listening on", PORT);
server.listen(PORT);