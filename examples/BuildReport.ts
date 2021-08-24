const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestReportEngineSettingsReportBuildOptions = [
    model.ReportBuildOptions.AllowMissingMembers,
    model.ReportBuildOptions.RemoveEmptyParagraphs
]
let requestReportEngineSettings = new model.ReportEngineSettings({
    dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
    reportBuildOptions: requestReportEngineSettingsReportBuildOptions
})
const buildReportRequest = new model.BuildReportRequest({
    name: "Sample.docx",
    data: "Data.json",
    reportEngineSettings: requestReportEngineSettings
});

wordsApi.buildReport(buildReportRequest)
.then((buildReportRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of buildReportRequest: ", buildReportRequestResult);
});