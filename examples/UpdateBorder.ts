const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const updateRequest = new model.UpdateBorderRequest({
    name: "Sample.docx",
    borderType: "left",
    borderProperties: new model.Border({
        borderType: model.Border.BorderTypeEnum.Left,
        color: new model.XmlColor({
            web: "#AABBCC"
        }),
        distanceFromText: 6.0,
        lineStyle: model.Border.LineStyleEnum.DashDotStroker,
        lineWidth: 2.0,
        shadow: true
    }),
    nodePath: "tables/1/rows/0/cells/0"
});

return wordsApi.updateBorder(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});