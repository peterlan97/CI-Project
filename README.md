# Cambridge Intelligence DevOps Project

## Introduction to Node.js service

This Node.js service creates a Node.js server listening on port 8080, and uses http protocol to This service allows numbers to be passed through the post request and then adds up, numbers when there is two or more to give an output of the calculation. It also validates the type of data that is handled, and will thorw an error if its not a number that has been inputted.

Within your local environment, you are able to have the Node server running and test it out, using a tool such as Postman to create requests. You would need to locally run the service using the below command, making sure that you are within the working directory of the application :

``` bash
node index.js
```

This will start the service. On the conso will get a response saying Server listening on port 8080, which will indicate that it has started with no issues, and if you navigate to http://localhost:8080 on your browser, you will be greated by a message saying Hello World!.

To run the e2e test script locally, you just need to start it by running the below command.
``` bash 
node e2etest.js
```
To make sure this runs, and validates the tests correctly, its important to make sure that the node server is running as the test script works alongside the node service and it cant work by itself. 
The e2e test scripts validate the post request from the Node service where I have set 4 scenarios. These scenarios will create post requests against the node service, and if validated correctly, there would be an output as shown below.

``` bash
expect 10,10 should eql 20:  true
expect 1,dshd,8 should eql The array contains an invalid number:  true
expect 10,-10 should eql 0:  true
expect 1,3,5,8 should eql 17:  true
```

