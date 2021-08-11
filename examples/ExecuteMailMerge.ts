const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const remoteFileName = "Sample.docx";

const mailMergeRequest = new model.ExecuteMailMergeRequest({
    name: remoteFileName,
    data: "TestExecuteTemplateData.txt",
    destFileName: remoteFileName
});

return wordsApi.executeMailMerge(mailMergeRequest)
.then((mailMergeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of mailMergeRequest: ", mailMergeRequestResult);
});