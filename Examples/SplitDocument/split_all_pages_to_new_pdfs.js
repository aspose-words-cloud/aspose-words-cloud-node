// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, PostSplitDocumentRequest } = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = 'test_multi_pages.docx';
var data_path = '../../TestData/Common/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= data_path + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var request = new PostSplitDocumentRequest();                
request.name = fileName;
request.format = "pdf";
request.from = null; // Splitting starts from the first page of the document
request.to = null; // splitting ends at the last page of the document
request.folder = ""; // Input file exists at the root of the storage
request.destFileName = "";

wordsApi.postSplitDocument(request).then((result) => {
    console.log('API Response:', result);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});