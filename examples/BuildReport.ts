const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const buildReportRequest = new model.BuildReportRequest({
    name: "Sample.docx",
    data: "Data.json",
    reportEngineSettings: new model.ReportEngineSettings({
        dataSourceType: model.ReportEngineSettings.DataSourceTypeEnum.Json,
        reportBuildOptions: [
            model.ReportBuildOptions.AllowMissingMembers,
            model.ReportBuildOptions.RemoveEmptyParagraphs
        ]
    })
});

return wordsApi.buildReport(buildReportRequest)
.then((buildReportRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of buildReportRequest: ", buildReportRequestResult);
});