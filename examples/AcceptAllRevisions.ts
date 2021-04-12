import * as fs from "fs";

const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const fileName  = "test_doc.docx";

// Upload original document to cloud storage.
const uploadFileRequest = new model.UploadFileRequest({
    fileContent: fs.createReadStream(documentsDir + fileName),
    path: fileName
});

return wordsApi.uploadFile(uploadFileRequest)
.then((uploadFileRequestResult) => {
    console.log("Result of UploadFileRequest: ", uploadFileRequestResult);
    // Calls AcceptAllRevisions method for document in cloud.
    const request = new model.AcceptAllRevisionsRequest({
        name: fileName
    });

    return wordsApi.acceptAllRevisions(request)
    .then((requestResult) => {
        console.log("Result of Request: ", requestResult);
    });
});