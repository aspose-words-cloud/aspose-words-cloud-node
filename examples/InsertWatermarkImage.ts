const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertWatermarkImageRequest({
    name: "Sample.docx",
    imageFile: undefined,
    image: "Sample.png"
});

wordsApi.insertWatermarkImage(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});