// For complete examples and data files, please go to https://github.com/aspose-words-cloud/aspose-words-cloud-node

const {WordsApi, PostDocumentExecuteMailMergeRequest, PutExecuteMailMergeOnlineRequest } = require("asposewordscloud");
var fs = require('fs'); 

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var BaseUrl = "https://api.aspose.cloud"
var debugMode = false
var version = "v1.1"

wordsApi = new WordsApi(AppSid, AppKey, BaseUrl, debugMode, version);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var templateFile = "SampleMailMergeTemplate.docx";
var dataFile = "SampleMailMergeTemplateData.txt";
var localPath = '../../TestData/DocumentActions/MailMerge/';

storageApi.PutCreate(templateFile, versionId=null, storage=null, file= localPath + templateFile, function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var request = new PostDocumentExecuteMailMergeRequest();
request.name = templateFile;
request.folder = "";
request.data = fs.readFileSync(localPath + dataFile, "utf8");
request.withRegions = false;

wordsApi.postDocumentExecuteMailMerge(request).then((result) => {
	console.log('API Response:', result.body);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});