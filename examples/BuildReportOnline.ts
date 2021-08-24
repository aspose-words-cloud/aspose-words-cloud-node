const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestTemplate = fs.createReadStream("Sample.docx");
let requestReportEngineSettings = new model.ReportEngineSettings({
    dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
    dataSourceName: "persons"
})
const buildReportRequest = new model.BuildReportOnlineRequest({
    template: requestTemplate,
    data: "Data.json",
    reportEngineSettings: requestReportEngineSettings
});

wordsApi.buildReportOnline(buildReportRequest)
.then((buildReportRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of buildReportRequest: ", buildReportRequestResult);
});