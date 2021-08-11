const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
const insertRequest = new model.InsertCommentRequest({
    name: "Sample.docx",
    comment: new model.CommentInsert({
        rangeStart: new model.DocumentPosition({
            node: new model.NodeLink({
                nodeId: "0.3.0.3"
            }),
            offset: 0
        }),
        rangeEnd: new model.DocumentPosition({
            node: new model.NodeLink({
                nodeId: "0.3.0.3"
            }),
            offset: 0
        }),
        initial: "IA",
        author: "Imran Anwar",
        text: "A new Comment"
    })
});

return wordsApi.insertComment(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});