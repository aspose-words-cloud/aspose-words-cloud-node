const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const documentsDir = "./";
const updateRequest = new model.UpdateCommentOnlineRequest({
    document: fs.createReadStream(documentsDir + "Sample.docx"),
    commentIndex: 0,
    comment: new model.CommentUpdate({
        rangeStart: new model.DocumentPosition({
            node: new model.NodeLink({
                nodeId: "0.3.0"
            }),
            offset: 0
        }),
        rangeEnd: new model.DocumentPosition({
            node: new model.NodeLink({
                nodeId: "0.3.0"
            }),
            offset: 0
        }),
        initial: "IA",
        author: "Imran Anwar",
        text: "A new Comment"
    })
});

return wordsApi.updateCommentOnline(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});