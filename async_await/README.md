# ASYNC/AWAIT

Hope you're aware of [promise](https://github.com/praveenellaiyan/javascript-labs/tree/master/promise). If not please do check it out.

Async/Await provides easy way to handle promise. Is a syntatic sugar for promise chaining.

The function that has a prefix <b>async</b> denotes that this function will return promise. Even if result is not a promise it wraps the result as promise and returns.

<b>await</b> can be used only inside of async function and it lets you to wait until promise settled before proceeding to next action.

It supports handy mechanism to handle exceptions using <b>try{ .. } catch{ .. }</b> block.

## Use cases
1. Do file upload asynchronously and promise to update file id in database once file gets uploaded successfully.
2. Initiate download action and continue to do other actions. Once download completed notify users.

## Implementation
```javascript
async function fileUpload() {
    try {
        let fileId = await uploadFile()
        console.log("Uploaded file Id is " + fileId)

        let updatedMsg = await updateFileId(fileId)
        console.log(updatedMsg)
    } catch(err) {
        console.log(err)
    }
}
```