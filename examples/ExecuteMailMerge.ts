const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const mailMergeRequest = new model.ExecuteMailMergeRequest({
    name: "Sample.docx",
    data: "TestExecuteTemplateData.txt"
});

wordsApi.executeMailMerge(mailMergeRequest)
.then((mailMergeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of mailMergeRequest: ", mailMergeRequestResult);
});