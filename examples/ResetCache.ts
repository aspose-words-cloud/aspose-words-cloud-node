const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const resetRequest = new model.ResetCacheRequest({
});

wordsApi.resetCache(resetRequest)
.then((resetRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of resetRequest: ", resetRequestResult);
});