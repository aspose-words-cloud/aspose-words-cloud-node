const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const mailMergeRequest = new model.ExecuteMailMergeOnlineRequest({
    template: fs.createReadStream(documentsDir + "TestExecuteTemplate.doc"),
    data: fs.createReadStream(documentsDir + "TestExecuteTemplateData.txt")
});

return wordsApi.executeMailMergeOnline(mailMergeRequest)
.then((mailMergeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of mailMergeRequest: ", mailMergeRequestResult);
});