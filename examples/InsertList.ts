const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertListRequest({
    name: "TestGetLists.doc",
    listInsert: new model.ListInsert({
        template: model.ListInsert.TemplateEnum.OutlineLegal
    })
});

return wordsApi.insertList(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});