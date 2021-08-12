const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const insertRequest = new model.InsertListOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.doc"),
    listInsert: new model.ListInsert({
        template: model.ListInsert.TemplateEnum.OutlineLegal
    })
});

return wordsApi.insertListOnline(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});