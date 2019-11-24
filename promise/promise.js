let isDownloaded = false

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