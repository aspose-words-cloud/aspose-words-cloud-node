const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const classifyRequest = new model.ClassifyRequest({
    text: "Try text classification",
    bestClassesCount: "3"
});

wordsApi.classify(classifyRequest)
.then((classifyRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of classifyRequest: ", classifyRequestResult);
});