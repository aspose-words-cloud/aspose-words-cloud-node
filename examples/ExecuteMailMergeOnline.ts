const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestTemplate = fs.createReadStream("TestExecuteTemplate.doc");
let requestData = fs.createReadStream("TestExecuteTemplateData.txt");
const mailMergeRequest = new model.ExecuteMailMergeOnlineRequest({
    template: requestTemplate,
    data: requestData
});

wordsApi.executeMailMergeOnline(mailMergeRequest)
.then((mailMergeRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of mailMergeRequest: ", mailMergeRequestResult);
});