# Cambridge Intelligence DevOps Project

## Introduction to Node.js service

This Node.js service creates a Node.js server listening on port 8080, and uses http protocol to This service allows numbers to be passed through the post request and then adds up, numbers when there is two or more to give an output of the calculation. It also validates the type of data that is handled, and will thorw an error if its not a number that has been inputted.

Within your local environment, you are able to have the Node server running and test it out, using a tool such as Postman to create requests. You would need to locally run the service using the below command:

```javascript
node index.js
```

This will start the service, and if you navigate to http://localhost:8080 on your browser, you will be greatued by a message