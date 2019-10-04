// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const { WordsApi, CompareData, PostCompareDocumentRequest } = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName1 = "compareTestDoc1.doc";
var fileName2 = "compareTestDoc2.doc";
var dataPath = '../../TestData/DocumentActions/CompareDocument/';

storageApi.PutCreate(fileName1, versionId=null, storage=null, file= dataPath + fileName1 , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

storageApi.PutCreate(fileName2, versionId=null, storage=null, file= dataPath + fileName2 , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var request = new PostCompareDocumentRequest();
request.name = fileName1;
request.folder = "";
request.destFileName = "CompareDocumentOut.doc";
request.compareData = new CompareData({ author: "author", comparingWithDocument: fileName2, dateTime: new Date(2015, 10, 26) });

wordsApi.postCompareDocument(request).then((result) => {
	console.log('API Response:', result.body);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});