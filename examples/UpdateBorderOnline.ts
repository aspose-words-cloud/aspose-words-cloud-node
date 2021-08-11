const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateBorderOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    borderProperties: new model.Border({
        borderType: model.Border.BorderTypeEnum.Left,
        color: new model.XmlColor({
            web: "#AABBCC"
        }),
        distanceFromText: 6,
        lineStyle: model.Border.LineStyleEnum.DashDotStroker,
        lineWidth: 2,
        shadow: true
    }),
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.updateBorderOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});