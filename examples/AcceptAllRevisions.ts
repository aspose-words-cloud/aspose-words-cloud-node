import * as fs from "fs";

const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const fileName  = "test_doc.docx";

// Upload original document to cloud storage.
const myVar1 = fs.createReadStream(fileName);
const myVar2 = fileName;
const uploadFileRequest = new model.UploadFileRequest({
    fileContent: myVar1,
    path: myVar2
});

wordsApi.uploadFile(uploadFileRequest)
.then((uploadFileRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of UploadFileRequest: ", uploadFileRequestResult);
    // Calls AcceptAllRevisions method for document in cloud.
    const myVar3 = fileName;
    const request = new model.AcceptAllRevisionsRequest({
        name: myVar3
    });

    wordsApi.acceptAllRevisions(request)
    .then((requestResult) => {
        // tslint:disable-next-line:no-console
        console.log("Result of Request: ", requestResult);
    });
});