const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const buildReportRequest = new model.BuildReportOnlineRequest({
    template: fs.createReadStream(documentsDir + "Sample.docx"),
    data: "Data.json",
    reportEngineSettings: new model.ReportEngineSettings({
        dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
        dataSourceName: "persons"
    })
});

return wordsApi.buildReportOnline(buildReportRequest)
.then((buildReportRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of buildReportRequest: ", buildReportRequestResult);
});