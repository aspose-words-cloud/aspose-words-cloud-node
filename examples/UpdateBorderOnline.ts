const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestDocument = fs.createReadStream("Sample.docx");
let requestBorderPropertiesColor = new model.XmlColor({
    web: "#AABBCC"
})
let requestBorderProperties = new model.Border({
    borderType: model.Border.BorderTypeEnum.Left,
    color: requestBorderPropertiesColor,
    distanceFromText: 6,
    lineStyle: model.Border.LineStyleEnum.DashDotStroker,
    lineWidth: 2,
    shadow: true
})
const updateRequest = new model.UpdateBorderOnlineRequest({
    document: requestDocument,
    borderProperties: requestBorderProperties,
    borderType: "left",
    nodePath: "tables/1/rows/0/cells/0"
});

wordsApi.updateBorderOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});