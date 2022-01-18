function expect(numbers, key, expectation) {
  const http = require("http");
  const data = JSON.stringify({
    numbers: numbers,
  });
  let result;
  const options = {
    hostname: "localhost",
    port: 8080,
    path: "/calculate",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const req = http.request(options, (res) => {
    // console.error(`statusCode: ${res.statusCode}`);

    res.on("data", (d) => {
      // result += d;
      result = JSON.parse(d);
      console.log(
        `expect ${numbers} should eql ${expectation}: `,
        result[key] === expectation
      );
      // process.stderr.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();

  // return result;
}

expect([10, 10], "total", 20);
expect([10, -10], "total", 0);
expect([1, 3, 5, 8], "total", 17);
expect([1, "dshd", 8], "message", "The array contains an invalid number");
