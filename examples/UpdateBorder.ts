const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestBorderPropertiesColor = new model.XmlColor({
    web: "#AABBCC"
})
let requestBorderProperties = new model.Border({
    borderType: model.Border.BorderTypeEnum.Left,
    color: requestBorderPropertiesColor,
    distanceFromText: 6.0,
    lineStyle: model.Border.LineStyleEnum.DashDotStroker,
    lineWidth: 2.0,
    shadow: true
})
const updateRequest = new model.UpdateBorderRequest({
    name: "Sample.docx",
    borderType: "left",
    borderProperties: requestBorderProperties,
    nodePath: "tables/1/rows/0/cells/0"
});

wordsApi.updateBorder(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});