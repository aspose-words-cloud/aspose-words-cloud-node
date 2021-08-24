const clientId = "####-####-####-####-####";
const secret = "##################";
const wordsApi = new WordsApi(clientId, secret);
let requestCommentRangeStartNode = new model.NodeLink({
    nodeId: "0.3.0"
})
let requestCommentRangeStart = new model.DocumentPosition({
    node: requestCommentRangeStartNode,
    offset: 0
})
let requestCommentRangeEndNode = new model.NodeLink({
    nodeId: "0.3.0"
})
let requestCommentRangeEnd = new model.DocumentPosition({
    node: requestCommentRangeEndNode,
    offset: 0
})
let requestComment = new model.CommentUpdate({
    rangeStart: requestCommentRangeStart,
    rangeEnd: requestCommentRangeEnd,
    initial: "IA",
    author: "Imran Anwar",
    text: "A new Comment"
})
const updateRequest = new model.UpdateCommentRequest({
    name: "Sample.docx",
    commentIndex: 0,
    comment: requestComment
});

wordsApi.updateComment(updateRequest)
.then((updateRequestResult) => {
    // tslint:disable-next-line:no-console
    console.log("Result of updateRequest: ", updateRequestResult);
});