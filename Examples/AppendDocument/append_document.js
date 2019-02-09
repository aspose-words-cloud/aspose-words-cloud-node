// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, DocumentEntry, DocumentEntryList, PostAppendDocumentRequest } = require("asposewordscloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = 'test_doc.docx';
var documentToAppend = "test_multi_pages.docx";
var data_path = '../../TestData/Common/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= data_path + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

storageApi.PutCreate(documentToAppend, versionId=null, storage=null, file= data_path + documentToAppend , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var docEntry = new DocumentEntry();
docEntry.href = documentToAppend;
docEntry.importFormatMode = "KeepSourceFormatting";
var request = new PostAppendDocumentRequest();
request.documentList = new DocumentEntryList();
request.documentList.documentEntries = [docEntry];
request.name = fileName;
request.folder = "";

wordsApi.postAppendDocument(request).then((result) => {
    console.log('API Response:', result);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});