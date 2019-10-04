// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, PutCommentRequest, NodeLink, DocumentPosition, Comment} = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = "test_multi_pages.docx";
var dataPath = '../../TestData/Common/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= dataPath + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var request = new PutCommentRequest();
request.name = fileName;
request.folder = "";

var nodeLink = new NodeLink();
nodeLink.nodeId = "0.0.3";
var documentPosition = new DocumentPosition();
documentPosition.node = nodeLink;
documentPosition.offset = 0;

request.comment = new Comment();
request.comment.rangeStart = documentPosition;
request.comment.rangeEnd = documentPosition;
request.comment.initial = "IA";
request.comment.author = "Imran Anwar";
request.comment.text = "A new Comment";

wordsApi.putComment(request).then((result) => {
	console.log('API Response:', result.body);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});