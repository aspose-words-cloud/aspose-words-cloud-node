const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.doc");
let requestListInsert = new model.ListInsert({
    template: model.ListInsert.TemplateEnum.OutlineLegal
})
const insertRequest = new model.InsertListOnlineRequest({
    document: requestDocument,
    listInsert: requestListInsert
});

wordsApi.insertListOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});