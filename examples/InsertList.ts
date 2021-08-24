const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestListInsert = new model.ListInsert({
    template: model.ListInsert.TemplateEnum.OutlineLegal
})
const insertRequest = new model.InsertListRequest({
    name: "TestGetLists.doc",
    listInsert: requestListInsert
});

wordsApi.insertList(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});