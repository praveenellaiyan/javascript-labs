let isFileUploaded = true
let isIdUpdated = true

function uploadFile() {
    return new Promise((resolve, reject) => {
        if (isFileUploaded) {
            resolve(1200234879)
        } else {
            reject("Failed to upload file!")
        }
    })
}

function updateFileId(id) {
    return new Promise((resolve, reject) => {
        if (isIdUpdated) {
            resolve("File " + id + " Id updated in repository")
        } else {
            reject("Failed to update ID!")
        }
    })
}
/*

Regular way of promise chaining

uploadFile()
    .then(id => {
        console.log("Uploaded file Id is " + id)
        return updateFileId(id)
    })
    .then(updatedMsg => {
        console.log(updatedMsg)
    })
    .catch(err => {
        console.log(err)
    })
*/

// cleaner way to chain promises
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

fileUpload()