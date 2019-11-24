# PROMISE

In javascript most of the actions are done asynchronously meaning [it is started at certain point and completed later, meanwhile other actions will be executed].

So, if at all we need to do certain actions once this asynchronous execution is performed then we need to write callback function.

Let's say we need to do perform multiple asynchronous action sequentially then we would end up in writing complex nested callback function. Which is difficult to understand/organize code as well as nightmare to handle errors. 

That's where promise comes to the picture. It is similar to the promises made in real time. Once you commit to something either it has to fulfilled or unfulfilled.

If the promise is fulfilled it is said to be resolved otherwise rejected.

## Use cases
1. Do file upload asynchronously and promise to update file id in database once file gets uploaded successfully.
2. Initiate download action and continue to do other actions. Once download completed notify users.

## Implementation
```javascript
function downloadFile() {
    return new Promise((resolve, reject) => {
        if(isDownloaded) {
            resolve("File downloaded successfully :) !!")
        } else {
            reject(new Error("Failed to download file :("))
        }
    })
}

downloadFile().then(message => {
    console.log(message)
}).catch(error => {
    console.log(error.message)
})
```