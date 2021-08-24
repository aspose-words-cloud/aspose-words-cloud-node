const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestCommentRangeStartNode = new model.NodeLink({
    nodeId: "0.3.0.3"
})
let requestCommentRangeStart = new model.DocumentPosition({
    node: requestCommentRangeStartNode,
    offset: 0
})
let requestCommentRangeEndNode = new model.NodeLink({
    nodeId: "0.3.0.3"
})
let requestCommentRangeEnd = new model.DocumentPosition({
    node: requestCommentRangeEndNode,
    offset: 0
})
let requestComment = new model.CommentInsert({
    rangeStart: requestCommentRangeStart,
    rangeEnd: requestCommentRangeEnd,
    initial: "IA",
    author: "Imran Anwar",
    text: "A new Comment"
})
const insertRequest = new model.InsertCommentRequest({
    name: "Sample.docx",
    comment: requestComment
});

wordsApi.insertComment(insertRequest)
.then((insertRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of insertRequest: ", insertRequestResult);
});